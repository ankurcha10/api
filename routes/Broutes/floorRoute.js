const controller = require("../../controllers/floorController");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/bms/floor/:deviceid/:devicetype/:v1/:c1/:v2/:c2/:v3/:c3/:systemstatus/:faultdetction",controller.addFloor)}