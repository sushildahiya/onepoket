// importing the express framework
const express = require('express')
const app = express()
const port = 8000

//Route for get request and sending response
app.get('/',(req,res)=>{
    res.status(200).send("Hello World")
})

// Listening on a port 
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})
