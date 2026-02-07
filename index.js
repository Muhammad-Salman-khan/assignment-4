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

// Task 2.2 – Independent Closures
// Create a function factory that:
// Produces multiple closure instances
// Each instance maintains independent state
// Log outputs to prove isolation.

// Task 2.2 – Independent Closures (Start!)
// function operation() {
//   let newNumb = 0;
//   console.log(`starting state is ${newNumb}`);

//   return {
//     add: (e) => {
//       newNumb += e;
//       return newNumb;
//     },
//     subtract: (e) => {
//       newNumb -= e;
//       return newNumb;
//     },
//     multiply: (e) => {
//       newNumb *= e;
//       return newNumb;
//     },
//     divide: (e) => {
//       newNumb /= e;
//       return newNumb;
//     },
//   };
// }
// const newOperations = operation();
// console.log(`Addition : `, newOperations.add(3));
// console.log(`Addition : `, newOperations.add(7));
// console.log(`multipliction : `, newOperations.multiply(2));
// console.log(`subtraction : `, newOperations.subtract(3));
// console.log(`divion : `, newOperations.divide(3));

// Task 2.2 – Independent Closures (End!)

// Section 3: OOP with JavaScript
// Task 3.1 – Constructor Functions
// Build an object system using:
// Constructor functions
// Shared methods via prototype
// Create multiple instances and show shared vs unique propertie
// Task 3.1 – Constructor Functions(Start!)
// function UserInstance(name, email) {
//   this.name = name;
//   this.email = email;
//   this.id = crypto.randomUUID();
//   this.achivement = 0;
//   this.createdAt = Intl.DateTimeFormat("en-US", {
//     weekday: "short",
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "numeric",
//   }).format(new Date());
// }

// UserInstance.prototype.newUser = function () {
//   console.log(
//     `user created Successfully with a id:${this.id} name:${this.name} and email:${this.email} createdAt: ${this.createdAt}`,
//   );
// };
// UserInstance.prototype.updateEmail = function (newEmail) {
//   this.email = newEmail;
//   console.log(
//     `Eamil change Successfully using Function constructor ${this.email}`,
//   );
// };
// const student2 = new UserInstance("asad", "asad@gmail.com");
// const student1 = new UserInstance("Salman", "salman@gmail.com");
// student1.newUser();
// student2.newUser();
// console.log(`Similar email`, student1.email === student2.email);
// student2.updateEmail("asad12@gmail.com");

// Task 3.1 – Constructor Functions(End!)

// Task 3.2 – ES6 Classes (Comparison)
// Rewrite Task 3.1 using ES6  class  syntax.
// Log similarities and diferences through output behavior.
// Task 3.2 – ES6 Classes (Comparison)(Start!)
// class UserInstanceClass {
//   id = crypto.randomUUID();
//   createdAt = new Intl.DateTimeFormat("en-US", {
//     weekday: "short",
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   }).format(new Date());
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   intro() {
//     console.log(
//       `Hey user:${this.name} and email:${this.email} createdAt: ${this.createdAt}`,
//     );
//   }
//   updateEmail(newMail) {
//     this.email = newMail;
//     console.log(`Email updated Sucessfully using Classes ${this.email} `);
//   }
// }
// const user1 = new UserInstanceClass("Salman", "salman@gmail.com");
// user1.intro();
// user1.updateEmail("selmon@gmail.com");
// user1.intro();
// console.log(`unique id's compare`, student1.id !== user1.id);
// console.log(`compare both method`, student1.newUser === user1.intro);
// console.log(
//   `compare both function instructor and class `,
//   UserInstance.updateEmail === UserInstanceClass.updateEmail,
// );

// Task 3.2 – ES6 Classes (Comparison)(End!)

// Task 3.3 – Inheritance & Method Overriding (Hard)
// Create a base class and at least one child class.
// Override a method and use  super  correctly.
// Demonstrate polymorphism using runtime logs.
// Task 3.3 – Inheritance & Method Overriding (Start!)
// class UserRoles {
//   id = crypto.randomUUID();
//   createdAt = new Intl.DateTimeFormat("en-US", {
//     weekday: "short",
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   }).format(new Date());
//   role = "user";
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   login() {
//     console.log(
//       `user loggedIn Successfully with a name:${this.name} and email: ${this.email} role ${this.role}`,
//     );
//   }
// }
// class AdminRole extends UserRoles {
//   constructor(name, email, roleChange) {
//     super();
//     this.name = name;
//     this.email = email;
//     this.role = roleChange;
//   }
//   login() {
//     super.login();
//     console.log(`${this.name} is now loggedIn As Role: ${this.role}`);
//   }
// }

// const testSub0 = new UserRoles("Salman", "s1@gmail.com");
// const testSub01 = new AdminRole("Hachiman", "Haciman@gmail.com", "Admin");
// testSub0.login();
// testSub01.login();
// Task 3.3 – Inheritance & Method Overriding (End!)

// Section 4: Asynchronous JavaScript
// Task 4.1 – Sync vs Async Execution Order
// Write code that mixes:
// Normal functions
// Timers
// Log output order and explain it using execution timing (via logs).
// Task 4.1 – Sync vs Async Execution Order(Start!)

// function ff1(e) {
//   console.log(`sync Function 1 Start`, new Date().getMilliseconds());
//   e;
// }
// function ff2(e) {
//   console.log(`sync Function 2 Start ${new Date().getMilliseconds()}`);

//   console.log(`symc Function 2 ended ${new Date().getMilliseconds()}`);
//   e;
// }
// function ff3(e) {
//   console.log(`Async Function 3 Started ${new Date().getMilliseconds()}`);
//   setTimeout(() => {
//     console.log(`Async Function 3 Ended ${new Date().getMilliseconds()}`);
//     e();
//   }, 500);
// }
// function ff4() {
//   console.log(`Async Function 4 Started ${new Date().getMilliseconds()}`);
//   setTimeout(() => {
//     console.log(`Async Function 4 Ended ${new Date().getMilliseconds()}`);
//   }, 500);
// }
// ff1(ff2(ff3(ff4)));
// console.log(
//   `sync code run immediatitly during initial callstack  compare to async code becuase async will wait for the code to run for respected time like setTimeout  and async await`,
// );

// Task 4.1 – Sync vs Async Execution Order(End!)

// Task 4.2 – Callback Hell Simulation
// Create nested callbacks that:
// Depend on previous results
// Clearly show execution depth
// Log timestamps and nesting levels.

// Task 4.2 – Callback Hell Simulation(Start!)
// setTimeout(() => {
//   console.log(`first ${new Date().getMilliseconds()} `);
//   setTimeout(() => {
//     console.log(`Second ${new Date().getMilliseconds()}`);
//     setTimeout(() => {
//       console.log(`Third ${new Date().getMilliseconds()}`);
//       setTimeout(() => {
//         console.log(`Fourth ${new Date().getMilliseconds()}`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Task 4.2 – Callback Hell Simulation(End!)

// Task 4.3 – Promises vs Callbacks (Hard)
// Rewrite Task 4.2 using Promises.
// Compare readability and execution fow using logs.
// Task 4.3 – Promises vs Callbacks (Hard)(Start!)
// const Promises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Donee");
//   }, 3000);
// });

// Promises.then((e) => console.log(e))
//   .then(() => {
//     setTimeout(() => console.log(`Data is arived`), 300);
//   })
//   .then(() => console.log("We can see you "))
//   .then(() => console.log("jejeje "))
//   .catch((e) => console.log(e));
// Task 4.3 – Promises vs Callbacks (Hard)(End!)
