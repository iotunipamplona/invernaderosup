const {temperaturai2Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai2s = async (req,res) =>{
  const data = await temperaturai2Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gettemperaturai2 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createtemperaturai2 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await temperaturai2Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatetemperaturai2 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletetemperaturai2 = (req,res) =>{};


module.exports={gettemperaturai2s, gettemperaturai2, createtemperaturai2, updatetemperaturai2, deletetemperaturai2};