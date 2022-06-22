var dbCon = require('../../config/db.config');

var Cart = function(cart){
    this.idUser = cart.idUser;
    this.idProduct = cart.idProduct;
    this.quantity = cart.quantity;
}

Cart.getCartByIDUser = (id, result)=>{
    dbCon.query('SELECT *FROM cart WHERE idUser=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching cart', err);
            result(err, null);
        } else{
            console.log('Cart fetched successfully!!');
            result(null, res);
        }
    })
}

Cart.createCart = (cart, result)=>{
    dbCon.query('INSERT INTO cart SET ?', cart, (err, res)=>{
        if(err){
            console.log('Error while inserting cart', err);
            result(err, null);
        } else{
            console.log('Cart inserted successfully!!');
            result(null, res);
        }
    })
}

Cart.modifyCart = (cart, result)=>{
    dbCon.query('UPDATE cart SET quantity=? WHERE idUser=? AND idProduct=?', 
        [cart.quantity ,cart.idUser, cart.idProduct],
        (err, res)=>{
        if(err){
            console.log('Error while updating cart', err);
            result(err, null);
        } else{
            console.log('Cart updated successfully!!');
            result(null, res);
        }
    })
}

Cart.getCart = (idProduct, idUser, result)=>{
    dbCon.query('SELECT * FROM cart WHERE idProduct=? AND idUser=?', [idProduct, idUser], (err, res)=>{
        if(err){
            console.log('Error while get cart', err);
            result(err, null);
        } else{
            console.log('Cart get successfully!!');
            result(null, res);
        }
    })
}

Cart.removeCart = (idProduct, idUser, result)=>{
    dbCon.query('DELETE FROM cart WHERE idProduct=? AND idUser=?', [idProduct, idUser], (err, res)=>{
        if(err){
            console.log('Error while deleting cart', err);
            result(err, null);
        } else{
            console.log('Cart deleted successfully!!');
            result(null, res);
        }
    })
}

Cart.removeCartByIDProduct = (idProduct, result)=>{
    dbCon.query('DELETE FROM cart WHERE idProduct=?',idProduct, (err, res)=>{
        if(err){
            console.log('Error while deleting cart', err);
            result(err, null);
        } else{
            console.log('Cart deleted successfully!!');
            result(null, res);
        }
    })
}

Cart.removeCartByIDUser = (idUser, result)=>{
    dbCon.query('DELETE FROM cart WHERE idUser=?',idUser, (err, res)=>{
        if(err){
            console.log('Error while deleting cart', err);
            result(err, null);
        } else{
            console.log('Cart deleted successfully!!');
            result(null, res);
        }
    })
}

module.exports = Cart;