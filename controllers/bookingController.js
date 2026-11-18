
const db = require("../database");

// GET all bookings
exports.getAllBookings = (req, res) => {
    db.all("SELECT * FROM bookings", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });
};

// GET booking by ID
exports.getBookingById = (req, res) => {
    const id = req.params.id;

    db.get(
        "SELECT * FROM bookings WHERE booking_id = ?",
        [id],
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!row) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }
            res.status(200).json(row);
        }
    );
};

// POST add booking
exports.addBooking = (req, res) => {
    const {
        chef_id,
        station_id,
        booking_date,
        start_time,
        end_time
    } = req.body;

    if (
        !chef_id ||
        !station_id ||
        !booking_date ||
        !start_time ||
        !end_time
    ) {
        return res.status(400).json({
            message: "All booking fields are required"
        });
    }

    if (start_time >= end_time) {
        return res.status(400).json({
            message: "End time must be after start time"
        });
    }

    db.run(
        `INSERT INTO bookings
        (chef_id, station_id, booking_date, start_time, end_time)
        VALUES (?, ?, ?, ?, ?)`,
        [chef_id, station_id, booking_date, start_time, end_time],
        function (err) {
            if (err) {
                return res.status(400).json({
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Booking added successfully",
                booking_id: this.lastID
            });
        }
    );
};

// PUT update booking
exports.updateBooking = (req, res) => {
    const id = req.params.id;

    const {
        chef_id,
        station_id,
        booking_date,
        start_time,
        end_time
    } = req.body;

    if (
        !chef_id ||
        !station_id ||
        !booking_date ||
        !start_time ||
        !end_time
    ) {
        return res.status(400).json({
            message: "All booking fields are required"
        });
    }

    if (start_time >= end_time) {
        return res.status(400).json({
            message: "End time must be after start time"
        });
    }

    db.run(
        `UPDATE bookings
        SET chef_id = ?, station_id = ?, booking_date = ?,
        start_time = ?, end_time = ?
        WHERE booking_id = ?`,
        [chef_id, station_id, booking_date, start_time, end_time, id],
        function (err) {
            if (err) {
                return res.status(400).json({
                    error: err.message
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }

            res.status(200).json({
                message: "Booking updated successfully"
            });
        }
    );
};

// DELETE booking
exports.deleteBooking = (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM bookings WHERE booking_id = ?",
        [id],
        function (err) {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }

            res.status(200).json({
                message: "Booking deleted successfully"
            });
        }
    );
};
