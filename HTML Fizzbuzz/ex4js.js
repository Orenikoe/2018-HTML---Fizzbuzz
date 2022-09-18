const box1 = document.getElementById('fizz');
const box2 = document.getElementById('buzz');
const box3 = document.getElementById('fizzBuzz');
const box4 = document.getElementById('none');

let fizzArr = [];
let buzzArr = [];
let fizzBuzzArr = [];
let noneArr = [];

function sortNumbers() {
   for (let i = 1; i < 101; i++) {
      if (i % 15 == 0) {
    console.log("FizzBuzz");
    fizzBuzzArr.push(i);
      }      
      else if (i % 3 == 0) {
         console.log("Fizz");
         fizzArr.push(i);
      } 
      else if (i % 5 == 0) {
         console.log("Buzz");
         buzzArr.push(i);
      } 
      else {
         console.log(i);
         noneArr.push(i);
      } 
  }
  console.log(fizzBuzzArr);
}

function initApp() {
   sortNumbers();
printNumbers(box2, buzzArr)
printNumbers(box1, fizzArr)
printNumbers(box3, fizzBuzzArr)
printNumbers(box4, noneArr)

}

function printNumbers(obj, text) {
obj.innerHTML = "";
obj.innerHTML = text

}

