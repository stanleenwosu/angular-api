const express = require('express')
const router = express.Router()
const firebase = require('../routes/firebase')

router.get('/', (req, res) => {
    res.send("Routed to API")
})


// Gets all the employees in the database
router.get('/employees', (req, res) => {
    let list = []
    firebase.getAllEmployees()
        .then((data) => {
            data.forEach(item => list.push(item.data()))
            res.json(list)
        })
        .catch(err => res.send(err))
})

//Get an employee data by adding the employee key as a query "key"
router.get('/employee', (req, res) => {
    const employeeKey = req.query.key
    firebase.getAnEmployee(employeeKey)
        .then(data => {
            res.send(data.data())
        })
        .catch(err => res.send(err))

})

//deletes an employee data by adding the employee key as a query "key"
router.get('/delete-employee', (req, res) => {
    const employeeKey = req.query.key
    firebase.deleteEmployee(employeeKey)
        .then(result => {
            res.send(result)
        })
        .catch(err => res.send(err))
})

// updates an employee data by adding the employee key and data as a query "key" and "data" respectively
router.post('/update-employee', (req, res) => {
    const employeeKey = req.query.key
    const employeeData = req.query.data
    firebase.updateEmployee(employeeKey, employeeData)
        .then(result => {
            res.send(result)
        })
        .catch(err => res.send(err))
})

module.exports = router