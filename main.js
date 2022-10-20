
var moment = require("moment")
var myDate = new Date()
var myFormattedDate = moment(myDate).format()
console.log(myFormattedDate)

document.getElementById("datee").innerHTML = myFormattedDate;
