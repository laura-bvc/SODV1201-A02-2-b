const express = require('express')
const PORT = 8080;
const app = express()
const userRoutes = require('./routes/userRoute')
// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// convert json to javascript object and put into request body
app.use(express.json())
app.use(userRoutes)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}........`)
})
