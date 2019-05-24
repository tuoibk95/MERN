import VehiclePartController from "../../controller/partner/VehiclePartController";
const express = require('express');
const router = express.Router();

let vehiclePartnerController = new VehiclePartController();

router.get('/', vehiclePartnerController.getListVehicles);
router.get('/get-detail-vehicle-partner', vehiclePartnerController.getDetailVehicleParter);

module.exports = router;