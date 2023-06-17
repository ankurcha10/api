const controller = require("../../controllers/flatController");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/bms/flat/:deviceid/:devicetype/:v1/:c1/:systemstatus/:faultdetction",controller.addFlat)}