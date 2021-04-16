const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyunmin:12345@boilerplate.t7bvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    userNewUrlParse: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 하이')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})