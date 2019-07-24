// Setup the neccessary variables and calculate which week it is.
function calculateWeek () {
    const date = new Date(),
          month = date.getMonth(),
          day = date.getDate()

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let output = day

    for (i = 0; i < month; i++) {
        output += daysInMonth[i]
    }
    
    return(Math.floor(output / 7 + 1))
}


// Outputs the week number to the HTML h1 element
function outputWeek () {
    const outputField = document.querySelector('#weekOutput')

    outputField.textContent = calculateWeek()
}

outputWeek()