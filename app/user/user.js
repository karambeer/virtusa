const database = require('../database');

module.exports = (datasource)=> {
    return {
        addUser: (param)=> {
            let len =  param.data.length;
            param.input.id = len+1;
            param.data.push(param.input);
            return database(datasource).add(param.data).then(_ => param.input)
        },
        getUsers: ()=> database(datasource).getAll()
    }
}