const ids = [1, 2, 3, 6, 9, 8, 7, 4] // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4] // rotating in clockwise order
const rotate = document.getElementById('btn5')

rotate.addEventListener('click', () => {
  nums.unshift(nums.pop())

  for (let index = 0; index <= 7; index += 1) {
    console.log(nums[index])
    document.getElementById(`btn${ids[index]}`).innerHTML = nums[index]
  }
})
