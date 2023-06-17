const Floor = require('../models/Bmodels/Floor.model'); // Import the Floor model

exports.addFloor = (req, res) => {
  const deviceid = req.params['deviceid'];
  const deviceType = req.params['devicetype'];
  const v1 = req.params['v1'];
  const v2 = req.params['v2'];
  const v3 = req.params['v3'];
  const c1 = req.params['c1'];
  const c2 = req.params['c2'];
  const c3 = req.params['c3'];
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

  if (deviceType === "three") {
    if (!v2)
      return res.status(500).send({ message: "Invalid v2 Value for device" });
    if (!v3)
      return res.status(500).send({ message: "Invalid v3 Value for device" });
    if (!c2)
      return res.status(500).send({ message: "Invalid c2 Value for device" });
    if (!c3)
      return res.status(500).send({ message: "Invalid c3 Value for device" });
  }

  try {
    const floorData = {
      deviceid: deviceid,
      deviceType: deviceType,
      v1: v1,
      v2: v2,
      v3: v3,
      c1: c1,
      c2: c2,
      c3: c3,
      systemstatus: systemstatus,
      faultdetction: faultdetction
    };

    // Create and save the data to the database
    Floor.create(floorData)
      .then(floor => {
        res.status(200).json({ data: floor });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
