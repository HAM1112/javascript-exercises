const add = function(num1 , num2) {
	let add = num1 + num2;
  return add;
};

const subtract = function(num1 ,num2) {
	let subtract = num1 - num2;
  return subtract;
};

const sum = function(num) {
  let sum =0;
  num.forEach(num => {
      sum += num;
  });
  return sum;
};

const multiply = function(nums) {
  let multiple = 1;
  nums.forEach(nums => {
    multiple *= nums;
  })
  return multiple;
};

const power = function(num1 , num2) {
	let power = 1;
    for(i = 0 ; i < num2 ; i++){
        power *= num1; 
    }
  return power;
};

const factorial = function(num) {
	let factorial = 1 ;
    for( i = 1; i <= num ; i++){
        factorial *= i;
    }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
