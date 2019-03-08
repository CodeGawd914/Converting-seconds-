/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
  // first we find how many seconds in an hr and divide it to get the hours
  let hours = Math.floor(seconds/3600)
  // then find how many seconds remain after it is divided and what that equals
  let hoursLeft = seconds % 3600
  let mins = parseInt(hoursLeft/60)
  // then do the same thing for seconds
  let minsLeft = hoursLeft % 60
  let secs = minsLeft
  // in oreder to formatt to correct display loop threw if the number is less that 2 digits add a zero if not return the number 

  let array = [hours,mins,secs]

  let formatted = array.map(function(value){
    if (value.toString().length < 2){
      return "0" + value.toString()
    } else {
      return value
    }
  })

  return `${formatted[0]}:${formatted[1]}:${formatted[2]}`
}
