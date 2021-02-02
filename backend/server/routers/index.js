const express = require('express');
const router = express.Router();

/**Controladores */
const contratosController = require('../controllers/contratosControllers');


module.exports = function (){
    router.get('/',(req, res) => {
        
        res.send('aleluya');
        //  res.render('index');
      });


    //Listar los contratos
    router.get('/contratos', contratosController.mostrarContratos);

    //Agrega nuevos contratos
     router.post('/contratos', contratosController.nuevoContrato);

    router.get('/nosotros', (req, res) => {
        res.send('Nosotros');
    });

    router.delete('/contratos/:id', contratosController.eliminarContrato);

   router.get('/contratos/:id', contratosController.obtenerContrato);


    router.put('/contratos/', contratosController.actualizarContrato);

    
    return router;
   
}