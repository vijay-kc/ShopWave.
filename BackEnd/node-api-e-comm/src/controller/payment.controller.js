const paymentService=require("../services/payment.service")

const createPaymentLink= async (req,res)=>{
    try {
        const paymentLink=await paymentService.createPaymentLink(req.params.id);
        console.log("con",paymentLink)
        
        return res.status(200).send(paymentLink);
        
    } catch (error) {
        console.log("error")
        return res.status(500).send(error.message)
    }
}

const updatePaymentInformation= async (req,res)=>{
    try {
        await paymentService.updatePaymentInformation(req.query);

        return res.status(200).send({message:"payment information updated",status:true});
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports={
    createPaymentLink,
    updatePaymentInformation

}