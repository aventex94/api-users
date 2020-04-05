const jwt = require('jsonwebtoken');
const fs = require('fs');
const models = require('../models');
module.exports = {
    v1: {
        authenticate: authenticate,
        validate: validate,
    }
}


function authenticate(req, res) {
    var email = req.body.email;
    var pass = req.body.password;
    models.User.findOne({ where: { email: email, password: pass } }).then((user) => {
    var privateKey = fs.readFileSync('jwtRS256.key');
        if(user != null){
            jwt.sign({ user: user }, privateKey, { algorithm: 'HS384' }, function (err, token) {
                if (!token) {
                    res.send(
                        {
                            "access": "d",
                            "cause": "miss token",
                        }
                    );
                } else {
                    res.status(200).send({
                        "user":user,
                        "token":token,
                    });

                }
            });
        }else{
            res.status(403).send("Usuario invalido");
        }
    }).catch((err) => {
        res.status(403).send("Argumentos invalidos");
    })
}
            
        



function validate(req, res) {
    const token = req.headers.authorization;
    var cert = fs.readFileSync('jwtRS256.key');
    jwt.verify(token, cert, { algorithms: 'HS384' }, function (err, decoded) {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(decoded)
        }
    });
}