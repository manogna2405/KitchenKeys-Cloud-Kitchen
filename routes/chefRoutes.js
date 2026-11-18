
const express = require("express");
const router = express.Router();

const chefController = require("../controllers/chefController");

// GET all chefs
router.get("/", chefController.getAllChefs);

// GET chef by ID
router.get("/:id", chefController.getChefById);

// POST add chef
router.post("/", chefController.addChef);

// PUT update chef
router.put("/:id", chefController.updateChef);

// DELETE chef
router.delete("/:id", chefController.deleteChef);

module.exports = router;
