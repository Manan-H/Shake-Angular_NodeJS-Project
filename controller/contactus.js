/**
 * Created by tigra on 07-Nov-18.
 */
const Contact = require("../json/contactus.json");
const Messages = require('../json/messages.json');

module.exports.getData =  (req, res)=>{
    try{
          res.status(200).json(Contact);
    }catch (e){
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};


module.exports.setData = (req, res)=>{
        let post = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        Messages.push(post);
        res.sendStatus(201)
};
