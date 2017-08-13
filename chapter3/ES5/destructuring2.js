'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var regex = /(\d{4})(\d{2})(\d{2})/;

console.log(regex.exec('20151231'));
// => [ '20151231', '2015', '12', '31', index: 0, input: '20151231' ]

var _regex$exec = regex.exec('20151231'),
    _regex$exec2 = _slicedToArray(_regex$exec, 4),
    year = _regex$exec2[1],
    month = _regex$exec2[2],
    day = _regex$exec2[3];

console.log(year, month, day);