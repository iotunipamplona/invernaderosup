const express =require("express");
const { getco2i1s, getco2i1, createco2i1 } = require("../controllers/co2i1");
const router = express.Router();

router.get("/",getco2i1s);
router.get("/ :id",getco2i1);
router.post("/", createco2i1);
  

    

module.exports = router;
