"use strict";

var arr = ["foo", "bar"];
var iterator = arr[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());