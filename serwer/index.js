const express = require("express")
const cors = require('cors')
const app =  express()
app.use(cors())
app.get('/add/:l1/:l2', (req, res)=>{
    const l1=parseInt(req.params.l1)
    const l2=parseInt(req.params.l2)
    const suma = l1+l2
    res.send(suma.toString())


})
app.listen(3000,()=>{
    console.log("ok")
})