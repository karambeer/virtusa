const express = require('express');
const app =  express();
const middlewares = require('./app/middlewares');
const routes = require('./app/routes');


middlewares(app);
routes(app);


app.listen(3000,()=> {
    console.log("<==== Server started on port: 3000 ====>");
});