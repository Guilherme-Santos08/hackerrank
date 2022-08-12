function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0]
  let secondLargest = null
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[index] !== largest) {
      if (nums[index] > largest) {
        // Guarda o ultimo valor de "largest" antes de mudar
        secondLargest = largest
        largest = nums[index]
      } else if (nums[index] > secondLargest) {
        secondLargest = nums[index]
      }
    }
  }
  return secondLargest
}

console.log(getSecondLargest([2, 3, 6, 6, 5]))
