require('dotenv').config()
const express = require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use('/user', require('./routes/userRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err =>{
    if(err) throw err;
    console.log('No se pudo establecer conexión con la base de datos')
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('El servidor se ha conectado satisfactoriamente en el puerto: ', PORT)
})