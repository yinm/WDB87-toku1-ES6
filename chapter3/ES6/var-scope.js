var bar = 0;
function foo(condition) {
  var bar = 1;
  if (condition) {
    var bar = 2;
  }
  console.log(bar);
}

foo(true);
console.log(bar);