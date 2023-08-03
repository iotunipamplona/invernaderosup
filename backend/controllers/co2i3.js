const {co2i3Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getco2i3s = async (req,res) =>{
  const data = await co2i3Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getco2i3 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createco2i3 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await co2i3Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateco2i3 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteco2i3 = (req,res) =>{};


module.exports={getco2i3s, getco2i3, createco2i3, updateco2i3, deleteco2i3};