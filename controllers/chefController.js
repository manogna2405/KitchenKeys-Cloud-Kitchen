
const db = require("../database");

// GET all chefs
exports.getAllChefs = (req, res) => {
    db.all("SELECT * FROM chefs", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });
};

// GET chef by ID
exports.getChefById = (req, res) => {
    const id = req.params.id;

    db.get("SELECT * FROM chefs WHERE chef_id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: "Chef not found" });
        }
        res.status(200).json(row);
    });
};

// POST add chef
exports.addChef = (req, res) => {
    const { chef_name, email } = req.body;

    if (
        typeof chef_name !== "string" ||
        typeof email !== "string" ||
        !chef_name.trim() ||
        !email.trim()
    ) {
        return res.status(400).json({
            message: "Valid chef name and email are required"
        });
    }

    db.run(
        "INSERT INTO chefs (chef_name, email) VALUES (?, ?)",
        [chef_name.trim(), email.trim()],
        function (err) {
            if (err) {
                if (err.message.includes("UNIQUE")) {
                    return res.status(409).json({
                        message: "Email already exists"
                    });
                }
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                message: "Chef added successfully",
                chef_id: this.lastID,
                chef_name,
                email
            });
        }
    );
};

// PUT update chef
exports.updateChef = (req, res) => {
    const id = req.params.id;
    const { chef_name, email } = req.body;

    if (
        typeof chef_name !== "string" ||
        typeof email !== "string" ||
        !chef_name.trim() ||
        !email.trim()
    ) {
        return res.status(400).json({
            message: "Valid chef name and email are required"
        });
    }

    db.run(
        "UPDATE chefs SET chef_name = ?, email = ? WHERE chef_id = ?",
        [chef_name.trim(), email.trim(), id],
        function (err) {
            if (err) {
                if (err.message.includes("UNIQUE")) {
                    return res.status(409).json({
                        message: "Email already exists"
                    });
                }
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: "Chef not found" });
            }

            res.status(200).json({ message: "Chef updated successfully" });
        }
    );
};

// DELETE chef
exports.deleteChef = (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM chefs WHERE chef_id = ?", [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: "Chef not found" });
        }

        res.status(200).json({ message: "Chef deleted successfully" });
    });
};
