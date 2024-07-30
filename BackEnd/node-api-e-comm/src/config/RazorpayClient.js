const Razorpay =require('razorpay');

 RAZORPAY_KEY="rzp_test_DzLNlg1hCTMOBq"
 RAZORPAY_SECRET="xw5qf7ND6Ikoegrh4Xaz3mFv"

 const razorpay = new Razorpay({
    key_id: RAZORPAY_KEY,
    key_secret: RAZORPAY_SECRET
})


module.exports=razorpay