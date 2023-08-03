const express =require("express");
const { gettemperaturai2s, gettemperaturai2, createtemperaturai2 } = require("../controllers/temperaturai2");
const router = express.Router();

router.get("/",gettemperaturai2s);
router.get("/ :id",gettemperaturai2);
router.post("/", createtemperaturai2);
  

    

module.exports = router;
