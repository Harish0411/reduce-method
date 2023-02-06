 
const numbers = [1,2,3,4,5];

let value= numbers.reduce(function(v1, v2, v3){
     
	 return v1*v2
	 
	  
	  })
	  let result=value/3
	  console.log(result);
	 
const array = [15, 16, 17, 18, 19];

let reducer = array.reduce(function(accumulator, currentValue, index) {
  const result = accumulator + currentValue;
  console.log(
  `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${result}`,);
  return result;
})

console.log(reducer);




