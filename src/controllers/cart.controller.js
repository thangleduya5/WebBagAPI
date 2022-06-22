const cartModel = require('../models/cart.model');

exports.getCartByIDUser = (req, res)=>{
    cartModel.getCartByIDUser(req.params.id, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.createCart = (req, res)=>{
    const cartData = new cartModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        cartModel.createCart(cartData, (err, result)=>{
            if(err){
                res.send(err);
            } else{
                res.json({status: true, 
                    message: 'Cart created Successfully', 
                    data: result.insertId
                });
            }
        })
    }
}

exports.modifyCart = (req, res)=>{
    const cartData = new cartModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        cartModel.modifyCart(cartData, (err, result)=>{
            if(err){
                res.send(err);
            } else{
                res.json({status: true, 
                    message: 'Cart modify Successfully',
                    data: result.affectedRows
                });
            }
        })
    }
}

exports.getCart = (req, res)=>{
    cartModel.getCart(req.body.idProduct, req.body.idUser, (err, result)=>{
        if(err) res.send(err);
        res.send(result);
    })
}

exports.removeCart = (req, res)=>{
    cartModel.removeCart(req.body.idProduct, req.body.idUser, (err, result)=>{
        if(err) res.send(err);
        res.json({status: true, 
            message: 'Cart delete Successfully',
            data: result.affectedRows
        })
    })
}

exports.removeCartByIDProduct = (req, res)=>{
    cartModel.removeCartByIDProduct(req.params.id, (err, result)=>{
        if(err) res.send(err);
        res.json({status: true, 
            message: 'Cart delete Successfully',
            data: result.affectedRows
        })
    })
}

exports.removeCartByIDUser = (req, res)=>{
    cartModel.removeCartByIDUser(req.params.id, (err, result)=>{
        if(err) res.send(err);
        res.json({status: true, 
            message: 'Cart delete Successfully',
            data: result.affectedRows
        })
    })
}
