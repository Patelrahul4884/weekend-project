"use strict"

import mongoose from 'mongoose'

const rolesSchema= new mongoose.Schema({
    roleName:{
        type:String,
        enum:['admin','teacher','monitor','student'],
        required:[true,"Role validation failed: Role name is required"]
    },
    permissions:{
        create:{
            type:[String],
            required:[true,"Role validation failed: Create permissions are required"]
        },
        read:{
            type:[String],
            required:[true,"Role validation failed: Read permissions are required"]
        },
        update:{
            type:[String],
            required:[true,"Role validation failed: Update permissions are required"]
        },
        delete:{
            type:[String],
            required:[true,"Role validation failed: Delete permissions are required"]
        }
    },
},{timestamps:true})

const rolesDb=mongoose.model("RolesDB",rolesSchema)

export default rolesDb