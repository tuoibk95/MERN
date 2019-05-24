
// import * as seatVehicleController from "../../../controller/vehicle/seatVehicleController"
import SeatController from '../../controller/vehicle/SeatController';
const express = require('express');
const router = express.Router();


let seatController = new SeatController();
router.get('/', seatController.getAll);
router.post('/', seatController.postSeatVehicle);
router.get('/get-seat-vehicle', seatController.getSeatById);
router.get('/get-seat-vehicle-number', seatController.getSeateByNumber);
router.post('/edit-seat-vehicle', seatController.editSeatVehicle)

module.exports = router;