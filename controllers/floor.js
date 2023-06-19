const Floor = require('../models/Bmodels/Floor.model'); // Import the Coridoor model

exports.getFloorData = async (req, res) => {
  try {
    const FloorData = await Floor.find().lean();
    res.status(200).json(FloorData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
