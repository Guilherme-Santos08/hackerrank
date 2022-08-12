function isPositive(a) {
  let message = ''

  for (let index = 0; index < a.length; index += 1) {
    try {
      if (a[index] > 0) {
        message = 'YES'
      } else if (a[index] === 0) {
        throw 'Zero Error'
      } else {
        throw 'Negative Error'
      }
    } catch (err) {
      message = err
    }
  }
  return message
}

console.log(isPositive([-2, 3, 4]))
