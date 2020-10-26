const express = require('express');
const router = express.Router();
//const ObjectId = require('mongodb').ObjectId;
const DepartmentController = require('../controllers/departments.controller');

router.get('/departments', DepartmentController.getAll);

router.get('/departments/random', DepartmentController.getRandom);

router.get('/departments/:id', DepartmentController.getId);

router.post('/departments', DepartmentController.postDoc);

router.put('/departments/:id', DepartmentController.putId);

router.delete('/departments/:id', DepartmentController.deleteId);

module.exports = router;
