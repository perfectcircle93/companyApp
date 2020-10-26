const express = require('express');
const router = express.Router();
//const ObjectId = require('mongodb').ObjectId;
const Employee = require('../models/employee.model');

router.get('/employees', async (req, res) => {
  try {
    res.json(await Employee.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/employees/random', async (req, res) => {
  try {
    const count = await Employee.find().countDocuments();
    const random = Math.floor(Math.random() * count);
    const dep = await Employee.findOne().skip(random);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/employees/:id', async (req, res) => {
  try {
    const dep = await Employee.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else {
      res.json(dep);
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.post('/employees', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const newEmployee = new Employee({ firstName: firstName, lastName: lastName });
    await newEmployee.save();
    res.json({ message: 'OK' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.put('/employees/:id', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const dep = await Employee.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else {
      await Employee.updateOne({ _id: req.params.id },{ $set: { firstName: firstName, lastName: lastName } });
      res.json({ message: 'OK' });
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/employees/:id', async (req, res) => {
  try {
    const dep = await Employee.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else {
      await Employee.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
