const fs = require('fs');
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


module.exports = (datasource) => {
      return {
            getAll: () => getAll(datasource),
            add: (item) => add(datasource, item)
      }
}

let getAll = (datasource) => {
      return readFile(datasource).then(data => data);
}

let add = (datasource, input) => {
      return writeFile(datasource, JSON.stringify(input)).then(_ => input);
}