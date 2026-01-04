const express = require("express");
const BloodInventory = require("../models/BloodInventory");

const router = express.Router();

/* ===== GET ALL INVENTORY ===== */
router.get("/", async (req, res) => {
  try {
    const inventory = await BloodInventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ===== ADD / UPDATE BLOOD GROUP ===== */
router.post("/update", async (req, res) => {
  const { bloodGroup, units } = req.body;

  try {
    let record = await BloodInventory.findOne({ bloodGroup });

    if (record) {
      record.units = units;
      await record.save();
    } else {
      record = new BloodInventory({ bloodGroup, units });
      await record.save();
    }

    res.json({ message: "Inventory updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

