const Main = require('../models/Bmodels/Main.Model'); // Import the Main model

exports.getMainData = async (req, res) => {
  try {
    const mainData = await Main.find().lean();
    res.status(200).json(mainData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
