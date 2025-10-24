const express = require("express")
const app = express()
const data = require("./Data")


app.use(express.json())
app.set('json spaces', 4)

app.get('/get-info',(req,res)=>{
    const host = req.hostname;
    const port = req.socket.localPort;
   res.json({data,host,port})
})

console.log()

app.listen(5000,()=>console.log("Listening on PORT 5000"))