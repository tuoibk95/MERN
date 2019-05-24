
import UserAccountController from "../../controller/user/UserAccountController";
const express = require('express');
const router = express.Router();

const userAccountController = new UserAccountController()

router.get('/', userAccountController.index);
router.get('/users', userAccountController.getAll);
router.get('/users/:username', userAccountController.getUser);
router.get('/login', userAccountController.getLogin);
router.post('/login', userAccountController.postLogin);
router.get('/signup', userAccountController.getSignup);
router.post('/signup', userAccountController.postSignup);
router.get('/profile', userAccountController.getAccount);

module.exports = router;