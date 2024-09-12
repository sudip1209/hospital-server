const Hospital = require("./../models/hospitalModel");

exports.getAllHospitals = async (req, res) => {
  try {
    // EXECUTE QUERY
    const hospitals = await Hospital.find(); // Fixed the query to use `find()` to get all hospitals

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: hospitals.length,
      data: {
        hospitals,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({
        status: "fail",
        message: "No hospital found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        hospital,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createHospital = async (req, res) => {
  try {
    const newHospital = await Hospital.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        hospital: newHospital,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!hospital) {
      return res.status(404).json({
        status: "fail",
        message: "No hospital found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        hospital,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteHospital = async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
