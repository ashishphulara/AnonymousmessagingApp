import mongoose, { Schema, Document } from "mongoose";
import { Message } from "postcss";

export interface Meassage extends Document {
  message: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: String;
  email: String;
  password: String;
  verifyCode: String;
  verifyCodeExpiration: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [
      /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
      "please use a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "verification code  is required"],
  },
  verifyCodeExpiration: {
    type: Date,
    required: [true, "verification code  is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  message: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
