const getPastMonday = aDate => {
    const d = new Date(aDate)
    const today = d.getDay(); //gets the current day of the week
    const dayDifference = d.getDate() - today + (today === 0 ? -6:1)
        // console.log(dayDifference) //returns the past Monday day of the month
    const thisPastMonday = new Date(d.setDate(dayDifference))
        // console.log(thisPastMonday)
    console.log(thisPastMonday.getMonth()+1, thisPastMonday.getDate(), thisPastMonday.getFullYear())
}

const today = new Date('2018-06-15T20:23:49.074Z')
getPastMonday(today)