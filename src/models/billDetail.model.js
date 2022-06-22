var dbCon = require('../../config/db.config');

var BillDetail = function(billDetail){
    this.idBill = billDetail.idBill;
    this.idProduct = billDetail.idProduct;
    this.quantity = billDetail.quantity;
    this.price = billDetail.price;
    this.comment = billDetail.comment;
}

BillDetail.getBillDetailByIDBill = (id, result)=>{
    dbCon.query('SELECT * FROM bill_detail WHERE idBill=?',id,  (err, res)=>{
        if(err){
            console.log('Error while fetching bill detail', err);
            result(err, null);
        } else{
            console.log('Bill detail fetched successfully!!');
            result(null, res);
        }
    })
}

BillDetail.getBillDetailByIDProduct = (id, result)=>{
    dbCon.query('SELECT * FROM bill_detail WHERE idProduct=?',id,  (err, res)=>{
        if(err){
            console.log('Error while fetching bill detail', err);
            result(err, null);
        } else{
            console.log('Bill detail fetched successfully!!');
            result(null, res);
        }
    })
}

BillDetail.createBillDetail = (billDetail, result)=>{
    dbCon.query('INSERT INTO bill_detail SET ?',billDetail, (err, res)=>{
        if(err){
            console.log('Error while inserting bill detail', err);
            result(err, null);
        } else{
            console.log('Bill detail inserted successfully!!');
            result(null, res);
        }
    })
}

BillDetail.addComment = (comment, idBill, idProduct, result)=>{
    dbCon.query('UPDATE bill_detail SET comment=? WHERE idBill=? AND idProduct=?',[comment, idBill, idProduct], (err, res)=>{
        if(err){
            console.log('Error while adding comment', err);
            result(err, null);
        } else{
            console.log('Bill detail add comment successfully!!');
            result(null, res);
        }
    })
}

module.exports = BillDetail;


