// super class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, I'm " + this.name);
  }

  static create(name) {
    return new Person(name);
  }
}

// extend class
class Author extends Person {
  constructor (name, book) {
    // call constructor of super class
    super(name);
    this.book = book;
  }

  // override instance method
  greet() {
    super.greet();
    console.log("I wrote " + this.book);
  }

  // override static method
  static create(name, book) {
    return new Author(name, book);
  }
}

const author = new Author("Gillian Flynn", "Gone Girl");
author.greet();
