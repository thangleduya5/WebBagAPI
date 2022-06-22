var dbCon = require('../../config/db.config');

var Color = function(color){
    this.idColor = color.idColor;
    this.nameColor = color.nameColor;
}

Color.getColorByID = (id, result)=>{
    dbCon.query('SELECT *FROM color WHERE idColor=?',id, (err, res)=>{
        if(err){
            console.log('Error while fetching color', err);
            result(err, null);
        } else{
            console.log('Color fetched successfully!!');
            result(null, res);
        }
    })
}

Color.getAllColor = (result)=>{
    dbCon.query('SELECT *FROM color', (err, res)=>{
        if(err){
            console.log('Err while fetching colors');
            result(err, null);
        } else{
            console.log('Colors fetched successfully!!');
            result(null, res);
        }
    })
}

module.exports = Color;