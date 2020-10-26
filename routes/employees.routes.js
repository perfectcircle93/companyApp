const express = require('express');
const router = express.Router();
//const ObjectId = require('mongodb').ObjectId;
const EmployeeController = require('../controllers/employees.controller');

router.get('/employees', EmployeeController.getAll);

router.get('/employees/random', EmployeeController.getRandom);

router.get('/employees/:id', EmployeeController.getId);

router.post('/employees', EmployeeController.postDoc);

router.put('/employees/:id', EmployeeController.putId);

router.delete('/employees/:id', EmployeeController.deleteId);

module.exports = router;
