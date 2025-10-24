const express = require("express")
const app = express()
const data = require("./Data")


app.use(express.json())
app.set('json spaces', 4)

app.get('/get-info',(req,res)=>{
    res.json(data).json("This response is from ${host}-${localhost}")
})

console.log()

app.listen(5000,()=>console.log("Listening on PORT 5000"))