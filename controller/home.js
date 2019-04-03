/**
 * Created by tigra on 07-Nov-18.
 */
const Home = require("../json/homepage.json");

module.exports.getData =  (req, res)=>{
    try{
         res.status(200).json(Home);
    }catch (e){
        res.status(500).json({
            success: false,
            message: e.message ? e.message : e
        })
    }
};

