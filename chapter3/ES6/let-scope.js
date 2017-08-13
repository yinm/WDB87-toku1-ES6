function foo(condition) {
  let bar = 1;
  if (condition) {
    let bar = 2;
  }
  console.log(bar);
}

foo(true);