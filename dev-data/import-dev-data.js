const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Hospital = require("./../models/hospitalModel");

dotenv.config({
  path: "/Users/sudip/Desktop/Hospital Admin/config.env",
});

console.log(process.env.DATABASE); // Add this to check if DATABASE is loaded
console.log(process.env.DATABASE_PASSWORD);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {}).then(() => console.log("DB connection successful!"));

// READ JSON FILE
const hospital = JSON.parse(
  fs.readFileSync(`${__dirname}/hospital-sample.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Hospital.create(hospital);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Hospital.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

///node import-dev-data.js --delete    for deleting data
///node import-dev-data.js --import     for importing data
