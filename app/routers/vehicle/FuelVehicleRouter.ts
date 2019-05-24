
// import * as fuelVehicleController from "../../../controller/vehicle/fuelVehicleController"
import FuelController from '../../controller/vehicle/FeulController';
const express = require('express');
const router = express.Router();


let transController = new FuelController();
router.get('/', transController.getAll);
router.post('/', transController.postFuelVehicle);
router.get('/get-fuel-vehicle', transController.getFuelById);
router.get('/get-fuel-vehicle-name', transController.getFueleByName);
router.post('/edit-fuel-vehicle', transController.editFuelVehicle)

module.exports = router;