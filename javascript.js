// let input = "12*80+34-67/89    1+2*3/6+5";

let date = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", (e) => {
  let input = date.value;
  let temp = ""
  let firstarray = []
  let j = 0
  
  
  for (let i = 0; i < input.length; i++) {
    let j = i
    while (!isNaN(input[j])) {
      temp += input[j]
      j++
  };
  i = j
  firstarray.push(temp);
  if (input[j] != undefined) {
    firstarray.push(input[i]);
  }
  temp = ""
  };
  
  let stack = []
  
  while (firstarray.length > 0) {
    element = firstarray.shift()
    if (element === "*") {
      let num1 = stack.pop();
      let num2 = firstarray.shift();
      let res = Number(num1) * Number(num2);
      stack.push(res);
    }
    else if (element === "/") {
      let num1 = stack.pop();
      let num2 = firstarray.shift();
      let res = Number(num1) / Number(num2);
      stack.push(res);
  }
  else if (element === "-") {
    let num1 = firstarray.shift();
    let res = -parseInt(num1);
    firstarray.unshift(res); 
  }
  else if (element === "+") {
    null
  }
  else {
    stack.push(Number(element))
  }
  
  };
  
  let secondarray = stack.reduce((a, b) => a + b)
  
  let p = document.createElement("p");
  document.body.appendChild(p);
  p.textContent = secondarray;
})



// console.log(secondarray);
// console.log(firstarray);


