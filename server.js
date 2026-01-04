require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes"); // ✅ ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/inventory", inventoryRoutes); // ✅ ADD THIS

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected - server.js:22"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000 - server.js:26");
});
