const should = require('should');
const user = require('../app/user/user')('./test.json');
const data = require('../test.json'); 

describe('User', function() {
  describe('#save()', function() {
    it('should save the user', function() {
      let params={
        input:{name:"test user"},
        data:data
      }
        return user.addUser(params).then(user=> {
          should(user).have.property('name', 'test user');
        })
    });
  });

  describe('#get()', function() {
    it('should get the user list', function() {
        return user.getUsers().then(users=> {
            should(JSON.parse(users.toString())).have.length(data.length);
        })
    });
  });
});