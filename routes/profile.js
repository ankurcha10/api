const express = require("express");
const router = express.Router();


// Define the route for the profile page
router.get("/", async (req, res) => {
  try {
    // Retrieve the user data from the database
    const user = await User.findById(req._id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
