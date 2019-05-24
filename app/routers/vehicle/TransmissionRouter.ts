
// import * as TransmissionVehicleController from "../../../controller/vehicle/TransmissionVehicleController"
import TransmissionController from '../../controller/vehicle/TransmissionController';
const express = require('express');
const router = express.Router();


let transController = new TransmissionController();
router.get('/', transController.getAll);
router.post('/', transController.postTransmissionVehicle);
router.get('/get-transmission-vehicle', transController.getTransmissionById);
router.get('/get-transmission-vehicle-name', transController.getTransmissioneByName);
router.post('/edit-transmission-vehicle', transController.editTransmissionVehicle)

module.exports = router;