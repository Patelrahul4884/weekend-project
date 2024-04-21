import jwt from "jsonwebtoken"
import { sendJSONResponse } from "./config.js"

export const signJwt = async (payload, secretKey, expireTime) => {
    try {
        return jwt.sign(
            payload,
            secretKey,
            { expiresIn: expireTime, algorithm: "HS256" }
        )
    }
    catch (err) {
        return ("JWT sign Error", err)
    }
}

export const verifyJwt = async (token, secretKey) => {
    try {
        return jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return { success: false, message: err.message }
            }
            else {
                // console.log(decoded);
                return { success: true, message: decoded }
            }
        })
    } catch (error) {
        return ("JWT Verify Error", error)
    }
}


export const authVerify = async (req, res, next) => {
    try {
        const a_token = req.cookies.access_token
        const r_token = req.cookies.refresh_token
        if (!a_token && !r_token) {
            return sendJSONResponse(res, 401, null, 'MISSING_TOKEN', "Unauthorized tokens: User dont have permission to access this resource")
        }
        if (!a_token) {
            const rtVerifier = await verifyJwt(
                r_token,
                process.env.REFRESH_TOKEN_SECRET
            )
            if (!rtVerifier.success) {
                return sendJSONResponse(res, 401, null, 'UNAUTHORIZED_ACCESS', "Unauthorized refresh token: User dont have permission to access this resource")
            }
            const payloadId = rtVerifier.message.userId
            const accessToken = await signJwt(
                { payloadId },
                process.env.ACCESS_TOKEN_SECRET,
                '24h'
            )
            res.cookie('access_token', accessToken, {
                httpOnly: true,
                // httpOnly: false,
                sameSite: 'None',
                path: '/'
                // maxAge: 24*60*60*1000 //24 hours max age
            })
            res.cookie('refresh_token', r_token, {
                httpOnly: true,
                // httpOnly: false,
                sameSite: 'None',
                path: '/'
                // maxAge: 7*24*60*60*1000 //7 days max age
            })
            // sendJSONResponse(res,200,payloadId,'AUTHORIZED',"Authorized access: User is authorized to access this resource")
            next();
        }
        else {
            const atVerifier = await verifyJwt(
                a_token,
                process.env.ACCESS_TOKEN_SECRET
            )
            if (!atVerifier.success) {
                return sendJSONResponse(res, 401, null, 'UNAUTHORIZED_ACCESS', "Unauthorized access token: User dont have permission to access this resource")
            }
            else {
                const payloadId = atVerifier.message.userId
                // sendJSONResponse(res,200,payloadId,'AUTHORIZED',"Authorized access: User is authorized to access this resource")
                // console.log("next",next())
                // console.log(atVerifier.message);
                req.token = atVerifier.message
                next();
            }
        }
    } catch (error) {
        return sendJSONResponse(res, 500, null, 'INTERNAL_SERVER_ERROR', error.stack)
    }
}