
// import * as typeVehicleController from "../../../controller/vehicle/TypeVehicleController"
import OptionController from '../../controller/vehicle/OptionController';
const express = require('express');
const router = express.Router();


let optionController = new OptionController();
router.get('/', optionController.getAll);
router.post('/', optionController.postOptionVehicle);
router.get('/get-option-vehicle', optionController.getOptionVehicleById);
router.get('/get-option-vehicle-name', optionController.getOptionVehicleByName);
router.post('/edit-option-vehicle', optionController.editOptionVehicle)
router.get('/get-option-vehicles-priority', optionController.getOptionVehicleByPriority)

module.exports = router;