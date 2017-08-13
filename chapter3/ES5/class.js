"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  // constructor
  function Person(name) {
    _classCallCheck(this, Person);

    // property
    this.name = name;
  }

  // instance method


  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hello, I'm " + this.name);
    }

    // static method

  }], [{
    key: "create",
    value: function create(name) {
      return new Person(name);
    }
  }]);

  return Person;
}();

// create instance


var bob = new Person("Bob");
bob.greet();

// call static method
var john = Person.create("John");
john.greet();