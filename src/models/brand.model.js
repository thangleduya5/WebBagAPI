var dbCon = require('../../config/db.config');

var Brand = function(brand){
    this.idBrand = brand.idBrand;
    this.nameBrand = brand.nameBrand;
}

Brand.getAllBrand = (result)=>{
    dbCon.query('SELECT *FROM brand', (err, res)=>{
        if(err){
            console.log('Error while fetching brands', err);
            result(err, null);
        } else{
            console.log('Brands fetched successfully!!');
            result(null, res);
        }
    })
}

Brand.getBrandByID = (id, result)=>{
    dbCon.query('SELECT *FROM brand WHERE idBrand=?',id, (err, res)=>{
        if(err){
            console.log('Error while fetching brand', err);
            result(err, null);
        } else{
            console.log('Brand fetched successfully!!');
            result(null, res);
        }
    })
}

Brand.createBrand = (brand, result)=>{
    dbCon.query('INSERT INTO brand SET ?', brand, (err, res)=>{
        if(err){
            console.log('Error while inserting brand', err);
            result(err, null);
        } else{
            console.log('Brand inserted successfully!!');
            result(null, res);
        }
    })
}

module.exports = Brand;