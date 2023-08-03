const {temperaturai1Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai1s = async (req,res) =>{
  const data = await temperaturai1Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai1 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createtemperaturai1 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await temperaturai1Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatetemperaturai1 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletetemperaturai1 = (req,res) =>{};


module.exports={gettemperaturai1s, gettemperaturai1, createtemperaturai1, updatetemperaturai1, deletetemperaturai1};