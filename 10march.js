// Normal function:

// f1(); // Invoking the function.
// function f1(){ // Function definition.
//     console.log("normal function definition");
// }
// f1(); // It is adviced to call function after function definition.
// console.log(f1); // function definition, consoling the things which are present in function f1.
// At line no. 2 f1() executes because first functions get stored in memory allocation part and when it gets to the code execution
// part, function is already available.

// Anonymous function:- Function has no name so if i want to use this function i have to assign function definition into
//                      variable. Function has no name i.e. why known as anonymous function.
// (a.)
// f2(); // Uncaught ReferenceError: Cannot access 'f2' before initialization
// let f2 = function(){
//     console.log("anonymous function");
// }
// console.log(f2); // consoling function definition.

// (b.)
// let f2 = function(){
//     console.log("anonymous function");
// }
// f2();
// console.log(f2); // consoling function definition.

// Arrow function:- 
// (a.)
// f3(); // f3 is not a function.
// var f3 = () => {
    // console.log("arrow function");
// }
// console.log(f3); // consoling the function definition.

// (b.)
// var f3 = () => {
    // console.log("arrow function");
// }
// f3(); // invoking the function
// console.log(f3); // consoling the function definition

// Note:- Arrow functions and Anonymous functions are not hoisted. Also, Both behaves like similar.

// Q:- Convert the given function into arrow function:-
// function add(a,b) {
//     return a+b;
// }
// console.log(add(4,5));

// Ans:-
// let add = (a,b) => { // a and b is parameter.
//     return a+b;
// }
// console.log(add(4,5));

// or

// var add = (a,b) => a+b; // implicit return; only when the single statement inside the function is return statement.
// console.log(add(4,5));

// Q:- Arrow function and simple function for myultiply by two?

// Ans:- Arrow function:-
// let multiplyBy2 = n => n*2 // in case of one parameter, parenthesis can also be removed.
// console.log(multiplyBy2(8));

// or

// let multiplyBy2 = n => {
//     return n*2;
// }
// console.log(multiplyBy2(9));

// Simple function:-

// function multiplyBy2 (n) {
    // return n*2;
// }
// console.log(multiplyBy2(5));
// -----------------------------------------------------------------------------------------------------------------------------
// Shadowing:-
// (a.)
// var x = 10;
// function a() {
//     console.log(x); // Reference to parents lexical environment i.e why it will print 10.
// }
// a();

// (b.)
// var x = 10;
// function a() {
//     var x = 40;
//     console.log(x); // 40
// }
// a(); 

// (c.)
// var x = 10;
// function a() {
//     var x = 20;
//     function b() {
//         var x = 30;
//         console.log(x, 'b'); // 30
//     }
//     b();
//     console.log(x, 'a'); // 20
// }
// console.log(x, 'global'); // 10
// a();

// Arrays:-
// (a.)
// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', ['x', 6, 'y']];
// console.log(arr);

// (b.)
// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', ['x', 6, 'y']];
// console.log(arr[0]);

// (c.)
// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', ['x', 6, 'y']];
// console.log(arr[8]);

// (d.)
// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', ['x', 6, 'y']];
// console.log(arr[8][2]);

// Length or array:- Length is the inbuilt property which exist for every array.
// (a.)
// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', ['x', 6, 'y']];
// console.log(arr.length); // 9

// (b.)
// let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', ['x', 6, 'y']];
// console.log(arr[8].length);

// Array methods:-
// push:- 1. add element to the end of the array.
// 2. it return the new length of the array.
// (a.)
// let arr = [1, 2, 3, 4];
// console.log(arr); // Here it is not possible to print the length of the array.

// (b.)
// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.length); // Here it is possible to print the length of the array with .length property

// After push the element into array, there are two ways two print the length of the array:-
// (c.)
// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.length);
// arr.push(5, 6, 7, 8);
// console.log(arr);
// console.log(arr.length);
// console.log(arr.push(9, 10, 11, 12)); // push the elements and prints only the length of the array

// (d.)
// let arr = [1, 2, 3, 4];
// console.log(arr); // prints the whole array
// console.log(arr.length); // prints only length
// let result = arr.push(5, 6, 7, 8); // because it return something so that i have to store in a variable.
// console.log(arr); // prints whole array
// console.log(result); // prints the length of new array.
// console.log(arr.length);
// console.log(arr.push());

// pop:- (1.) delete the last element from the array.
// (2.) it returns the popped element.
// (a.)
// let arr = [1, 2, 3, 4];
// console.log(arr, 'before pop');
// let result = arr.pop();
// console.log(arr, 'after pop');
// console.log(arr.length); // It is only one the way to print the length of new array in pop method.
// console.log(result); // It print the which value is popped only.

// Exercise of push and pop:-
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// fruits.pop(); // pop the last element
// console.log(fruits); // prints whole array
// console.log(fruits.length); // prints only length (3)
// console.log(fruits.pop()); // print the thing only which is popped.
// console.log(fruits); // prints the whole array
// console.log(fruits.push('strawberry')); // in case of push, push the element and prints only the length of array but in case of
//                                        // pop, it pop the element and print the name of element which is popped.
// console.log(fruits.push('melon'));
// console.log(fruits.pop());
// console.log(fruits);

// shift:- (1.) remove the element from front of the array.
// (2.) it return the removed element just like pop.
// (a.)
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// console.log(fruits.shift());
// console.log(fruits);

// unshift:- (1.) add element in the front of array.
// (2.) it returns the new length of array just like push.
// (a.)
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// let result = fruits.unshift('mango');
// console.log(fruits);
// console.log(result);
// console.log(fruits.length);
// console.log(fruits.push());

// indexOf:- It takes argument and returns the first index at which a given element occurs. It also takes second argument which
//           specifies at which index you want to start searching.
// (a.)
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// let result = fruits.indexOf('banana');
// console.log(fruits);
// console.log(result);

// (b.)
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'banana'];
// let result = fruits.indexOf('banana', 2);
// console.log(fruits);
// console.log(result);

// slice:- 
// (a.)
// let fruits = ['apple', 'orange', 'mango', 'banana', 'kiwi', 'tomato', 'grapes'];
// console.log(fruits);
// let result = fruits.slice(2,4); // ending index is not included.
// console.log(result);

// (b.)
// let fruits = ['apple', 'orange', 'mango', 'banana', 'kiwi', 'tomato', 'grapes'];
// console.log(fruits);
// let result = fruits.slice(4); // ending index is not included.
// console.log(result);

// (c.) slice works with -ve indices as well.
// let fruits = ['apple', 'orange', 'mango', 'banana', 'kiwi', 'tomato', 'grapes'];
// console.log(fruits);
// let result = fruits.slice(-3); // ending index is not included.
// console.log(result);

// exercise:-
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes'];
// console.log(fruits.push('strawberry', 'papaya', 'pear'));
// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits.unshift('jackfruit'));
// let result = fruits.slice(0, 3);
// console.log(result);