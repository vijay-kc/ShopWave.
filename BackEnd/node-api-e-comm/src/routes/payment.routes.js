const express =require("express");
const router = express.Router();
const authenticate=require("../middleware/authenticate")
const paymentController=require("../controller/payment.controller")

router.post("/:id",authenticate,paymentController.createPaymentLink);
router.get("/",authenticate,paymentController.updatePaymentInformation);

module.exports=router;