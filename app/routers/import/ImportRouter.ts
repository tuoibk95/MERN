
import AppController from "../../controller/global/AppController";
const express = require('express');
const router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require('path');

const appController = new AppController()

router.get('/', appController.index);
router.post('/upload-car', upload.single('data'), appController.uploadCar)
router.post('/upload-moto',upload.single('data'),appController.uploadMoto)
router.post('/upload-vehicle-partner',upload.single('data'),appController.uploadVehiclePartner)
router.post('/upload-partner',upload.single('data'),appController.uploadPartner)

module.exports = router;