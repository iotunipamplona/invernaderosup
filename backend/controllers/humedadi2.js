const {humedadi2Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gethumedadi2s = async (req,res) =>{
  const data = await humedadi2Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gethumedadi2 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createhumedadi2 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await humedadi2Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatehumedadi2 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletehumedadi2 = (req,res) =>{};


module.exports={gethumedadi2s, gethumedadi2, createhumedadi2, updatehumedadi2, deletehumedadi2};