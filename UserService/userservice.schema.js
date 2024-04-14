import Joi from "joi";

export const userCreationSchema = Joi.object({
    role: Joi.string()
        .label("User's Role")
        .valid('admin', 'teacher', 'monitor', 'student')
        .lowercase()
        .trim()
        .required()
        .regex(/[${};<>`]/, { invert: true })
        .messages({
            "string.pattern.invert.base": `{{#label}} should not contains symbols like ( '$' , '}' , '{' , ';' , '<' , '>' ,` + " '`' )"
        }),
    name: Joi.string()
        .label("User's Name")
        .min(5)
        .lowercase()
        .max(120)
        .required()
        .regex(/[${};<>`]/, { invert: true })
        .trim()
        .messages({
            "string.pattern.invert.base": `{{#label}} should not contains symbols like ( '$' , '}' , '{' , ';' , '<' , '>' ,` + " '`' )"
        }),
    email: Joi.string()
        .label("User's Email")
        .min(6)
        .max(254)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .lowercase()
        .trim(),
    password: Joi.string()
        .label("User's Password")
        .min(6)
        .max(20)
        .default("Welcome@1234")
        .regex(/[${};<>`]/, { invert: true })
        .trim()
        .messages({
            "string.pattern.invert.base": `{{#label}} should not contains symbols like ( '$' , '}' , '{' , ';' , '<' , '>' ,` + " '`' )"
        }),
    roll_no: Joi.number()
        .label("User's Roll Number")
        .integer()
        .default(0)
        .min(0)
})

export const userSignInSchema = Joi.object({
    email: Joi.string()
        .label("User's Email")
        .min(6)
        .max(254)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .lowercase()
        .trim(),
    password: Joi.string()
        .label("User's Password")
        .min(6)
        .max(20)
        .default("Welcome@1234")
        .regex(/[${};<>`]/, { invert: true })
        .trim()
        .messages({
            "string.pattern.invert.base": `{{#label}} should not contains symbols like ( '$' , '}' , '{' , ';' , '<' , '>' ,` + " '`' )"
        }),
})