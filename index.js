const express = require('express')
const dotenv=require("dotenv")


const app = express()
const port = 5000 || process.env.port
const mongoDB=require("./db")
dotenv.config()
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})


mongoDB()
app.get('/', (req, res) => {
  res.send('Hello World! good')
})
app.use(express.json())
app.use("/api",require("./Routes/CreateUser"))
app.use("/api",require("./Routes/DisplayData"))
app.use("/api",require("./Routes/OrderData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})