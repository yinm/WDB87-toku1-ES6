"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var year = 2015,
    month = 12,
    day = 31;

console.log(year, month, day);

var _ref = [2015, 12, 31],
    month2 = _ref[1];

console.log(month2);

var year3 = 2015,
    monthDay3 = [12, 31];

console.log(year3, monthDay3);

var x = 1,
    y = 2;
var _ref2 = [y, x];
x = _ref2[0];
y = _ref2[1];

console.log(x, y);

var _name$age = { name: "Bob", age: 20 },
    a = _name$age.name,
    b = _name$age.age;

console.log(a, b);

var _name2$age = { name2: "Tom", age2: 30 },
    name2 = _name2$age.name2,
    age2 = _name2$age.age2;

console.log(name2, age2);

var _name = { name3: "John" },
    name3 = _name.name3,
    _name$age2 = _name.age3,
    age3 = _name$age2 === undefined ? 18 : _name$age2;

console.log(name3, age3);

var _foo = { foo: { bar: [1, 2, 3] } },
    _foo$foo$bar = _slicedToArray(_foo.foo.bar, 2),
    z = _foo$foo$bar[1];

console.log(z);