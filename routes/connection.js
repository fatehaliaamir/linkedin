const path = require('path');

const express = require('express');

const connController = require('../controllers/connection');

const router = express.Router();

//connections crud
router.get('/users/conn', connController.getConn);

router.get('/users/conn/add-conn', connController.getAddConn);

router.post('/users/conn/add-conn', connController.postAddConn);

router.post('/users/conn/edit-conn/:conn_Id', connController.getEditConn);

router.post('/users/conn/edit-conn', connController.postEditConn);

router.post('/users/conn/delete-conn', connController.postDeleteUser);

module.exports = router;