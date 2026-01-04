const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    phone: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["donor", "recipient", "volunteer", "admin"],
      required: true
    },

    /* ===== Donor Specific ===== */
    bloodType: String,
    lastDonationDate: Date,

    /* ===== Recipient Specific ===== */
    hospital: String,
    urgency: String,

    /* ===== Volunteer / General ===== */
    area: String,
    availability: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);

