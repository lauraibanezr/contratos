//importar express
const express = require('express');

//importar base de datos
const db = require('./config/database.js');

//importar rutas
const routes = require('./routers');

//importar body - parser para leer los contenidos de una peticion como json
const bodyParser = require('body-parser')

//oeyw
const cors = require('cors')

//Configurar base de datos
db.authenticate()
    .then(()=> console.log('DB Conectada'))
    .catch(error => console.log(error));

// configurar express
const app = express();

//habilitar el body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

//cargar las rutas
app.use('/',routes());















app.listen(3000, () =>{
    //Se ve en la terminar 
    console.log('Escuchando peticiones en el puerto 3000');
});



