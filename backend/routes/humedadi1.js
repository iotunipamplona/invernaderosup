const express =require("express");
const { gethumedadi1s, gethumedadi1, createhumedadi1 } = require("../controllers/humedadi1");
const router = express.Router();

router.get("/",gethumedadi1s);
router.get("/ :id",gethumedadi1);
router.post("/", createhumedadi1);
  

    

module.exports = router;
