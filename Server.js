const express = require("express")
const app = express()
const data = require("./Data")


app.use(express.json())
app.set('json spaces', 4)

app.get('/get-info',(req,res)=>{
    res.json(data)
})

console.log()

app.listen(5000,()=>console.log("Listening on PORT 5000"))