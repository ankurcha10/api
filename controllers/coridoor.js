const Coridoor = require('../models/Bmodels/Coridoor.model'); // Import the Coridoor model

exports.getCoridoorData = async (req, res) => {
  try {
    const coridoorData = await Coridoor.find().lean();
    res.status(200).json(coridoorData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
