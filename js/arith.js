//External js file
//Get Elements -> Get text
let spanE = document.getElementById('num1');
let spanT = spanE.textContent;
let n1 = parseInt(spanT);

//get the second number
let spanE2 = document.getElementById('num2');
let spanT2 = spanE2.textContent;
let n2 = parseInt(spanT2);

//add numbers
let c = n1 + n2;

//display
document.write(c);