const billModel = require('../models/bill.model');

exports.getBillList = (req, res)=>{
    billModel.getAllBill((err, bills)=>{
        if(err)
        res.send(err);
        res.send(bills);
    })
}

exports.getIdBill = (req, res)=>{
    billModel.getIdBill((err, bills)=>{
        if(err)
        res.send(err);
        res.send(bills);
    })
}

exports.getBillByIDUser = (req, res)=>{
    billModel.getBillByIDUser(req.params.id,(err, bills)=>{
        if(err)
        res.send(err);
        res.send(bills);
    })
}

exports.getBillStatus = (req, res)=>{
    billModel.getBillStatus(req.params.status,(err, bills)=>{
        if(err)
        res.send(err);
        res.send(bills);
    })
}

exports.getYearBill = (req, res)=>{
    billModel.getYearBill((err, years)=>{
        if(err)
        res.send(err);
        res.send(years);
    })
}

exports.createBill = (req, res)=>{
    const billData = new billModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        billModel.createBill(billData, (err, result)=>{
            if(err){
                res.send(err);
            } else{
                res.json({status: true, 
                    message: 'Bill created Successfully', 
                    data: result.insertId
                });
            }
        })
    }
}

exports.confirmBill = (req, res)=>{
    billModel.confirmBill(req.params.idBill, (err, result)=>{
        if(err){
            res.send(err);
        } else{
            res.json({
                status: true, 
                message: 'Bill confirmed Successfully', 
                data: result
            });
        }
    })
}

exports.getRevenueByYear = (req, res)=>{
    billModel.getRevenueByYear(req.params.year, (err, result)=>{
        if(err) 
        res.send(err);
        res.send(result);
    })
}