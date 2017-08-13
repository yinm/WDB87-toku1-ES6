let key = "foo";

let obj = {
  [key]: 0,
  [key + "_bar"]: 1
};

console.log(obj);