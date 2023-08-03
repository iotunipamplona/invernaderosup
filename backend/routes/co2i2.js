const express =require("express");
const { getco2i2s, getco2i2, createco2i2 } = require("../controllers/co2i2");
const router = express.Router();

router.get("/",getco2i2s);
router.get("/ :id",getco2i2);
router.post("/", createco2i2);
  

    

module.exports = router;