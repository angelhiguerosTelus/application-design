const _ = require('underscore')


var numbers = [1, 2, 3, 4, 5];
let b = _.each(numbers, function(value, index, list){
    return value * 2
});

// var person = {name: 'Tom', age: 18, gender: 'male'};
// const a= _.each(person, function(value, key){
//     console.log(key, value);
// });
console.log(b)




