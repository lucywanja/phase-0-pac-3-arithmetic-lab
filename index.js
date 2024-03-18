//define function to add two numbers
function add(a, b) {
    return a + b;
  }


//function to subtract b from a
 function subtract(a, b) {
    return a - b;     
 } 

//function multiply two numbners
 function multiply(a, b) {
    return a * b;
    
  }

//   function divide a by b
function divide(a, b) {
    return a / b;

  }

  // function increment a number by 1
function increment(n) {
    return n + 1;
}  

// function decrement a number by 1
function decrement(n) {
    return n - 1;
}

// parses n as an integer and returns the parsed integer,assumes base 10,returns NaN 

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt('42')); // Output: 42
console.log(makeInt('0x2328')); // Output: 0
console.log(isNaN(makeInt('sldkjflksjf'))); // Output: true


 // parses n as a decimal and return the parsed number ,returns NAN as 

 function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal('2.222')); // Output: 2.222
console.log(isNaN(preserveDecimal('sldkjflksjf'))); // Output: true

