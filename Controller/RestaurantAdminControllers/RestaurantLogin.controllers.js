const restroOwner = require('../../model/RestroOwnerSchema')
const bcrypt = require('bcrypt')
require('dotenv').config();
const jwt = require('jsonwebtoken')

exports.MallAdminLogin = async(req,res)=>{
    try{
        const {restroName,restroEmail,password,restroId} = req.body;
        let  RestroAdminEmail = await restroOwner.findOne({restroName,email : restroEmail,restroId,password});
        if(!RestroAdminEmail){
            return res.status(404).json({
                success : false,
                body : "Invalid Id for a Admin"
            })
        }
        try{
            passMatch = await bcrypt.compare(password,RestroAdminEmail.password);
        }catch(e){
            return res.status(404).json({
                success : false,
                body : "Incorrect Password",
            })
        }
        const payload = {email : RestroAdminEmail.restroEmail , id : RestroAdminEmail._id,restroName : RestroAdminEmail.restroName,restroId : RestroAdminEmail.restroId}
        RestroAdminEmail.password = undefined;
        if(passMatch){
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn : '2h'
            })
            RestroAdminEmail.token = token
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly : true
            }
            return res.cookie('token',token,options).status(200).json(
                {
                    success : true,
                    token,
                    RestroAdminEmail,
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