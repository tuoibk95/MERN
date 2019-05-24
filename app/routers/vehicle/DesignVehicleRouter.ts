
// import * as DesignVehicleController from "../../../controller/vehicle/DesignVehicleController"
import DesignController from '../../controller/vehicle/DesignController';
const express = require('express');
const router = express.Router();


let designController = new DesignController();
router.get('/', designController.getAll);
router.post('/', designController.postDesignVehicle);
router.get('/get-design-vehicle', designController.getDesignById);
router.get('/get-design-vehicle-name', designController.getDesigneByName);
router.post('/edit-design-vehicle', designController.editDesignVehicle)

module.exports = router;