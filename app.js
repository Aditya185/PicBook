const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const mongoose = require('mongoose')

const {MONGOURI} = require('./keys')
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Connection yeah")
})

mongoose.connection.on('error',(err)=>{
    console.log("Connection error ",err)
})
//password dfvpPFQpzcPCHceL

require('./models/user')
require('./models/post')


//parse all the data from frontend to json
app.use(express.json())


app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))



app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log("server is running on ",PORT)
})