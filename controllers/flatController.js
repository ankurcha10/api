const Flat = require('../models/Bmodels/Flat.model'); // Import the Flat model

exports.addFlat = async (req, res) => {
  const deviceid = req.params['deviceid'];
  const deviceType = req.params['devicetype'];
  const v1 = req.params['v1'];
  const c1 = req.params['c1'];
  const systemstatus = req.params['systemstatus'];
  const faultdetction = req.params['faultdetction']

  if (!deviceid)
    return res.status(500).send({ message: "Please provide a unique device id" });
  if (!deviceType)
    return res.status(500).send({ message: "Please provide a deviceType" });
  if (!v1)
    return res.status(500).send({ message: "Invalid v1 Value for device" });
  if (!c1)
    return res.status(500).send({ message: "Invalid c1 Value for device" });

  try {
    const flatData = {
      deviceid: deviceid,
      deviceType: deviceType,
      v1: v1,
      c1: c1,
      systemstatus: systemstatus,
      faultdetction:faultdetction
    };

    // Create and save the data to the database
    const flat = await Flat.create(flatData);
    res.status(200).json({ data: flat });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
