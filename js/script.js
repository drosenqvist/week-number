// Setup the neccessary variables and calculate which week it is.
function calculateWeek () {
  const date = new Date(),
        year = 2020,
        month = date.getMonth(),
        day = date.getDate(),
        daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Changes the #days in February if it is a leap year
  if (year % 4 === 0) {
    daysInMonth[1] = 29;
  }
    
  // Intializing the output with the #day of the current month
  let output = day;

  // Loops through and adds the #days of the months that have passed
  for (let i = 0; i < month; i++) {
      output += daysInMonth[i];
  }
    
  // Divides the #days to get the #week
  return(Math.floor(output / 7 + 1));
}

// Outputs the week number to the HTML h1 element
function outputWeek () {
  const outputField = document.querySelector('.weekOutput');

  outputField.textContent = calculateWeek();
}

outputWeek();