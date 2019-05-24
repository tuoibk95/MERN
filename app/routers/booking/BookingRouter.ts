import BookingController from "../../controller/booking/BookingController";
const express = require('express');
const router = express.Router();

let bookingController = new BookingController();

router.get("/", bookingController.getAll);
router.get("/:code", bookingController.getByCode);
router.post("/", bookingController.postCreate);
router.post("/deli-price", bookingController.postCalculateDeliPrice);

module.exports = router;