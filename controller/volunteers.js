/**
 * Created by tigra on 07-Nov-18.
 */
const Volunteers = require("../json/volunteers.json");

module.exports.getData =  (req, res)=>{
    try{
         res.status(200).json(Volunteers);
    }catch (e){
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};