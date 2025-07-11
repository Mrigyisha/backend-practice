import express from 'express'
import jokes from "./jokes.js"

const app = express()
const port = process.env.PORT || 3000

app.get('/' , (req,res)=>{
    res.send('Sever is ready')
})

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)  
})

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`)
})