//Write a function called hasHighAndLow(numbers) that takes an array of numbers 
//and returns true if there is at least one number greater then 10, and there is at least one number less then 5.


// Return true if the array has at least one number > 10 and at least one number < 5.
//  Check each number: if >10 mark "high", if <5 mark "low". If both are found, return true.

function hasHighAndLow(numbers) {
    let hasHighNumber = false;
    let hasLowNumber = false;
//checked if any were bigger than 10 and if any were smaller than 5
    for (let num of numbers) {
        if (num > 10) {
            hasHighNumber = true;
        } //check if any were bigger than 10
        if (num < 5) {
            hasLowNumber = true;
        }//check if any were smaller than 5
        // Early exit if both conditions are met
        if (hasHighNumber && hasLowNumber) {
            return true;
        }
    }
// After checking all numbers, return true only if both conditions are met
    return false;
}
// Test cases
console.log(hasHighAndLow([2,8,12]));
console.log(hasHighAndLow([6,7,11]));
console.log(hasHighAndLow([1,4,9]));
console.log(hasHighAndLow([5,10,15]));

//Summary:
//I just looped through the numbers, checked if any were bigger than 10 and if any were smaller than 5. If I found both, I said true. If not, false.
