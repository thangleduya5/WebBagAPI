const roleModel = require('../models/role.model');

exports.getRoleByID = (req, res)=>{
    console.log("hello");
    roleModel.getRoleByID(req.params.id, (err, role)=>{
        if(err)
        res.send(err);
        res.send(role);
    })
}