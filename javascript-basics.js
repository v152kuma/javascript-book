/*//Event driven - 
//Event driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.

//Functional programming - Pure functions and Functionsa as first class citizens 
//Functional programming is a programming paradigm that treats computation as the 
//evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements.

//Imperative programming -
//Imperative programming is a programming paradigm that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform.

//Object oriented programming -
//Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", 
//which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

//Declarative programming - 
//Declarative programming is a programming paradigm that expresses the logic of a computation without
//describing its control flow.
*/

let input = prompt("Are you scared learning Javascript?");


console.log(input);

if(input.includes("yes")){
    alert("Don't be scared, Javascript is fun!");
}
else
{
    alert("Great! Keep learning Javascript!");
}

