## Functional Programming:

### In Factory Functions:

create a child of a parent object: `const child = Object.create(parent)` then child will have all the properties from the parent. We can overwrite the child's properties from parent.  
`const child = new nameOfFactoryFunction ( name, age){name:name,age:age}`

### In Constructor Function:

`const child = new NameOfConstructorFunction (name, age) {this.name:name, this.age:age}`

## Object Oriented Programming

### In Class

`class Child extends Parent { constructor(name) {
this.name = name
}}` `const child = new Child('Amy')`
