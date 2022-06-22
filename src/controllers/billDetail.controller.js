const billDetailModel = require('../models/billDetail.model');

exports.getBillDetailByIDBill = (req, res)=>{
    billDetailModel.getBillDetailByIDBill(req.params.id, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.getBillDetailByIDProduct = (req, res)=>{
    billDetailModel.getBillDetailByIDProduct(req.params.id, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.createBillDetail = (req, res)=>{
    const billDetailData = new billDetailModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        billDetailModel.createBillDetail(billDetailData, (err, result)=>{
            if(err){
                res.send(err);
            } else{
                res.json({status: true, 
                    message: 'Bill detail created Successfully', 
                    data: result.insertId
                });
            }
        })
    }
}

exports.addComment = (req, res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        billDetailModel.addComment(req.body.comment, req.body.idBill, req.body.idProduct, (err, ressult)=>{
            if(err)
            res.send(err);
            res.json({
                status: true, 
                message: 'Bill detail add comment Successfully', 
                data: result
            });
        })
    }
}