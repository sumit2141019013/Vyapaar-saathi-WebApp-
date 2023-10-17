const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required:true,
      default:1234567890
  },
  options:{
      type:String,
      required:true
      
  },
  work: {
       type: String,
      required:true,
      default:"xyz"
  },
  address:{
    type: String,
    required:true,
    default:"xyz"
  },
  pincode:{
      type:Number,
      required:true,
      default:123456
  },
  
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    pic1: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    pic2: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    pic3: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    pic4: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    pic5: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }},
  {
    timestamps: true,
  }
);
userSchema.pre("save",async function(next){
  if(this.isModified("password")){
      this.password= await bcrypt.hash(this.password,12);
  }
  next();
})


const User = mongoose.model("User", userSchema);
module.exports = User;
