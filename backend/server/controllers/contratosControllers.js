const Contrato = require('../models/Contrato');

exports.mostrarContratos = (req, res) => {
    Contrato.findAll()  
      .then (contrato => console.log(contrato))
      .catch(error => console.log(error))
     
    res.json({mensaje: 'Listando en consola'});
}

exports.nuevoContrato =  async (req, res, next) => {

  let con = req.body;

  await Contrato.create(con)
    .then(contrato => res.json({mensaje: 'Se agrego un contrato correctamente'}))
    .catch(error => console.log(error))
}
