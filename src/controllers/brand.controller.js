const brandModel = require('../models/brand.model');

exports.getBrandList = (req, res)=>{
    brandModel.getAllBrand((err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.getBrandByID = (req, res)=>{
    brandModel.getBrandByID(req.params.id, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.createBrand = (req, res)=>{
    const brandData = new brandModel(req.body);
    brandModel.createBrand(brandData, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

