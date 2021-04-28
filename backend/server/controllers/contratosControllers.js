const Contrato = require('../models/Contrato');

exports.mostrarContratos = (req, res) => {
  /*  Contrato.findAll()  
      .then (contrato => console.log(contrato))
      .catch(error => console.log(error))
     
    res.json({mensaje: 'Listando en consola'});
*/
 /* const contrato = Contrato.findAll();
  res.json(contrato);
*/
  
Contrato.findAll()  
.then (contrato => res.json(contrato))
.catch(error => console.log(error))
  }

exports.nuevoContrato =  async (req, res, next) => {

  let con = req.body;

  await Contrato.create(con)
    .then(contrato => res.json({mensaje: 'Agregado'}))
    .catch(error => console.log(error))
}

exports.obtenerContrato = async (req, res, next) => {
 /* await Contrato.findByPk(req.params.id)
    .then(contrato => console.log(contrato))
    .catch(error => console.log(error))
  res.json({mensaje:'Obtenido'})  
  */
  
  try {
    const contrato = await Contrato.findByPk(req.params.id);
    res.json(contrato);
  } catch (error) {
    console.log(error);
    next();
  }
}


exports.actualizarContrato = async (req, res,next) => {
  let con = req.body;
  try {
    const contrato = await Contrato.update(con, { where : { id_contrato: req.body.id_contrato } })
    res.json(contrato);
  } catch (error) {
    console.log(error);
    next();
  }
  /*await Contrato.update(con, { where : { id_contrato: req.body.id_contrato } })
    .then(contrato => res.json(contrato))
    .catch(error => console.log(error))
    */
//{mensaje: 'Actualizado'}
}

exports.eliminarContrato = async (req, res) => {
  await Contrato.destroy({ where : { id_contrato: req.params.id } })
    .then(res.json({ mensaje: 'Eliminado' }))
    .catch(error => console.log(error))
}