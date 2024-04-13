"use strict"

import mongoose from 'mongoose'

const rolesSchema= new mongoose.Schema({
    name:{
        type:String,
        enum:['admin','teacher','mod','student'],
        required:[true,"Role validation failed: Role name is required"]
    },
    permissions:{
        type:[String]
    }
})