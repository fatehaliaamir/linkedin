const path = require('path');

const express = require('express');

const connController = require('../controllers/connection');

const router = express.Router();

//connections crud
router.get('/conn', connController.getConn);

router.post('/conn/add-conn', connController.postAddConn);

//router.post('/conn/edit-conn/:conn_Id', connController.getEditConn);

router.post('/conn/edit-conn', connController.postEditConn);

router.post('/conn/delete-conn', connController.postDeleteConn);

module.exports = router;