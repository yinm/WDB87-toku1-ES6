"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// super class
var Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hello, I'm " + this.name);
    }
  }], [{
    key: "create",
    value: function create(name) {
      return new Person(name);
    }
  }]);

  return Person;
}();

// extend class


var Author = function (_Person) {
  _inherits(Author, _Person);

  function Author(name, book) {
    _classCallCheck(this, Author);

    var _this = _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).call(this, name));
    // call constructor of super class


    _this.book = book;
    return _this;
  }

  // override instance method


  _createClass(Author, [{
    key: "greet",
    value: function greet() {
      _get(Author.prototype.__proto__ || Object.getPrototypeOf(Author.prototype), "greet", this).call(this);
      console.log("I wrote " + this.book);
    }

    // override static method

  }], [{
    key: "create",
    value: function create(name, book) {
      return new Author(name, book);
    }
  }]);

  return Author;
}(Person);

var author = new Author("Gillian Flynn", "Gone Girl");
author.greet();