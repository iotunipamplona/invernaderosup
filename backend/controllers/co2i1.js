const {co2i1Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getco2i1s = async (req,res) =>{
  const data = await co2i1Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getco2i1 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createco2i1 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await co2i1Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateco2i1 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteco2i1 = (req,res) =>{};


module.exports={getco2i1s, getco2i1, createco2i1, updateco2i1, deleteco2i1};