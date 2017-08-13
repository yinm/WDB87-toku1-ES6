"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
};

for (var i = 0; i < 5; i++) {
  _loop(i);
}