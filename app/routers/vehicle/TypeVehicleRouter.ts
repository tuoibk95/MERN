
// import * as typeVehicleController from "../../../controller/vehicle/TypeVehicleController"
import TypeController from '../../controller/vehicle/TypeController';
const express = require('express');
const router = express.Router();


let typeController = new TypeController();
router.get('/', typeController.getAll);
router.post('/', typeController.postTypeVehicle);
router.get('/get-type-vehicle', typeController.getTypeVehicleById);
router.get('/get-type-vehicle-name', typeController.getTypeVehicleByName);
router.post('/edit-type-vehicle', typeController.editTypeVehicle)

module.exports = router;