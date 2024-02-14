const express = require('express');
const router = express.Router();
const { Login } = require('../controllers/Authentication')

router.get('/Login', Login);


module.exports = router;
