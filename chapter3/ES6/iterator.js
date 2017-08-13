const arr = ["foo", "bar"];
const iterator = arr[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());