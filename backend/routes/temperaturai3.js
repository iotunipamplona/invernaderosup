const express =require("express");
const { gettemperaturai3s, gettemperaturai3, createtemperaturai3 } = require("../controllers/temperaturai3");
const router = express.Router();

router.get("/",gettemperaturai3s);
router.get("/ :id",gettemperaturai3);
router.post("/", createtemperaturai3);
  

    

module.exports = router;
