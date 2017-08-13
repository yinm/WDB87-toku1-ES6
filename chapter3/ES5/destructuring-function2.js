"use strict";

function foo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$a = _ref.a,
      a = _ref$a === undefined ? 0 : _ref$a,
      _ref$b = _ref.b,
      b = _ref$b === undefined ? 0 : _ref$b;

  console.log(a, b);
}

foo({ a: 1 });
foo({ b: 2 });
foo({});
foo();