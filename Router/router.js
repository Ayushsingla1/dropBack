const express = require('express');
const router = express.Router();


const {AdminLogin} = require('../Controller/Admin');
const {MallAdminLogin} = require('../Controller/MallAdmin');


router.get('/adminLogin',AdminLogin);
router.get('/mallLogin',MallAdminLogin);


module.exports = router;