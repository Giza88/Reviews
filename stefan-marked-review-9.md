```js
// This function takes in three numbers and returns the largest one
function largestOf3(a, b, c) {
  // First, check if 'a' is greater than both 'b' and 'c'
  if (a >= b && a >= c) {
    return a;
  }
  // If not, check if 'b' is greater than both 'a' and 'c'
  else if (b >= a && b >= c) {
    return b;
  }
  // If neither 'a' nor 'b' is the largest, then 'c' must be
  else {
    return c;
  }
}
```

I started by comparing the first number (a) to the other two. If (a) is bigger than both, it’s the largest. If not, I checked if (b) is bigger than the other two. If that’s false too, then (c) has to be the biggest.

This way, the function checks each possibility clearly and returns the right result every time. It’s a bit longer writing this way and not using Math.max(), but I see how it helps me or the class understand how comparisons work under the hood of Js.

## Feedback

Excellent solution! There's nothing I would change here. Your comments are perfectly clear and the else condition is a sensible design decision.

As a challenge, see if you can try and solve this in a different way. Looking forward to your next submission.

Grade: 100%
