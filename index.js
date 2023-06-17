const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const formRoute = require("./routes/formRoute");
const userRoutes = require('./routes/users');
const authRoutes= require("./routes/auth")
const profileRoute= require("./routes/profile")



const cookiesession = require("cookie-session")


const app = express();
app.use(bodyParser.json());
const cors = require('cors');
const passport = require("passport");

app.use(cors())





// MongoDB connection string
const connectionString ="mongodb+srv://ankurcha10:msue4xGPj29ob7Sg@cluster0.zxxjdda.mongodb.net/?retryWrites=true&w=majority"
// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application logic here
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
  app.use(bodyParser.json());

// Routes
app.use("/submit-form", formRoute);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoute);






require("./routes/Broutes/mainRoute")(app)
require("./routes/Broutes/floorRoute")(app)
require('./routes/Broutes/flatRoute')(app)
require("./routes//Broutes/coridoorRoutes")(app)


app.use(
  cookiesession({
    name: "session",
    keys: ["bhramos"],
    maxAge: 24*60*60*1
  })
);

app.use(passport.initialize());
app.use(passport.session())

// Create a Device model
const Device = mongoose.model('Device', {
  deviceId: String,
  pincode: String,
  deviceType: String,
  houseNumber: String,
  locality: String,
  city: String,
  state: String,
});

// Define the API endpoint for adding a device
app.post('/register', (req, res) => {
  const { deviceId, pincode, deviceType, houseNumber, locality, city, state } = req.body;

  // Create a new device instance
  const device = new Device({
    deviceId,
    pincode,
    deviceType,
    houseNumber,
    locality,
    city,
    state,
  });

  // Save the device to the database
  device.save()
    .then(() => {
      res.json({ message: 'Device registered successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});





// Start the server
app.listen(8000, () => {
  console.log("Server listening on port 8000");
});



