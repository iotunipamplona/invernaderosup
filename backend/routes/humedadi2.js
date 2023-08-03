const express =require("express");
const { gethumedadi2s, gethumedadi2, createhumedadi2 } = require("../controllers/humedadi2");
const router = express.Router();

router.get("/",gethumedadi2s);
router.get("/ :id",gethumedadi2);
router.post("/", createhumedadi2);
  

    

module.exports = router;
