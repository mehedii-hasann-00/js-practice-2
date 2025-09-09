
1. Difference between var, let, and const :

var is function scoped, hoisted, can be redeclared and reassigned.  
let is block scoped, can be reassigned but not redeclared, affected by the temporal dead zone.  
const is block scoped, cannot be reassigned or redeclared, affected by the temporal dead zone, but objects and arrays can still be mutated.



2. Difference between map(), forEach(), and filter() :
forEach executes a function for each item and returns undefined.  
map transforms each item and returns a new array with the same length.  
filter selects items that match a condition and returns a new array that may be shorter.



3. Arrow functions in ES6
Arrow functions are a shorter function syntax.  
They capture "this" from the surrounding scope (lexical this).  
They do not have their own arguments object and cannot be used as constructors.  
They are commonly used for callbacks.


4. Destructuring assignment
Destructuring allows extracting values from arrays or objects into variables.

Example with arrays:
const [a, b] = [1, 2]

Example with objects:
const {name, age} = person

It supports default values, renaming, and rest properties.


5. Template literals in ES6
Template literals use backticks.  
They allow embedding expressions with ${expression}.  
They support multiline strings without using newline characters.  
They are more readable and easier to use than string concatenation.


