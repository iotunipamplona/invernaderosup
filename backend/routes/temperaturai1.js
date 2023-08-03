const express =require("express");
const { gettemperaturai1s, gettemperaturai1, createtemperaturai1 } = require("../controllers/temperaturai1");
const router = express.Router();

router.get("/",gettemperaturai1s);
router.get("/ :id",gettemperaturai1);
router.post("/", createtemperaturai1);
  

    

module.exports = router;
