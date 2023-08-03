const express =require("express");
const { getco2i3s, getco2i3, createco2i3 } = require("../controllers/co2i3");
const router = express.Router();

router.get("/",getco2i3s);
router.get("/ :id",getco2i3);
router.post("/", createco2i3);
  

    

module.exports = router;