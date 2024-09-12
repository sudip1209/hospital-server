// updateHospitals.js
const mongoose = require("mongoose");
const Hospital = require("../models/hospitalModel"); // Adjust the path as needed
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" }); // Adjust the path if necessary

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Connect to MongoDB
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateHospitals = async () => {
  try {
    await Hospital.updateMany(
      { email: { $exists: false } },
      {
        $set: {
          email: "test.email.com",
          password: "1234",
        },
      }
    );
    console.log("Update complete");
  } catch (error) {
    console.error("Error updating documents:", error);
  } finally {
    mongoose.disconnect();
  }
};

updateHospitals();
