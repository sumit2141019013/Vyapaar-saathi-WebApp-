const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  allHawkers,
  updateUserProfile,
  ShowProfile
} = require("../controllers/userControllers.js");
const { protect } = require("../middleware/authmiddleware.js");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);

router.route("/showProfile").get(protect,ShowProfile);
router.post("/login", authUser);
router.route("/profile").put(protect, updateUserProfile);
router.route("/market").get(allHawkers);

module.exports = router;
