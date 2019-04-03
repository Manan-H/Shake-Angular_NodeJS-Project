const About = require("../json/aboutpage.json");

module.exports.getData =  (req, res)=>{
    try{
        
         res.status(200).json(About);
    }catch (e){
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};
