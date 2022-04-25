const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express()
app.use(express.static('public'))
dbConnection()
app.use(express.json() );
app.use('/api/form', require('./routes/form'));
app.listen(process.env.PORT, ( ) =>{
        console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})