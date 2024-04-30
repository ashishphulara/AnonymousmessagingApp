import mongoose,{Schema , Document} from "mongoose";
import { Message } from "postcss";

export interface Meassage extends Document {
    message : string;
    createdAt : Date;
}
git 
const MessageSchema : Schema<Message> = new Schema({
    message : {
        type : String,
        required : true
    },
    createdAt :{
        type : String,
        required : true,
        default : Date.now
    }
})