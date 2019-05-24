
// import * as typeVehicleController from "../../../controller/vehicle/TypeVehicleController"
import VehicleController from '../../controller/vehicle/VehicleController';
const express = require('express');
const router = express.Router();


let vehicleController = new VehicleController();
router.get('/', vehicleController.getAll);
router.get('/get-vehicle-name', vehicleController.getVehicleByName);
router.post('/', vehicleController.postVehicle);
router.post('/list-vehicle', vehicleController.postVehicle);


module.exports = router;