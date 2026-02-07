**Task 1.1 – Losing and Fixing this**<br>

<h2>Create an object with a method that uses this</h2>
calling the method normally works as expected. but when you pass the reference to the method, it loses its context and this becomes undefined. to fix this, you can use the call method to explicitly set the context of this.
<hr/>

**Task 1.2 – call vs apply (Argument Handling)**
<br>

<h2>Create a function that accepts multiple parameters</h2>
differentiate between call and apply by showing how they handle arguments. call accepts a list of arguments, while apply accepts an array of arguments. demonstrate this with a function that takes multiple parameters and show how to use both call and apply to invoke it.
<hr/>

**Task 1.3 – bind and Delayed Execution (Hard)**

<h2>Create a function that:
Uses  this Is executed later using a timer Use  bind  to permanently attach context and compare behavior</h2>
without using bind, the context of this is lost when the function is executed later. by using bind, you can create a new function with a permanently attached context, ensuring that this refers to the correct object even when executed after a delay.
<hr/>

**Section 2: Closures (Memory & Scope)**

<h3> Task 2.1 – Closure Proof</h3>
Create a function that returns another function which accesses a variable from the outer function's scope. This demonstrates that the inner function retains access to the outer function's variables even after the outer function has finished executing, proving the concept of closures.(summary)
<hr/>
