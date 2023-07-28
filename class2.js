<<<<<<< HEAD
// Function in javascript

function name(para1, para2) {

}

function multiplication(x, y, c = 0) {
    return x * y * c
}
let z = multiplication(5, 10, 7)
console.log(z);

// Arrow functions
mul = (a, b) => {
    return a * b;
}
console.log(mul);

// Spread operator
const arr = [1, 2, 3, 4, 5, 6]
const arr1 = [...arr]
const [one, ...rest] = arr
console.log(arr, arr1, one, rest)

const studentDetails = {
    name: 'John',
    age: 20
}

const moreDetails = {}

const allDetails = { ...studentDetails, ...moreDetails }

console.log(allDetails)
=======
console.log("Hello World")

// Variables-> var,let,const
// Var -> Used in older browsers
var a = 1
var b = 2
var c = a + b
console.log(c)

// Let -> Same as var but used for latest browsers
let x = 10
let y = 2
let z = x + y
console.log(z)

// Const -> Value can't be reassigned
const m = 3
// m = m + 1  // Gives error
console.log(m)

// Data Types

let e = 2
let f = 2.111
let g = 'a'
let h = true
let i = {
    firstname: "shatakshi",
    lastname: "choudhary",
    age: 19
}
console.log(typeof (e))
console.log(typeof (f))
console.log(typeof (g))
console.log(typeof (h))
console.log(typeof (i))

// Operators 
// + - * / % = == += -= *= /= ===

let first = 3 + 2
console.log(first)
let second = 6
second += 2
console.log(second)

let comp1 = 1
let comp2 = '2'
// Comparison operator
if (comp1 == comp2) {
    console.log("Matched")
}
else {
    console.log("Not matched")
}

let comp3 = '5'
let comp4 = '5'
if (comp3 === comp4) {
    console.log("Matched")
}
else {
    console.log("Not matched")
}

// Loops in Js
>>>>>>> fffa189786a666c4d591004f987d21061ec6e1e4
