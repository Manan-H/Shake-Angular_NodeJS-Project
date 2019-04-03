/**
 * Created by tigra on 07-Nov-18.
 */
const Benefactors = require("../json/benefactors.json");

module.exports.getData =  (req, res)=>{
    try{
         res.status(200).json(Benefactors);
    }catch (e){
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
