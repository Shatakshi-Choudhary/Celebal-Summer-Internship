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