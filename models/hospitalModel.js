const mongoose = require("mongoose");
const slugify = require("slugify");

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A hospital must have a name"],
      unique: true,
      trim: true,
    },
    slug: String,
    address: {
      type: String,
      required: [true, "A hospital must have an address"],
    },
    state: {
      type: String,
      required: [true, "A hospital must have a state"],
    },
    pincode: {
      type: String,
      required: [true, "A hospital must have a pincode"],
    },
    nonEmergencyBeds: {
      type: Number,
      required: [
        true,
        "A hospital must specify the number of non-emergency beds",
      ],
    },
    emergencyBeds: {
      type: Number,
      required: [true, "A hospital must specify the number of emergency beds"],
    },
    email: {
      type: String,
      default: "test@email.com",
    },
    password: {
      type: String,
      default: "1234",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save middleware to create slug
hospitalSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
