const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const Emp = require('../models/emp')

router.get('/', async (req, res) => {
    try {
        const employee = await Emp.find()
        res.json(employee)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {

    try {
        const emp = await Emp.findById(req.params.id)
        res.json(emp)
    } catch (err) {
        res.send('Invalid user id.')
        return res.status(400).send({ message: "Invalid User ID." });
    }
})

router.post('/', async (req, res) => {
    const emp = new Emp({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
    })
    try {
        res.send('Data Succefully Added.')
        const a1 = await emp.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const emp = await Emp.findById(req.params.id)
        emp.name = req.body.name,
            emp.city = req.body.city,
            emp.age = req.body.age
        const a1 = await emp.save()

        res.send('Data Succefully Updated.')
    } catch (err) {
        res.send('Error ')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const emp = await Emp.findByIdAndRemove(req.params.id)
        res.send('Data Succefully Deleted.')
    } catch (err) {
        res.send('Invalid user id. ')
    }
})

module.exports = router