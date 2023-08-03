const {temperaturai3Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai3s = async (req,res) =>{
  const data = await temperaturai3Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai3 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createtemperaturai3 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await temperaturai3Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatetemperaturai3 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletetemperaturai3 = (req,res) =>{};


module.exports={gettemperaturai3s, gettemperaturai3, createtemperaturai3, updatetemperaturai3, deletetemperaturai3};