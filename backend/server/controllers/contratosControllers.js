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
    .then(contrato => res.json({mensaje: 'Agregado'}))
    .catch(error => console.log(error))
}

exports.obtenerContrato = async (req, res) => {
  await Contrato.findByPk(req.params.id)
    .then(contrato => console.log(contrato))
    .catch(error => console.log(error))
  res.json({mensaje:'Obtenido'})  
}


exports.actualizarContrato = async (req, res) => {
  let con = req.body;
  await Contrato.update(con, { where : { id_contrato: req.body.id } })
    .then(contrato => res.json({mensaje: 'Actualizado'}))
    .catch(error => console.log(error))

}

exports.eliminarContrato = async (req, res) => {
  await Contrato.destroy({ where : { id_contrato: req.params.id } })
    .then(res.json({ mensaje: 'Eliminado' }))
    .catch(error => console.log(error))
}