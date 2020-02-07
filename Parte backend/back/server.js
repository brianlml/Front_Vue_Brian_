const express = require ('express')
//const port = 3000
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

const mongoose = require ('mongoose')
const uri = 'mongodb://localhost:27017/tareas'
const options = {useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology: true}

mongoose.connect (uri, options).then (
    () => {console.log('Super me conecte a la bd de Mongo')},
    error => {console.log('este es el error ' + error)}
);
//middlewares
app.use (morgan('tiny'))
app.use (cors())
app.use (express.json())

//applicatio/x--www-form-urlencoded
app.use(express.urlencoded({extended: true}))

//rutas en Express
app.use('/api', require('./routes/tarea'))
//app.get ('/', (req, res) => res.send('Hello World! con Node.js'))

//meddleware of vue static
const history = require('connect-history-api-fallback')
app.use(history())
app.use (express.static(path.join(__dirname, 'public')))
//coniguracion del "puerto" para produccion
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => console.log('Aquí casual corriendo en el puerto:', app.get('port')))