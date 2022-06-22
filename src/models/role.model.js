var dbCon = require('../../config/db.config');

var Role = function(role){
     this.idRole = role.idRole;
     this.nameRole = role.nameRole;
}

Role.getRoleByID = (id, result)=>{
    dbCon.query('SELECT * FROM role WHERE idRole=?',id,  (err, res)=>{
        if(err){
            console.log('Error while fetching role', err);
            result(err, null);
        } else{
            console.log('Role fetched successfully!!');
            result(null, res);
        }
    })
}

module.exports = Role;