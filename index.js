// Task 1.1 – Losing and Fixing  this
// Create an object with a method that uses  this .
// Steps:
// Call the method normally
// Assign the method to a variable and call it
// Fix the broken context using  call
// Log outputs at each step and observe diferences.
// Task 1.1 – Losing and Fixing  this (Start!)
const myObject = {
  name: "Asim munir",
  age: `100+`,
  intro: function () {
    return `Hello my name is ${this.name} and my age is ${this.age}`;
  },
};
console.log(`calling function normally`, myObject.intro());
const proMunir = myObject.intro;
console.log(`assinged variable call`, proMunir());
const maxProMunir = proMunir.call(myObject);
console.log(`calling function using call method `, maxProMunir);

// Task 1.1 – Losing and Fixing  this (End!)
