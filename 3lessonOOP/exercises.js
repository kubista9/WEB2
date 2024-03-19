// //03 Exercises: OOP  {}

// //1. Using Composition
// function createCircle(center, radius){
//     return {
//         getCenterX: () => center.getX(),
//         getCenterY: () => center.getY(),
//         getRadius: () => radius,
//         moveCenterTo: (x, y) => center.moveTo(x, y),
//         toString: () =>  `Circle(Center: ${center.toString()}, Radius: ${radius} )`
//     }
// }

// function createPoint(x, y) {
//    return {
//     // getX: () => x
//         getX(){
//             return x
//         }, 
//         getY(){
//             return y
//         },
//         moveTo(newX, newY){
//             x = newX
//             y = newY
//         },
//         //toString: () => '[${x},${y}]'
//         toString(){
//         return `[${x},${y}]`; 
//         }
//     }
// }

// console.log(createCircle(createPoint(1, 2), 4).toString())


// //2. Combining Programming Styles
// const circles1 = [
//     createCircle(createPoint(1, 2), 4),
//     createCircle(createPoint(3, 4), 5),
//     createCircle(createPoint(5, 6), 6)
// ];

// // Map the array of circles to an array of their radii
// const radii1 = circles1.map(circle => circle.getRadius());

// console.log(radii);


// //solution
// const circles2 = [createCircle(createPoint(1, 2), 7), createCircle(createPoint(2, 4), 5), createCircle(createPoint(2, 4), 3)]
// const radii2 = circles2.map(circle => circle.getRadius())
// console.log(radii)
// // → [7, 5, 3]


// //3. Method Overloading 

// function createCircle({ center = { x: 0, y: 0 }, radius = 0 } = {}) {
//     // If center is an object with x and y properties, use it directly
//     // Otherwise, create a new point with default values
//     //'x' in center && 'y' in center: This checks if the center object has properties named x and y. 
//     // The in operator returns true if the specified property is in the specified object. 
//     // This ensures that center is not just any object but specifically an object with x and y properties, which are expected to be coordinates.
//     //'x' in center && 'y' in center: This checks if the center object has properties named x and y.
//     // : createPoint(0,0) is just an else statement if ? createPoint will return false. ( condition ? expressionIfTrue : expressionIfFalse; )
//     const point = typeof center === 'object' && center !== null && 'x' in center && 'y' in center
//         ? createPoint(center.x, center.y)
//         : createPoint(0, 0);

//     return {
//         getCenterX: () => point.getX(),
//         getCenterY: () => point.getY(),
//         getRadius: () => radius,
//         moveCenterTo: (x, y) => point.moveTo(x, y),
//         toString: () => `Circle(Center: ${point.toString()}, Radius: ${radius} )`
//     };
// }

// // Example usage
// console.log(createCircle({ x: 2, y: 2, radius: 4 }).getCenterX()); // → 2
// console.log(createCircle({ center: { x: 2, y: 2 }, radius: 4 }).getCenterX()); // → 2

// // solution
// function createCircle({ x, y, center = createPoint(x, y), radius }) {
//     return {
//         getCenterX: () => center.getX(),
//         getCenterY: () => center.getY(),
//         getRadius: () => radius,
//         moveCenterTo: (x, y) => center.moveTo(x, y),
//         toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
//     }
// }

// function createPoint(x, y) {
//     return {
//         getX: () => x,
//         getY: () => y,
//         moveTo(newX, newY) {
//             x = newX
//             y = newY
//         },
//         toString: () => `[${x},${y}]`,
//     }
// }

// console.log(createCircle({ x: 2, y: 2, radius: 4 }).getCenterX())
// // → 2
// console.log(createCircle({ center: createPoint(2, 2), radius: 4 }).getCenterX())
// // → 2


//4. Extending Objects

function createPerson(name, age) {
    getCircle: () => return name;
}