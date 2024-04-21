import { sendJSONResponse } from "../config.js"
// import { createMq } from "./roles.service.js"
// import { connectToRabbitMQ } from "./roles.service.js"
import rolesDb from "./rolesservice.db.js"
import rmqChannel from "../connectToMq.js"

const queue='roles-service-queue'
rmqChannel.assertQueue(queue)

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




export const rolesRetrieval=async(req,res)=>{
    try {
        const roleName=req.params.name
        if(roleName==="all")
        {
            const roleData=await rolesDb.find({})
            console.log(createMq);
            return sendJSONResponse(res,200,roleData,"OK","All roles data fetched successfully!")
        }
        const oneRoleData=await rolesDb.findOne({
            roleName:roleName
        })
        if(oneRoleData===null)
        {
            return sendJSONResponse(res,404,oneRoleData,"NOT_FOUND",`${roleName} role you are looking for is not found!`)
        }
        // const data1={name:"test", role:"test"}
        // createMq.sendToQueue('user-service-queue',Buffer.from(JSON.stringify(oneRoleData)))
        // // channel.consume('role-service-queue',(data)=>{
        // //     console.log("consumed from role service queue");
            
        // // })
        // // channel.consume('roles-service-queue',(data)=>{
        // //     console.log("consuming data here");
        // //     data2=JSON.parse(data)
        // //     channel.ack(data)
        // // })
        return sendJSONResponse(res,200,oneRoleData,"OK",`${roleName} role data fetched successfully!`)
    } catch (error) {
        return sendJSONResponse(res,500,null,'INTERNAL_SERVER_ERROR',error.stack)
    }
}