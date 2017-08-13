'use strict';

function foo(first, second) {
  console.log('first:', first);
  console.log('second:', second);

  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  console.log('rest:', rest);
}

foo(1, 2, 3, 4, 5);