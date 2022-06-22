const colorModel = require('../models/color.model');

exports.getColorByID = (req, res)=>{
    colorModel.getColorByID(req.params.id, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.getAllColor = (req, res)=>{
    colorModel.getAllColor((err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}