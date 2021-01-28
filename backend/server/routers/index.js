const express = require('express');
const router = express.Router();

const Contrato = require('../models/Contrato');

module.exports = function (){
    router.get('/',(req, res) => {
        
        res.send('aleluya');
        //  res.render('index');
      });


    //Listar los contratos
    router.get('/contratos',(req, res) => {
      Contrato.findAll()  
        .then (contrato => console.log(contrato))
        .catch(error => console.log(error))
       
      res.json({mensaje: 'Listando'});
    });

/*
    //Agrega nuevos contratos
     router.get('/contratos',(req, res) => {
       Contrato.findAll()  
         .then (contrato => console.log(contrato))
         .catch(error => console.log(error))
         
       res.json({mensaje: 'Listando'});
     });
  
*/
    router.get('/nosotros', (req, res) => {
        res.send('Nosotros');
    });

    return router;
   
}