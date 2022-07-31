/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const employee = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}
console.log(createEmployeeRecord(["Maria", "Coitinho", "Engineer", 50]))




function createEmployeeRecords(employee) {
    const employeesObjArray = employee.map(arr => {
        return createEmployeeRecord(arr)
    })
    return employeesObjArray;
}




function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    // console.log("this: ", this)
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
return this;
}





function createTimeOutEvent(dateStamp) {
    let dateArray = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateArray[1], 10),
        date: dateArray[0]
    })
return this;
}





function hoursWorkedOnDate(date) {
    // console.log("this: ", this)
    const objTimeOut = this.timeOutEvents.find(obj => obj.date === date);
    const objTimeIn = this.timeInEvents.find(obj => obj.date === date);
    return (objTimeOut.hour - objTimeIn.hour) / 100;
}




function wagesEarnedOnDate(date) {
    // console.log('this: ', this)
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}





function findEmployeeByFirstName(srcArray, firstName) {
    console.log('this: ', this)
    // const foundEmp = srcArray.find(obj => {
    //     obj.firstName === firstName;
    // })
    // return foundEmp;
}



// function calculatePayroll(array) {


// }



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

