var dbCon = require('../../config/db.config');

var Customer= function(customer){
    this.idUser = customer.idUser;
    this.idRole = customer.idRole;
    this.username = customer.username;
    this.password = customer.password;
    this.addressCustomer = customer.addressCustomer;
    this.email = customer.email;
    this.phone = customer.phone;
    this.sex = customer.sex;
    this.name = customer.name;
    this.status = customer.status;
}

Customer.getAllCustomer = (ressult)=>{
    dbCon.query('SELECT * FROM customer',(err, res)=>{
        if(err){
            console.log('Error while fetching customers', err);
            ressult(err, null);
        } else{
            console.log('Customers fetched successfully!!');
            ressult(null, res);
        }
    })
}

Customer.getCustomerStatus = (status, ressult)=>{
    dbCon.query('SELECT * FROM customer WHERE status=?',status,(err, res)=>{
        if(err){
            console.log('Error while fetching customers', err);
            ressult(err, null);
        } else{
            console.log('Customers fetched successfully!!');
            ressult(null, res);
        }
    })
}

Customer.getCustomerByID = (id, ressult)=>{
    dbCon.query('SELECT * FROM customer WHERE idUser=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching customer by id', err);
            ressult(err, null);
        } else{
            console.log('Customer fetched successfully!!');
            ressult(null, res);
        }
    })
}

Customer.createCustomer = (customer, ressult)=>{
    dbCon.query('INSERT INTO customer SET ?', customer, (err, res)=>{
        if(err){
            console.log('Error while inserting customer', err);
            ressult(err, null);
        } else{
            console.log('Customer inserted successfully!!');
            ressult(null, res);
        }
    })
}

Customer.modifyCustomer = (id, customer, ressult)=>{
    dbCon.query('UPDATE customer SET idRole=?, username=?, addressCustomer=?, email=?, phone=?, sex=?, name=? WHERE idUser=?', 
        [customer.idRole, customer.username, customer.addressCustomer, customer.email, customer.phone, customer.sex, customer.name, id],
        (err, res)=>{
        if(err){
            console.log('Error while updating customer', err);
            ressult(err, null);
        } else{
            console.log('Customer updated successfully!!');
            ressult(null, res);
        }
    })
}

Customer.removeCustomer = (id, ressult)=>{
    dbCon.query('DELETE FROM customer WHERE idUser=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting customer', err);
            ressult(err, null);
        } else{
            console.log('Customer deleted successfully!!');
            ressult(null, res);
        }
    })
}

Customer.checkLogin = (username, password, result)=>{
    dbCon.query('SELECT *FROM customer WHERE username=? AND password=?',[username, password], (err, res)=>{
        if(err){
            console.log('Error while checking login', err);
            result(err, null);
        } else{
            console.log('Checked login!!');
            result(null, res);
        }
    })
}

Customer.checkUsernameExist = (username, result)=>{
    dbCon.query('SELECT *FROM customer WHERE username=?',username, (err, res)=>{
        if(err){
            console.log('Error while checking username exist', err);
            result(err, null);
        } else{
            console.log('Checked username exist!!');
            result(null, res);
        }
    })
}

Customer.changePass = (username, newPass, result)=>{
    dbCon.query('UPDATE customer SET password=? WHERE username=?',[newPass, username], (err, res)=>{
        if(err){
            console.log('Error while changing password', err);
            result(err, null);
        } else{
            console.log('Changed pass!!');
            result(null, res);
        }
    })
}

Customer.block = (idUser, result)=>{
    dbCon.query('UPDATE customer SET status = 0 WHERE idUser=?',idUser, (err, res)=>{
        if(err){
            console.log('Error while blocking', err);
            result(err, null);
        } else{
            console.log('Blocked!!');
            result(null, res);
        }
    })
}

Customer.unBlock = (idUser, result)=>{
    dbCon.query('UPDATE customer SET status = 1 WHERE idUser=?',idUser, (err, res)=>{
        if(err){
            console.log('Error while unblocking', err);
            result(err, null);
        } else{
            console.log('Unblocked!!');
            result(null, res);
        }
    })
}

module.exports = Customer;
