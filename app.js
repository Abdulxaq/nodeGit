const _ = require('lodash');


const arr = [1,[2,[3,[4]]]]
const newItem = _.flatMapDeep(arr);

console.log(newItem);