/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions

  const formula = Math.sqrt(perimeter ** 2 - 16 * area)
  const s1 = (perimeter + formula) / 4
  const s2 = (perimeter - formula) / 4

  const arr = [s1, s2]
  const arrSort = arr.sort((a, b) => a - b)

  return arrSort
}
