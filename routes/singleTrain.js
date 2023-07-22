const express = require("express");
const router = express.Router();
const {getToken}=require('../helpers/helper')

router.get('/train/trains/:id',async function getTrain(req,res){
    console.log(req.params.id)
    try {
        const token=await getToken()
        console.log('token',token)
        const data=fetch(`http://20.244.56.144/train/trains/${req.params.id}`,{
            method:'GET',
            headers: { Authorization: `Bearer ${token.access_token}` }
        })
        const result=await data.json();
        res.send({data:result})
   
    } catch (err) {
        res.status(401).send({data:null,message:err.message})
    }
})

module.exports=router