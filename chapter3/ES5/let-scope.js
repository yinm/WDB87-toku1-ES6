"use strict";

function foo(condition) {
  var bar = 1;
  if (condition) {
    var _bar = 2;
  }
  console.log(bar);
}

foo(true);