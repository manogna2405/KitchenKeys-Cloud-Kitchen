const db = require("../database");

// Get all stations
exports.getAllStations = (req, res) => {
    db.all("SELECT * FROM stations", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(rows);
    });
};

// Get station by ID
exports.getStationById = (req, res) => {
    const id = req.params.id;

    db.get(
        "SELECT * FROM stations WHERE station_id = ?",
        [id],
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (!row) {
                return res.status(404).json({ message: "Station not found" });
            }

            res.status(200).json(row);
        }
    );
};

// Add a new station
exports.addStation = (req, res) => {
    const { station_name, cuisine } = req.body;

    if (
    typeof station_name !== "string" ||
    typeof cuisine !== "string" ||
    !station_name.trim() ||
    !cuisine.trim()
) {
    return res.status(400).json({
        message: "Valid station name and cuisine are required"
    });
}

    db.run(
        "INSERT INTO stations (station_name, cuisine) VALUES (?, ?)",
        [station_name, cuisine],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                message: "Station added successfully",
                station_id: this.lastID,
                station_name,
                cuisine
            });
        }
    );
};

// Update station
exports.updateStation = (req, res) => {
    const id = req.params.id;
    const { station_name, cuisine } = req.body;

    if (!station_name || !cuisine) {
        return res.status(400).json({
            message: "Station name and cuisine are required"
        });
    }

    db.run(
        "UPDATE stations SET station_name = ?, cuisine = ? WHERE station_id = ?",
        [station_name, cuisine, id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Station not found"
                });
            }

            res.status(200).json({
                message: "Station updated successfully"
            });
        }
    );
};

// Delete station
exports.deleteStation = (req, res) => {
    const id = req.params.id;

    db.run(
        "DELETE FROM stations WHERE station_id = ?",
        [id],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Station not found"
                });
            }

            res.status(200).json({
                message: "Station deleted successfully"
            });
        }
    );
};

// Search stations by cuisine
exports.searchStationsByCuisine = (req, res) => {
    const cuisine = req.query.cuisine;

    if (!cuisine || !cuisine.trim()) {
        return res.status(400).json({
            message: "Cuisine parameter is required"
        });
    }

    db.all(
        "SELECT * FROM stations WHERE cuisine LIKE ?",
        [`%${cuisine.trim()}%`],
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(200).json(rows);
        }
    );
};

// Get booking details using JOIN
exports.getBookingDetails = (req, res) => {
    const sql = `
        SELECT
            b.booking_id,
            c.chef_name,
            s.station_name,
            s.cuisine,
            b.booking_date,
            b.start_time,
            b.end_time
        FROM bookings b
        INNER JOIN chefs c ON b.chef_id = c.chef_id
        INNER JOIN stations s ON b.station_id = s.station_id
    `;

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json(rows);
    });
};