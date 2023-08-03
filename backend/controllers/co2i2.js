const {co2i2Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getco2i2s = async (req,res) =>{
  const data = await co2i2Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getco2i2 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createco2i2 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await co2i2Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateco2i2 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteco2i2 = (req,res) =>{};


module.exports={getco2i2s, getco2i2, createco2i2, updateco2i2, deleteco2i2};