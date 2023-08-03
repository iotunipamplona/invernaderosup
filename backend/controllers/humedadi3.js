const {humedadi3Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gethumedadi3s = async (req,res) =>{
  const data = await humedadi3Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gethumedadi3 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createhumedadi3 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await humedadi3Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatehumedadi3 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletehumedadi3 = (req,res) =>{};


module.exports={gethumedadi3s, gethumedadi3, createhumedadi3, updatehumedadi3, deletehumedadi3};