/*
  Link: https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true
  * Create the function factorial here
 */

function factorial(integer) {
  let sum = integer
  for (let index = integer - 1; index > 0; --index) {
    sum *= index
  }
  console.log(sum)
}

console.log(factorial(5))
