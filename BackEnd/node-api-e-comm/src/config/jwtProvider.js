const jwt=require("jsonwebtoken")
// random
const SECRET_KEY="vsbjhoiaje04yubjerigpuoejb0ehjb0eubj8ap-9d5gujv0e9augj9v4ut3guv[0aeogkwv[]]"

const generateToken=(userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"72h"})
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports={getUserIdFromToken,generateToken}