//JS Review 
// This function takes in three numbers and returns the largest onefunction largestOf3(a, b, c) {
  // Start by assuming 'a' is the largest
  let largest = a;

  // Compare 'b' with the current largest
  if (b > largest) {
    largest = b;
  }

  // Compare 'c' with the current largest
  if (c > largest) {
    largest = c;
  }

  // Return the final largest value
  return largest;
}

//In this version, I used a variable to keep track of the
//largest number and updated it step by step.
//This shows another way to solve the problem without chaining multiple conditions,
//and it’s easier to extend if we had more numbers.