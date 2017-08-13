function foo({a = 0, b = 0} = {}) {
  console.log(a, b);
}

foo({a: 1});
foo({b: 2});
foo({});
foo();