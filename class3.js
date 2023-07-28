<<<<<<< HEAD
// File System

var fs = require('fs');

// CRUD operations
// 1) Create file
//  (i) appendFile -> New data is added to already exixting data

fs.appendFile('file1.txt', 'File1', (err) => {
    if (err) throw err
    console.log('File1 created')
})

//  (ii) writeFile -> Existing data is replaced by new data

fs.writeFile('file2.txt', 'This is file2', (err) => {
    if (err) throw err
    console.log('File2 is created')
})

//   (iii) openFile -> Opens a file

fs.open('file3.txt', 'w', (err) => {
    if (err) throw err
    console.log('File3 is created')
})

// 2) Read File -> Reads the file

fs.readFile('file1.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})

// 3) Update File
//   (i) appendFile
fs.appendFile('file1.txt', ' file1 updated', (err) => {
    if (err) throw err
    console.log('File1 is Updated')
})

//   (ii) writeFile
fs.writeFile('file2.txt', 'file2 updated', (err) => {
    if (err) throw err
    console.log('File2 is updated')
})

// 4) Delete File

fs.unlink('file3.txt', (err) => {
    if (err) throw err
    console.log('File3 is deleted!')
})


// Rename a File

fs.rename('file2.txt', 'renamed file2.txt', (err) => {
    if (err) throw err
    console.log('File2 is renamed')
})
=======
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
>>>>>>> fffa189786a666c4d591004f987d21061ec6e1e4
