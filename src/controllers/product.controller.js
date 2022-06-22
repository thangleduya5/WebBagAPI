const productModel = require('../models/product.model');

exports.getProductList = (req, res)=>{
    //console.log('here all products list');
    productModel.getAllProduct((err, products)=>{
        console.log('we are here');
        if(err)
        console.log('loi:'+err);
        // res.send(err);
        res.send(products);
    })
}

exports.getProductByID = (req, res)=>{
    // console.log('get product by id');
    productModel.getProductByID(req.params.id,(err, products)=>{
        if(err)
        res.send(err);
        res.send(products);
    })
}

exports.createProduct = (req, res)=>{
    // console.log('create new product');
    const productData = new productModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        productModel.createProduct(productData, (err, result)=>{
            if(err){
                res.send(err);
            } else{
                res.json({status: true, 
                    message: 'Product created Successfully', 
                    data: result.insertId
                });
            }
        })
    }
}

exports.modifyProduct = (req, res)=>{
    // console.log('update product');
    const productData = new productModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        productModel.modifyProduct(req.params.id, productData, (err, result)=>{
            if(err){
                res.send(err);
            } else{
                res.json({status: true, 
                    message: 'Product modify Successfully',
                    data: result.affectedRows
                });
            }
        })
    }
}

exports.RemoveProduct = (req, res)=>{
    // console.log('remove product');
    productModel.removeProduct(req.params.id, (err, result)=>{
        if(err) res.send(err);
        res.json({status: true, 
            message: 'Product delete Successfully',
            data: result.affectedRows
        })
    })
}