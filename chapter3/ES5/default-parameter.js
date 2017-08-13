"use strict";

function add() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  console.log(a + b);
}

add();
add(0);
add(0, 0);