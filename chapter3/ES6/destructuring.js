const [year, month, day] = [2015, 12, 31];
console.log(year, month, day);

const [, month2] = [2015, 12, 31];
console.log(month2);

const [year3, ...monthDay3] = [2015, 12, 31];
console.log(year3, monthDay3);

let x = 1,
    y = 2;
[x, y] = [y, x];
console.log(x, y);

const {name: a, age: b} = {name: "Bob", age: 20};
console.log(a, b);

const {name2, age2} = {name2: "Tom", age2: 30};
console.log(name2, age2);

const {name3, age3 = 18} = {name3: "John"};
console.log(name3, age3);

const {foo: {bar: [, z]}} = {foo: {bar: [1, 2, 3]}};
console.log(z);