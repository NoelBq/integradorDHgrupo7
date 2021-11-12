const pruebaModel = require('../../models/pruebaModel')
const pruebaController ={
    getAll:  async function(req,res,next){
        try{
            const result = await pruebaModel.getAll()
             res.status(200).json({data: result ,error: null, succes: true})
        }catch(error){
            res.status(500).json({data: null ,error:error, succes: false})
        }
    }
}

module.exports = pruebaController;