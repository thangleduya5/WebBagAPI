var dbCon = require('../../config/db.config');


var Product =  function(product){
    this.idProduct = product.idProduct;
    this.price = product.price;
    this.descr = product.descr;
    this.title = product.title;
    this.idColor = product.idColor;
    this.idBrand = product.idBrand;
    this.image = product.image;
    this.quantity = product.quantity;
}

Product.getAllProduct = (result)=>{
    dbCon.query('SELECT * FROM product', (err, res)=>{
        if(err){
            console.log('Error while fetching product', err);
            result(err, null);
        } else{
            console.log('Product fetched successfully!!');
            for(var i=0; i< res.length; i++){
                for(var i=0; i< res.length; i++){
                    res[i].image = Buffer.from(res[i].image).toString('base64');
                }
            }
            result(null, res);
        }
    })
}

Product.getProductByID = (id, result)=>{
    dbCon.query('SELECT * FROM product WHERE idProduct=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching product by id', err);
            result(err, null);
        } else{
            for(var i=0; i< res.length; i++){
                for(var i=0; i< res.length; i++){
                    res[i].image = Buffer.from(res[i].image).toString('base64');
                }
            }
            console.log('Product fetched successfully!!');
            result(null, res);
        }
    })
}

Product.createProduct = (product, result)=>{
    product.image = new Blob([product.image], {type: 'text/plain'});
    dbCon.query('INSERT INTO product SET ?', product, (err, res)=>{
        if(err){
            console.log('Error while inserting product', err);
            result(err, null);
        } else{
            console.log('Product inserted successfully!!');
            result(null, res);
        }
    })
}

Product.modifyProduct = (id, product, result)=>{
    dbCon.query('UPDATE product SET price=?, descr=?, title=?, idColor=?, idBrand=?, image=?, quantity=? WHERE idProduct=?', 
        [product.price, product.descr, product.title, product.idColor, product.idBrand, product.image, product.quantity, id],
        (err, res)=>{
        if(err){
            console.log('Error while updating product', err);
            result(err, null);
        } else{
            console.log('Product updated successfully!!');
            result(null, res);
        }
    })
}

Product.removeProduct = (id, ressult)=>{
    dbCon.query('DELETE FROM product WHERE idProduct=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting product', err);
            ressult(err, null);
        } else{
            console.log('Product deleted successfully!!');
            ressult(null, res);
        }
    })
}

module.exports = Product;