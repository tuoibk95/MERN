
// import * as brandVehicleController from "../../../controller/vehicle/brandVehicleController"
import BrandController from '../../controller/vehicle/BrandController';
const express = require('express');
const router = express.Router();


let brandController = new BrandController();
router.get('/', brandController.getAll);
router.post('/', brandController.postBrandVehicle);
router.get('/get-brand-vehicle', brandController.getBrandVehicleById);
router.get('/get-brand-vehicle-name', brandController.getBrandVehicleByName);
router.post('/edit-brand-vehicle', brandController.editBrandVehicle);
router.get('/get-brand-vehicle-by-type', brandController.getByTypeId);
router.get('/get-brand-vehicle-by-type/:typename', brandController.getByTypeName);

module.exports = router;