const path = require('path');

const User = require('../models/User');
const { json } = require('body-parser');


exports.getForm = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../' , 'views', 'basicForm.html'));
    
};

exports.getUser = (req, res, next) => {
    User.findAll()
    .then((users) => {
        res.status(200).json(users)
    })
    .catch(err => console.log(err));
}

exports.postUser = (req, res, next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    User.create({
        name: name,
        phoneNo: phone,
        email: email
    })
    .then((result) => {
        //res.status(201).json(result);
        res.status(201).json(result);
        
        
    })
    .catch((err)=> {
        
        console.log(err);
    });

};

exports.deleteById = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id)
    .then((user) => {
        return user.destroy();
    })
    .then(()=> {
        res.status(204).end();
    })
    .catch(err => console.log(err));
}