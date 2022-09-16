const express = require('express')
const router = require('./router/subject.router')

const app = express()
app.use(express.json())
app.use('/subjects', router)

app.listen(8087, () => console.log('Server up!'))
