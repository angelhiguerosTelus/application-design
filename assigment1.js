// Angel Higueros
// Assigment 1

// each
const _each = (list, iteratee) => {
  for (let i in list) {
    iteratee(list[i], i, list);
  }
  return list;
};

// map
const _map = (list, iteratee) => {
  let arr = [];
  for (let i in list) {
    arr.push(iteratee(list[i], i, list));
  }
  return arr;
};

// map making use of each
const _mapEach = (list, iteratee) => {
  let arr = [];
  _each(list, (el, i, ls) => arr.push(iteratee(el, i, ls)));
  return arr;
};

// filter
const _filter = (list, predicate) => {
  let arr = [];
  for (let i in list) {
    let el = predicate(list[i], i, list);
    el && arr.push(list[i]);
  }
  return arr;
};

// filter making use of each
const _filterEach = (list, predicate) => {
  let arr = [];
  _each(list, (el, i, ls) => {
    let element = predicate(el, i, ls);
    element && arr.push(el);
  });
  return arr;
};

// from
const _from = (list, iteratee) => {
  if (!iteratee) return [...list];
  let arr = [];
  for (let i in list) {
    arr.push(iteratee(list[i], i, list));
  }
  return arr;
};

// reduce
const _reduce = (list, iteratee, memo = 0) => {
  for (let i in list) {
    memo = iteratee(memo, list[i], i, list);
  }
  return memo;
};

// curry
const _curry = (func) => {
  let args = [];
  const curry = (...arg) => {
    args = args.concat(arg);
    if (func.length === args.length) {
      return func.apply(null, args);
    }
    return curry;
  };
  return curry;
};

// compose
const _compose = (...funcs) => {
  const fs = funcs.reverse();
  return function (value) {
    for (let f in fs) {
      value = fs[f](value);
    }
    return value;
  };
};

// Example of use

let data = [1, 2, 3, 4];

const sum = (a, b, c) => {
 return a + b + c
}

const saludo = nombre => `Hola ${nombre}`
const saludo2 = saludo => `${saludo}, bienvenido!`
const saludo3 = saludo => `${saludo} Feliz dia`

console.log('each:', _each(data, (el, i, list) =>  list[i] = el * 2));
console.log('map:', _map(data, el =>  el * 2));
console.log('mapEach:', _mapEach(data, el =>  el * 2));
console.log('filter:', _filter(data, el => el % 2 == 0));
console.log('filterEach:', _filterEach(data, el => el % 2 == 0));
console.log('from:', _from(data, el => el * 3));
console.log('reduce:', _reduce(data, (memo, el) => memo + el));
console.log('curry:', _curry(sum)(5)(4)(3));
console.log('compose:', _compose(saludo3, saludo2, saludo)('Angel'));
