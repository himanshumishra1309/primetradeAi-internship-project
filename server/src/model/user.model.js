import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  f_name:{
    type: String,
    required: true,
  },
  l_name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  dob:{
    type: Date,
    required: true,
  },
  contact_no:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
}, {timestamps: true});

userSchema.pre('save', async function(){
  if(!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(this.password, password);
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this.id,
      email: this.email
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model('User', userSchema);