//Review Number 15 Foundation Script
//Goal: Create a function that returns the last number in an array that is greater than 10.
           
function lastBigNumber(numbers) {//function declaration
    for (let i = numbers.length - 1; i >= 0; i--) {//loop through the array backwards
        if (numbers[i] > 10) {//condition
            return numbers[i];// return statement
        }   
    }
}
console.log(lastBigNumber([3, 12, 4, 12]));//expected output: 12
console.log(lastBigNumber([4, 13, 6, 8])); //expected output: 13
console.log(lastBigNumber([11, 2, 3, 4])); //expected output: 11
console.log(lastBigNumber([1, 2, 3, 14])); //expected output: 14

//I put this function together just by thinking through the steps, 
//create a function, loop through thew array, check the numbers, and stop when one fits.
//It was really just me trying to keep the logic simple and clear,
//at first i used var but then changed it to let becuase its foundation script.