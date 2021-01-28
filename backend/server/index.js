//importar express
const express = require('express');

//importar base de datos
const db = require('./config/database.js');

//importar rutas
const routes = require('./routers');

//Configurar base de datos
db.authenticate()
    .then(()=> console.log('DB Conectada'))
    .catch(error => console.log(error));


// configurar express
const app = express();

//cargar las rutas
app.use('/',routes());

app.listen(3000, () =>{
    //Se ve en la terminar 
    console.log('Escuchando peticiones en el puerto 3000');
});
