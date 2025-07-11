require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/meow',(req,res)=>{
    res.send('KITTY')
})

app.get('/night',(req,res)=>{
    res.send('<h1>I love nights.</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
