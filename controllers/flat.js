const Flat = require('../models/Bmodels/Flat.model'); // Import the Flat model

exports.getFlatData = async (req, res) => {
  try {
    const FlatData = await Flat.find().lean();
    res.status(200).json(FlatData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};