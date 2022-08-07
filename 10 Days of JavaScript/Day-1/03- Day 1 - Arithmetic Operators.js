/**
 *   Link: https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem?isFullScreen=true
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/

function getArea(length, width) {
  let area
  // Write your code here

  area = width * length

  return area
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter
  // Write your code here

  perimeter = width + length + width + length

  return perimeter
}
