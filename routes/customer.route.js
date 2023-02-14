const { customerSignUp, countCustomers, viewAll, updateCustomers } = require("../controllers/customerController");
const express = require("express");
const router = express.Router();



router.post("/", customerSignUp)
router.get("/", countCustomers)
router.get("/getAll", viewAll)
router.put("/:_id", updateCustomers)
module.exports = router;