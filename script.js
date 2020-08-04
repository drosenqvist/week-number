// Setup the neccessary variables and calculate which week it is.
const calculateWeek = () => {
  const date = new Date(),
        year = date.getFullYear(),
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
    
  const outputField = document.querySelector('.weekOutput');
        outputField.textContent = (Math.floor(output / 7 + 1))
}

calculateWeek();