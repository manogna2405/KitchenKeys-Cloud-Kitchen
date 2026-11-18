
const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

// GET all bookings
router.get("/", bookingController.getAllBookings);

// GET booking by ID
router.get("/:id", bookingController.getBookingById);

// POST add booking
router.post("/", bookingController.addBooking);

// PUT update booking
router.put("/:id", bookingController.updateBooking);

// DELETE booking
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
