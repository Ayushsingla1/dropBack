const express = require('express');
const router = express.Router();


const {AdminLogin} = require('../Controller/AdminControllers/AdminLogin.controllers');
const {MallAdminLogin} = require('../Controller/MallAdminControllers/MallLogin.controllers');


router.get('/adminLogin',AdminLogin);
router.get('/mallLogin',MallAdminLogin);


module.exports = router;