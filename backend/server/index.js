//importar express
const express = require('express');

// configurar express
const app = express();
app.use('/',(req, res) =>{
	//Se ve en el postman con localhost:3000/. El / significa como q la dirección pudiera ser /data
    res.send('Conectado');
});

app.listen(3000, () =>{
    //Se ve en la terminar 
    console.log('Escuchando peticiones en el puerto 3000');
});
