const express =require("express");
const { gethumedadi3s, gethumedadi3, createhumedadi3 } = require("../controllers/humedadi3");
const router = express.Router();

router.get("/",gethumedadi3s);
router.get("/ :id",gethumedadi3);
router.post("/", createhumedadi3);
  

    

module.exports = router;