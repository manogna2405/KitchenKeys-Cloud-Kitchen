
const express = require("express");
require("./database");

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("KitchenKeys Cloud Kitchen API is running!");
});

// Station routes
const stationRoutes = require("./routes/stationRoutes");
app.use("/stations", stationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;