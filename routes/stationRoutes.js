const express = require("express");
const router = express.Router();

const stationController = require("../controllers/stationController");

router.get("/", stationController.getAllStations);
router.post("/", stationController.addStation);
router.put("/:id", stationController.updateStation);
router.delete("/:id", stationController.deleteStation);
router.get("/search", stationController.searchStationsByCuisine);
router.get("/bookings/details", stationController.getBookingDetails);
router.get("/:id", stationController.getStationById);

module.exports = router;