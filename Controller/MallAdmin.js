const mallOwner = require('../model/MallAdminSchema')
const bcrypt = require('bcrypt')
require('dotenv').config();
const jwt = require('jsonwebtoken')

exports.MallAdminLogin = async(req,res)=>{
    try{
        const {mallName,mallEmail,password,mallId} = req.body;
        let MallAdminEmail = await owner.findOne({mallName,email : mallEmail,mallId,password});
        if(!MallAdminEmail){
            return res.status(404).json({
                success : false,
                body : "Invalid Id for a Admin"
            })
        }
        try{
            passMatch = await bcrypt.compare(password,MallAdminEmail.password);
        }catch(e){
            return res.status(404).json({
                success : false,
                body : "Incorrect Password",
            })
        }
        const payload = {email : MallAdminEmail.mallEmail , id : MallAdminEmail._id,mallName : MallAdminEmail.mallName,mallId : MallAdminEmail.mallId}
        MallAdminEmail.password = undefined;
        if(passMatch){
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn : '2h'
            })
            MallAdminEmail.token = token
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly : true
            }
            return res.cookie('token',token,options).status(200).json(
                {
                    success : true,
                    token,
                    MallAdminEmail,
                    message : "Successfully loged in"
                }
            )
        }
        else{
            return res.status(403).json(
                {
                    success : false,
                    message : "Password incorrect"
                }
            )

        }
    }
    catch{
        res.status(500).json({
            success : false,
            body : "Unable to Login"
        })
    }
}