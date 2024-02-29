//03 Exercises: OOP  {}


//1. Using Composition
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


//2. Combining Programming Styles
