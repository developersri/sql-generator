const Query = require('./lib/Query');

const input1 = require('./inputs/input1.json');
const input2 = require('./inputs/input2.json');
const input3 = require('./inputs/input3.json');
const input4 = require('./inputs/input4.json');
const input5 = require('./inputs/input5.json');
const input6 = require('./inputs/input6.json');

let query = new Query(input1);
console.log(query.queryString);

query = new Query(input2);
console.log(query.queryString);

query = new Query(input3);
console.log(query.queryString);

query = new Query(input4);
console.log(query.queryString);

query = new Query(input5);
console.log(query.queryString);

query = new Query(input6);
console.log(query.queryString);