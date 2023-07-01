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
