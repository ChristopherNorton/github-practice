// Update the following function to take an argument and output 'Even' if the argument is an even number or 'Odd' if the number is an odd number.

function trueNumber (number) {
  if(isNaN(number) === false){
  return oddOrEven(number)
} else {
  console.log('Invalid input')
  }
}

function oddOrEven(number){
  if(number === 0) {
    console.log('Zero');
  }else if (number % 2 === 0){
    console.log('Even number')
  } else if (number % 2 !=0) {
    console.log('Odd number');
  } else {
    console.log('Invalid input')
  }
}

trueNumber(10)
trueNumber(0)
trueNumber('fi')
trueNumber(-2384)
