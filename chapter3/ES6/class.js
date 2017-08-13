class Person {
  // constructor
  constructor(name) {
    // property
    this.name = name;
  }

  // instance method
  greet() {
    console.log("Hello, I'm " + this.name);
  }

  // static method
  static create(name) {
    return new Person(name);
  }
}

// create instance
const bob = new Person("Bob");
bob.greet();

// call static method
const john = Person.create("John");
john.greet();




