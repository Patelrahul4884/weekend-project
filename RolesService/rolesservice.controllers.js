import { sendJSONResponse } from "../config.js"
import rolesDb from "./rolesservice.db.js"

export const rolesCreation=async(req,res)=>{
    try {
        const {roleName,permissions}=req.body
        let role=await rolesDb.findOne({
            roleName:roleName
        })
        if(role?.roleName===roleName){
            return sendJSONResponse(res,409,null,'RESOURCE_CONFLICT',"Given role is already exist!")
        }
        else{
            let roleCreate=new rolesDb(req.body)
            await roleCreate.save()
            return sendJSONResponse(res,200,roleCreate,"OK","Roles created successfully")
        }
    } catch (error) {
        return sendJSONResponse(res,500,null,'INTERNAL_SERVER_ERROR',error.stack)
    }
}


export const rolesUpdation=async(req,res)=>{
    try {
        const permissions=req.body.permissions

        
    } catch (error) {
        return sendJSONResponse(res,500,null,'INTERNAL_SERVER_ERROR',error.stack)
    }
}

export const rolesRetrieval=async(req,res)=>{
    try {
        const roleName=req.params.name
        if(roleName==="all")
        {
            const roleData=await rolesDb.find({})
            return sendJSONResponse(res,200,roleData,"OK","All roles data fetched successfully!")
        }
        const oneRoleData=await rolesDb.findOne({
            roleName:roleName
        })
        if(oneRoleData===null)
        {
            return sendJSONResponse(res,404,oneRoleData,"NOT_FOUND",`${roleName} role you are looking for is not found!`)
        }
        return sendJSONResponse(res,200,oneRoleData,"OK",`${roleName} role data fetched successfully!`)
    } catch (error) {
        return sendJSONResponse(res,500,null,'INTERNAL_SERVER_ERROR',error.stack)
    }
}