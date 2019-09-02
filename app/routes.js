const userRoute = require('./user');

module.exports = (app) => {
    userRoute(app);
}