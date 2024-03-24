//03 Exercises: OOP  {}

//1. Using Composition
function createCircle(center, radius){
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () =>  `Circle(Center: ${center.toString()}, Radius: ${radius} )`
    }
}

function createPoint(x, y) {
   return {
    // getX: () => x
        getX(){
            return x
        }, 
        getY(){
            return y
        },
        moveTo(newX, newY){
            x = newX
            y = newY
        },
        //toString: () => '[${x},${y}]'
        toString(){
        return `[${x},${y}]`; 
        }
    }
}

console.log(createCircle(createPoint(1, 2), 4).toString())

//solution 
function createCircle(center, radius) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
    }
}

function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX
            y = newY
        },
        toString: () => `[${x},${y}]`,
    }
}

console.log(createCircle(createPoint(1, 2), 4).toString())
// → Circle(Center: [1,2], Radius: 4)

//2. Combining Programming Styles
const circles1 = [
    createCircle(createPoint(1, 2), 4),
    createCircle(createPoint(3, 4), 5),
    createCircle(createPoint(5, 6), 6)
];

// Map the array of circles to an array of their radii
const radii1 = circles1.map(circle => circle.getRadius());

console.log(radii);


//solution
const circles2 = [createCircle(createPoint(1, 2), 7), createCircle(createPoint(2, 4), 5), createCircle(createPoint(2, 4), 3)]
const radii2 = circles2.map(circle => circle.getRadius())
console.log(radii)
// → [7, 5, 3]


//3. Method Overloading 

function createCircle({ center = { x: 0, y: 0 }, radius = 0 } = {}) {
    // If center is an object with x and y properties, use it directly
    // Otherwise, create a new point with default values
    //'x' in center && 'y' in center: This checks if the center object has properties named x and y. 
    // The in operator returns true if the specified property is in the specified object. 
    // This ensures that center is not just any object but specifically an object with x and y properties, which are expected to be coordinates.
    //'x' in center && 'y' in center: This checks if the center object has properties named x and y.
    // : createPoint(0,0) is just an else statement if ? createPoint will return false. ( condition ? expressionIfTrue : expressionIfFalse; )
    const point = typeof center === 'object' && center !== null && 'x' in center && 'y' in center
        ? createPoint(center.x, center.y)
        : createPoint(0, 0);

    return {
        getCenterX: () => point.getX(),
        getCenterY: () => point.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => point.moveTo(x, y),
        toString: () => `Circle(Center: ${point.toString()}, Radius: ${radius} )`
    };
}

// Example usage
console.log(createCircle({ x: 2, y: 2, radius: 4 }).getCenterX()); // → 2
console.log(createCircle({ center: { x: 2, y: 2 }, radius: 4 }).getCenterX()); // → 2

// solution
function createCircle({ x, y, center = createPoint(x, y), radius }) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
    }
}

function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX
            y = newY
        },
        toString: () => `[${x},${y}]`,
    }
}

console.log(createCircle({ x: 2, y: 2, radius: 4 }).getCenterX())
// → 2
console.log(createCircle({ center: createPoint(2, 2), radius: 4 }).getCenterX())
// → 2


// 4. Extending Objects

function createPerson(name, age) {
    if (arguments.length === 1) {
        return {
            name: name,
            // getName: () => name,
            getName: function() {
                return this.name;
            },
            setName: function(newName){
                this.name = newName;
            },
            toString: () => `Person { name: ${this.name} }`,
            equals: (otherPerson) => otherPerson.name === name
        };
    } else if (arguments.length === 2) {
        return {
            name: name,
            age: age,
            getName: function() {
                return this.name;
            },
            getAge: function() {
                return this.age;
            },
            setName: function(newName){
                this.name = newName;
            },
            setAge: function(newAge){
                this.age = newAge
            },
            // toString: () => `Person { name: ${this.name}, age: ${this.age ? ', age: ' + this.age : ''} }`,
            toString: function() {
                return `Person { name: ${this.name}, age: ${this.age ? ', age: ' + this.age : ''} }`;
            },
            // equals: (otherPerson) => otherPerson.name === name && (!this.age || otherPerson.age === this.age)
            equals: function(otherPerson) {
                return otherPerson.name === this.name && (!this.age || otherPerson.age === this.age);
            }
        };
    } else {
        throw new Error('Invalid number of arguments');
    }
}

function createEmployee(name, age, salary){
    const person = createPerson(name, age);
        const employee = {
            ...person,
            salary: salary,
            getSalary: function() {
                return this.salary;
            },
            setSalary: function(newSalary){
                this.salary = newSalary;
            },
            // toString: () => `Employee { name: ${this.name}, ${this.age ? `age: ${this.age}` : `salary: ${this.salary}`} }`,
            toString: function() {
                return `Employee { name: ${this.name}, ${this.age ? `age: ${this.age}` : `salary: ${this.salary}`} }`;
            },
            //equals: (otherEmployee) => otherEmployee.name === employee.name && (!this.age || otherEmployee.age === this.age) && otherEmployee.salary === employee.salary
            equals: function(otherEmployee) {
                return otherEmployee.name === this.name && (!this.age || otherEmployee.age === this.age) && otherEmployee.salary === this.salary;
            }
        }
    return employee;
}

const santa = createEmployee("Santa", 78, 0);
console.log(santa.toString());

const jakub = createEmployee("jakub", 7666, undefined);
console.log(jakub.toString());

const cabel = createEmployee("tukabel", undefined, 9884);
console.log(cabel.toString());

// solution
function createPerson(name, age) {
    return {
        getName: () => name,
        setName: newName => (name = newName),
        getAge: () => age,
        setAge: newAge => (age = newAge),
        toString: () => `Name: ${name}, Age: ${age}`,
        equals: person => person.getName() === name && person.getAge() === age,
    }
}

function createEmployee({ name, age, salary }) {
    const person = createPerson(name, age)

    return {
        ...person,
        getSalary: () => salary,
        setSalary: newSalary => (salary = newSalary),
        toString: () => `${person.toString()}, Salary: ${salary}`,
        equals: employee => person.equals(employee) && employee.getSalary() === salary,
    }
}

const santa = createEmployee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())

// 5. Another Approach

class Point{
    // no return so no use of arrow functions
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    
    moveTo(newX, newY){
        this.x = newX;
        this.y = newY;
    }

    toString(){
        return `[${this.x},${this.y}]`;
    }
}

class Circle {
    constructor(center, radius){
        this.center = center;
        this.radius = radius;
    }

    getCenterX(){
        return this.center.getCenterX;
    }

    getCenterY(){
        return this.center.getCenterY;
    }

    getRadius(){
        return this.radius;
    }

    moveCenterTo(x, y){
        this.center.moveCenterTo(x, y);
    }

    toString(){
        return `Circle(Center: ${this.center.toString()}, Radius: ${this.radius} )`;
    }
}

const point = new Point(3,4);
console.log(point.toString());

const circle = new Circle(point, 5);
console.log(circle.toString());

solution 
class Circle {
    #center
    #radius

    constructor(center, radius) {
        this.#center = center
        this.#radius = radius
    }

    getCenterX() {
        return this.#center.getX()
    }

    getCenterY() {
        return this.#center.getY()
    }

    getRadius() {
        return this.#radius
    }

    moveCenterTo(x, y) {
        this.#center.moveTo(x, y)
    }

    toString() {
        return `Circle(Center: ${this.#center.toString()}, Radius: ${this.#radius})`
    }
}

class Point {
    #x
    #y

    constructor(x, y) {
        this.#x = x
        this.#y = y
    }

    getX() {
        return this.#x
    }

    getY() {
        return this.#y
    }

    moveTo(x, y) {
        this.#x = x
        this.#y = y
    }

    toString() {
        return `[${this.#x},${this.#y}]`
    }
}

console.log(new Circle(new Point(1, 2), 4).toString())

//6. Extending Classes
class Person{
    #name
    #age
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    getName(){
        return this.#name;
    }

    getAge(){
        return this.#age;
    }

    setName(newName){
        this.name = newName;
    }

    setAge(newAge){
        this.#age = newAge;
    }

    toString(){
        return `[${this.#name},${this.#age}]`;
    }
    equals(otherPerson){
        return this.name === otherPerson.name && this.age === otherPerson.age;
    }
}

class Employee{
    #salary
    #name
    #age
    constructor(name, age, salary){
        this.#salary = salary
        const person = new Person(name, age);
        this.#name = name
        this.#age = age
    }

    getSalary(){
        return this.#salary;
    }

    setSalary(salary){
        this.#salary = salary
    }

    toString(){
        return `[${this.#name},${this.#age},${this.#name}]`
    }
    equals(otherEmployee){
        return this.#age === otherEmployee.age && this.#name === otherEmployee.name && this.#salary === otherEmployee.salary
    }
}

const person = new Person("jakub",44);
const employee = new Employee("denmark",32,8594)
console.log(person.getAge())
console.log(employee.getSalary())