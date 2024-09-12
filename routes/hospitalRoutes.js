const express = require("express");
const hospitalController = require("./../controllers/hospitalController");

const router = express.Router();

router
  .route("/")
  .get(hospitalController.getAllHospitals) // For fetching all hospitals
  .post(hospitalController.createHospital); // For creating a new hospital

router
  .route("/:id")
  .get(hospitalController.getHospital) // For fetching a single hospital
  .patch(hospitalController.updateHospital) // For updating a hospital
  .delete(hospitalController.deleteHospital); // For deleting a hospital

module.exports = router;
