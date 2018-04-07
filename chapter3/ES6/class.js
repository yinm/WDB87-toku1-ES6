class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`)
  }

  static create(name) {
    return new Person(name)
  }
}

const bob = new Person('Bob')
bob.greet()

const john = Person.create('John')
john.greet()