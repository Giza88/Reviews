// Function 1: Determine if you can watch TV

function canWatchTV(isHoliday, isWeekday) {
    return isHoliday || !isWeekday;
}

// Example usage:
console.log(canWatchTV(true, true));   // true (holiday)
console.log(canWatchTV(false, false)); // true (weekend)
console.log(canWatchTV(false, true));  // false (weekday, not holiday)   

//My solution defines a simple function that checks if it’s a holiday or weekday and returns true in those cases, otherwise false.


//Function 2: doTheyAgree

function doTheyAgree(partner1Decision, partner2Decision) {
    return partner1Decision === partner2Decision;
}

// Example usage:
console.log(doTheyAgree(true, true)); // Output: true
console.log(doTheyAgree(false, false)); // Output: true
console.log(doTheyAgree(true, false)); // Output: false     
console.log(doTheyAgree(false, true)); // Output: false 

//My solution defines a function that compares the two partners’ decisions and returns true if they match, otherwise false.


//Function 3: isOpen

function isOpen(weekday, month) {
 return weekday !== "monday" && month !== "july";
 }
// Example usage:
console.log(isOpen("tuesday", "june")); // true (open)
console.log(isOpen("monday", "june")); // false (closed on Monday)              
console.log(isOpen("wednesday", "july")); // false (closed in July)
console.log(isOpen("sunday", "august")); // true (open)


//My solution defines a function that checks if the given day is Monday or if the month is July, returning false in those cases, otherwise true.