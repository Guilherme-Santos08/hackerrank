function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = /\b([aeiou])[a-z]+\1\b/i

  /*
   * Do not remove the return statement
   */
  return re
}

//https://stackoverflow.com/questions/35754698/matching-words-starting-and-ending-with-same-vowel-letter
