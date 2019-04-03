/**
 * Created by tigra on 08-Nov-18.
 */
const Messages = require('../json/messages.json');

module.exports.getData =   (req, res)=>{
    try{
         res.status(200).json(Messages);
    }catch (e){
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
