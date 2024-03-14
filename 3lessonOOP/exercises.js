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

