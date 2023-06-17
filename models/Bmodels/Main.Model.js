const mongoose = require('mongoose');
const moment = require('moment');

// Define the schema
const mainSchema = new mongoose.Schema({
  deviceid: {
    type: Number,
    required: true,
    
  },
  deviceType: {
    type: String,
    required: true
  },
  v1: {
    type: Number,
    required: true
  },
  v2: {
    type: Number
  },
  v3: {
    type: Number
  },
  c1: {
    type: Number,
    required: true
  },
  c2: {
    type: Number
  },
  c3: {
    type: Number
  },
  systemstatus: {
    type: String
  },
  faultdetction:{
    type: String
  },

  
  created_at: {
    type: String,
    default: () => moment().format('YYYY-MM-DD HH:mm:ss')
  }
  
});

// Create the model
const Main = mongoose.model('Main', mainSchema);

module.exports = Main;