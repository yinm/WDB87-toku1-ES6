"use strict";

var _module2 = require("./module");

var _module = _interopRequireWildcard(_module2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(_module2.foo);
(0, _module2.bar)();
var baz = new _module2.Baz();
console.log(baz);

console.log(_module2.foo);

console.log(_module.foo);