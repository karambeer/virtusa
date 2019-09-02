const user = require('./user')('./data.json');
let data = require('../../data.json');


module.exports = (app) => {

    app.post("/user", (req, res) => {
        let params= { input:req.body, data:data}
        return user.addUser(params).then(result => res.send(result));
    });

    app.get("/user", (req, res) => {
        return user.getUsers().then(result => res.send(result));
    })
}