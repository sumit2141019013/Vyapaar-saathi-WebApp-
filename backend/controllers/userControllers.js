const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken.js");
const bcrypt =require("bcryptjs");




const registerUser = asyncHandler(async (req, res) => {
  const { name, email,options, password,pic } = req.body;

  if (!name || !email ||!options ||!password) {
    res.status(400);
    throw new Error("Please Enter All The Feilds");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name, email,options, password,pic
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,

      options:user.options,
     
      pic: user.pic,
    

      token: generateToken(user._id),
    });
  } else {
    registerUser.status(400);
    throw new Error("Failed to create the user");
  }
});









const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // && (await user.matchpassword(password))
  if (user && await bcrypt.compare(password,user.password) ) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      pic1: user.pic1,
      pic2: user.pic2,
      pic3: user.pic3,
      pic4: user.pic4,
      pic5: user.pic5,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? // console.log(keyword);
      {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

  res.send(users);
});


const allHawkers = asyncHandler(async (req, res) => {
      


  const users = await User.find({ options:"hawker"});

  res.send(users);
});



const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, phone,work, address, pincode, pic, pic1, pic2, pic3, pic4, pic5 } = req.body;

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.work = work || user.work;
    user.address = address || user.address;
    user.pincode = pincode || user.pincode;
 
    user.pic = pic || user.pic;
    user.pic1 = pic1 || user.pic1;
    user.pic2 = pic2 || user.pic2;
    user.pic3 = pic3 || user.pic3;
    user.pic4 = pic4 || user.pic4;
    user.pic5 = pic5 || user.pic5;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      work: updatedUser.work,
      address: updatedUser.address,
      pincode: updatedUser.pincode,
      pic: updatedUser.pic,
      pic1: updatedUser.pic1,
      pic2: updatedUser.pic2,
      pic3: updatedUser.pic3,
      pic4: updatedUser.pic4,
      pic5: updatedUser.pic5,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});


const ShowProfile = asyncHandler(async (req, res) => {


  const user = await User.findById(req.user._id);

  if (user) {
  
    res.json(user);
}  else {
    res.status(404);
    throw new Error("User not found");
  }
});

const UserFeedPost=asyncHandler(async (req, res)=>{
   
})





module.exports = { registerUser, authUser, allUsers,allHawkers ,updateUserProfile,ShowProfile};
