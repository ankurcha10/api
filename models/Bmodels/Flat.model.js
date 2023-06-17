const mongoose = require('mongoose');
let moment = require('moment')

// Define the schema
const flatSchema = new mongoose.Schema({
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
  c1: {
    type: Number,
    required: true
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
const Flat = mongoose.model('Flat', flatSchema);

module.exports = Flat;
