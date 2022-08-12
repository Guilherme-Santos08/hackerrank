function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const consonant = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  for (let index = 0; index < s.length; index += 1) {
    if (vowels.includes(s[index])) {
      console.log(s[index])
    }
  }

  for (let index = 0; index < s.length; index += 1) {
    if (consonant.includes(s[index])) {
      console.log(s[index])
    }
  }
}

vowelsAndConsonants('javascriptloops')
