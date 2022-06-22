const customerModel = require('../models/customer.model');

exports.getCustomerList = (req, res)=>{
    customerModel.getAllCustomer((err, customers)=>{
        if(err)
        res.send(err);
        res.send(customers);
    })
}

exports.getCustomerStatus = (req, res)=>{
    customerModel.getCustomerStatus(req.params.status ,(err, customers)=>{
        if(err)
        res.send(err);
        res.send(customers);
    })
}

exports.getCustomerByID = (req, res)=>{
    customerModel.getCustomerByID(req.params.id, (err, customer)=>{
        if(err)
        res.send(err);
        res.send(customer);
    })
}

exports.createCustomer = (req, res)=>{
    const customerData = new customerModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        customerModel.createCustomer(customerData, (err, ressult)=>{
            if(err)
            res.send(err);
            res.json({status: true, 
                message: 'Customer created Successfully', 
                data: ressult
            });
        })
    }
}

exports.modifyCustomer = (req, res)=>{
    const customerData = new customerModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        console.log('valid data');
        customerModel.modifyCustomer(req.params.id, customerData, (err, ressult)=>{
            if(err)
            res.send(err);
            res.json({
                status: true, 
                message: 'Customer modify Successfully', 
                data: ressult
            });
        })
    }
}

exports.removeCustomer = (req, res)=>{
    customerModel.removeCustomer(req.params.id, (err, result)=>{
        if(err)
        res.send(err);
        res.json({
            status: true,
            message: 'customer deleted Successfully',
            data: result
        })
    })
}

exports.checkLogin = (req, res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        customerModel.checkLogin(req.body.username, req.body.password, (err, ressult)=>{
            if(err)
            res.send(err);
            res.send(ressult);
        })
    }
}

exports.checkUsernameExist = (req, res)=>{
    customerModel.checkUsernameExist(req.params.username, (err, result)=>{
        if(err)
        res.send(err);
        res.send(result);
    })
}

exports.changePass = (req, res)=>{
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            success: false,
            message: 'Please fill all fields'
        });
    } else{
        customerModel.changePass(req.body.username, req.body.password, (err, ressult)=>{
            if(err)
            res.send(err);
            res.send(ressult);
        })
    }
}

exports.block = (req, res)=>{
    customerModel.block(req.params.idUser, (err, result)=>{
        if(err)
        res.send(err);
        res.json({
            status: true,
            message: 'customer blocked Successfully',
            data: result
        })
    })
}

exports.unBlock = (req, res)=>{
    customerModel.unBlock(req.params.idUser, (err, result)=>{
        if(err)
        res.send(err);
        res.json({
            status: true,
            message: 'customer unblocked Successfully',
            data: result
        })
    })
}
