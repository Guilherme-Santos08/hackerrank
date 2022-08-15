/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  let arr = []

  nums.forEach(num => {
    if (num % 2 === 0) {
      arr.push(num * 2)
    } else {
      arr.push(num * 3)
    }
  })

  return arr
}

console.log(modifyArray([1, 2, 3, 4, 5]))
