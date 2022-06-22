var dbCon = require('../../config/db.config');

var Bill = function(bill){
    this.idBill = bill.idBill;
    this.idUser = bill.idUser;
    this.dateBill = bill.dateBill;
    this.status = bill.status;
}

Bill.getAllBill = (result)=>{
    dbCon.query('SELECT * FROM bill', (err, res)=>{
        if(err){
            console.log('Error while fetching bill', err);
            result(err, null);
        } else{
            console.log('Bill fetched successfully!!');
            result(null, res);
        }
    })
}

Bill.getIdBill = (result)=>{
    dbCon.query('SELECT MAX(idBill) AS id FROM bill' ,  (err, res)=>{
        if(err){
            console.log('Error while fetching idBill', err);
            result(err, null);
        } else{
            console.log('IdBill fetched successfully!!');
            result(null, res);
        }
    })
}

Bill.getBillByIDUser = (id, result)=>{
    dbCon.query('SELECT * FROM bill WHERE idUser=?',id, (err, res)=>{
        if(err){
            console.log('Error while fetching bill', err);
            result(err, null);
        } else{
            console.log('Bill fetched successfully!!');
            result(null, res);
        }
    })
}

Bill.getYearBill = (result)=>{
    dbCon.query('SELECT DISTINCT YEAR(dateBill) AS year FROM bill', (err, res)=>{
        if(err){
            console.log('Error while fetching year', err);
            result(err, null);
        } else{
            console.log('year fetched successfully!!');
            result(null, res);
        }
    })
}

Bill.getBillStatus = (status, result)=>{
    dbCon.query('SELECT * FROM bill WHERE status=?',status, (err, res)=>{
        if(err){
            console.log('Error while fetching bill', err);
            result(err, null);
        } else{
            console.log('Bill fetched successfully!!');
            result(null, res);
        }
    })
}

Bill.createBill = (bill, result)=>{
    dbCon.query('INSERT INTO bill SET ?',bill, (err, res)=>{
        if(err){
            console.log('Error while inserting bill', err);
            result(err, null);
        } else{
            console.log('Bill inserted successfully!!');
            result(null, res);
        }
    })
}

Bill.confirmBill = (idBill, result)=>{
    dbCon.query('UPDATE bill SET status = 1 WHERE idBill=?',idBill, (err, res)=>{
        if(err){
            console.log('Error while confirming bill', err);
            result(err, null);
        } else{
            console.log('Bill confirmed successfully!!');
            result(null, res);
        }
    })
}

Bill.getRevenueByYear =(year, result)=>{
    var query = 'SELECT b.month, SUM(db.cost) AS revenue FROM'+
                '(SELECT idBill, Month(dateBill) AS month FROM bill WHERE YEAR(dateBill) = ?) AS b, '+
                '(SELECT idBill, (quantity * price) AS cost FROM bill_detail) AS db '+
                'WHERE b.idBill = db.idBill '+
                'GROUP BY b.month '+
                'ORDER BY b.month ASC';
    dbCon.query(query, year, (err, res)=>{
        if(err){
            console.log('Error while fetching revenue', err);
            result(err, null);
        } else{
            console.log('Statistic Revenue successfully!!');
            result(null, res);
        }
    })
}

module.exports = Bill;