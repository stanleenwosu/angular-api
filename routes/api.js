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
    const employeeId = req.query.key
    firebase.getAnEmployee(employeeId)
        .then(data => {
            res.send(data.data())
        })
        .catch(err => res.send(err))

})

module.exports = router