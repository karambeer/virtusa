const bodyParser = require('body-parser');
const authentication = require('./authentication');
const responseHeader = require('./responseheader');


module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(authentication);
    app.use(responseHeader)
}