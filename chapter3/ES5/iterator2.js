"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var arr = [].concat(_toConsumableArray("foo"));
console.log(arr);

var _ecma = "ecma",
    _ecma2 = _toArray(_ecma),
    c1 = _ecma2[0],
    c2 = _ecma2[1],
    rest = _ecma2.slice(2);

console.log(c1, c2, rest);