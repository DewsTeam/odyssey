import { Schema } from 'mongoose'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/odyssey');


export const UsersModel = mongoose.model('users', new Schema({ 
  name:String,
  email: String,
  phoneNumber:String,
  nidNumber: String,
  isMarried: Boolean,
  lastBloodGivenAt: String,
  bloodGivenCount: Number  
}))

