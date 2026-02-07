// Task 1.1 – Losing and Fixing  this
// Create an object with a method that uses  this .
// Steps:
// Call the method normally
// Assign the method to a variable and call it
// Fix the broken context using  call
// Log outputs at each step and observe diferences.
// Task 1.1 – Losing and Fixing  this (Start!)
// const myObject = {
//   name: "Asim munir",
//   age: `100+`,
//   intro: function () {
//     return `Hello my name is ${this.name} and my age is ${this.age}`;
//   },
// };
// console.log(`calling function normally`, myObject.intro());
// const proMunir = myObject.intro;
// console.log(`assinged variable call`, proMunir());
// const maxProMunir = proMunir.call(myObject);
// console.log(`calling function using call method `, maxProMunir);

// Task 1.1 – Losing and Fixing  this (End!)

// Task 1.2 – call vs apply (Argument Handling)
// Create a function that accepts multiple parameters.
// Invoke it using:
// call
// apply
// Use diferent argument values and log results.
// Mandatory:
// Change argument count at least once
// Task 1.2 – call vs apply (Argument Handling)(Start!)
// const user = {
//   name: "Hardvard",
//   email: "hardvard@gmail.com",
//   enrolled: "Cs 50",
//   duration: `70 hour's credit's`,
// };
// const user2 = {
//   name: "Hachiman",
//   email: "hachiman@gmail.com",
//   enrolled: "generative  Ai",
//   duration: `35 hour's credit's`,
// };
// function Starting(greeting, teacherName) {
//   return `${greeting} my name ${this.name} and my teacher name is ${teacherName} and my email: ${this.email} and my course is ${this.enrolled} and it will take ${this.duration}`;
// }
// console.log(`using Call method:`, Starting.call(user, "Hello", "Sir Talal"));
// console.log(
//   `using apply method:`,
//   Starting.apply(user2, ["Hey!", "Hitesh", "I'm from your heart!"]),
// );
// Task 1.2 – call vs apply (Argument Handling)(End!)

// Task 1.3 – bind and Delayed Execution (Hard)
// Create a function that:
// Uses  this
// Is executed later using a timer
// Use  bind  to permanently attach context and compare behavior.
// Task 1.3 – bind and Delayed Execution (Start!)
// function taxOnProduct(tax, discount) {
//   const finalPrice = this.price - tax - discount;
//   console.log(`${this.name} final price is:`, finalPrice);
// }
// const product = {
//   name: "Iphone 12",
//   price: 100000,
// };

// setTimeout(() => {
//   console.log(`without bond`);
//   taxOnProduct(40, 20);
// }, 400);

// setTimeout(taxOnProduct.bind(product, 40, 20), 1000);
// setTimeout(() => {
//   console.log(`with bond`);
// }, 1002);

// Task 1.3 – bind and Delayed Execution (End!)

// Section 2: Closures (Memory & Scope)
// Task 2.1 – Closure Proof
// Write a function that:
// Declares a private variable
// Returns an inner function that uses it
// Call the inner function multiple times and observe memory behavior.

// Section 2: Closures (Memory & Scope)(Start!)
// const steps = () => {
//   let number = 0;
//   console.log(`Starting !!!!`);

//   return (e) => {
//     number += e;
//     return number;
//   };
// };
// const mySteps = steps();
// console.log(`step 1`, mySteps(3));
// console.log(`step 2`, mySteps(2));
// console.log(`step 3`, mySteps(12));
// console.log(`step 4`, mySteps(10));
// console.log(`step 5`, mySteps(49));

// Section 2: Closures (Memory & Scope)(End!)
