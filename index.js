import express from 'express'

const port=5000
const app = express()

app.get('/data',async(req,res)=>{

    res.send('request...............................',req)     
    console.log("chnages to merge a branch") 
})

app.listen(port,()=>{
    console.log("server is listen on port.",port)
})