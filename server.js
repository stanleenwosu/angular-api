const express =  require('express')
const app = express()
const port = 3000

const api = require('./routes/api.js')

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/api', api)

app.listen(port, () => console.log(`Listening at ${port}`))