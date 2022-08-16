// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  // Write your code here
  let date = new Date(dateString.replace(/\s/g, ''))

  return dayName[date.getDay()]
}

console.log(getDayName('10/11/2009'))
