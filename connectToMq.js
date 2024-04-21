import amqplib from 'amqplib'


const connectToRabbitMQ=  async()=>{
    const mqServer='amqp://guest:guest@localhost:5672'
    const conn=await amqplib.connect(mqServer)
    const channel=await conn.createChannel()
    // await channel.assertQueue(q,{durable:true})
    return channel
}

const rmqChannel=await connectToRabbitMQ()
export default rmqChannel 