/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    s = s.split('').reverse('').join('')
  } catch {
    console.log('s.split is not a function')
  }
  console.log(s)
}

reverseString(Number(1234))
reverseString('1234')
