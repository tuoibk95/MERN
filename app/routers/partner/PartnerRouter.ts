import PartnerController from "../../controller/partner/PartnerController";
import CityController from "../../controller/partner/CityController";
const express = require('express');
const router = express.Router();

let partnerController = new PartnerController();
let cityController = new CityController();

router.get('/', partnerController.getDetailPartner);
// router.post('/', partnerController.postCreate);
router.get('/list', partnerController.getDetailPartner);


module.exports = router;