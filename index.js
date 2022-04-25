const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

const app = express()
app.use(express.static('public'))
dbConnection()
app.use(cors());
app.use(express.json() );
app.use('/api/form', require('./routes/form'));
app.listen(process.env.PORT, ( ) =>{
        console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})