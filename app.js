// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const start_time = new Date()
  years = start_time.getFullYear()
  month = start_time.getMonth() + 1
  date = start_time.getDate()
  hour = start_time.getHours()
  min = start_time.getMinutes()
  sec = start_time.getSeconds()

  res.on('finish', function () {
    finish_time = new Date()
    duration = finish_time.getTime() - start_time.getTime()
    console.log(`${years}-${month}-${date} ${hour}:${min}:${sec} | ${req.method} from ${req.path} total time: ${duration} ms`);
  })
  next()
})



app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})