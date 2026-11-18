const express = require("express");
require("./database");

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("KitchenKeys Cloud Kitchen API is running!");
});

// Station routes
const stationRoutes = require("./routes/stationRoutes");
app.use("/stations", stationRoutes);

const chefRoutes = require("./routes/chefRoutes");
app.use("/chefs", chefRoutes);
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/bookings", bookingRoutes);
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;