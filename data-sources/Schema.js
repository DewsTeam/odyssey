import { Schema } from 'mongoose'
import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL);


export const UsersModel = mongoose.model('users', new Schema({ 
  name:String,
  email: String,
  phoneNumber:String,
  nidNumber: String,
  isMarried: Boolean,
  lastBloodGivenAt: Date,
  bloodGivenCount: Number  
}))

