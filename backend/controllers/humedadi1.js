const {humedadi1Model} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gethumedadi1s = async (req,res) =>{
  const data = await humedadi1Model.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gethumedadi1 = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createhumedadi1 = async(req,res) =>{
const {body} = req
console.log(body)
const data = await humedadi1Model.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatehumedadi1 = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletehumedadi1 = (req,res) =>{};


module.exports={gethumedadi1s, gethumedadi1, createhumedadi1, updatehumedadi1, deletehumedadi1};