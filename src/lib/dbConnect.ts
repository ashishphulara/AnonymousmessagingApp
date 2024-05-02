import mongoose, { Mongoose } from "mongoose";

type ConnectionObject = {
  isConnected?: number,
};

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("already connected to db")
    }
        try {
           const db =  await mongoose.connect(process.env.MONGO_URI || "" )
           connection.isConnected = db.connections[0].readyState
           console.log("database connected sucessfully")
        } catch (error) {
            console.log("database connection failed" , error)
            process.exit(1)
        }
    }

    export default dbConnect
