const express = require('express')
const PORT = 8080;
const app = express()
const userRoutes = require('./routes/userRoute')
// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// convert json to javascript object and put into request body
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


app.use(userRoutes)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}........`)
})
