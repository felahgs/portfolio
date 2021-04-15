import moment from "moment";

export function calculateAge(birthDateString) {
  debugger;
  var now = moment();
  var birthDate = moment(birthDateString, "DD/MM/YYYY");
  var yearDiff = moment.duration(now - birthDate).as("years");
  return Math.floor(yearDiff);
}

export function hello() {
  return "Hello World";
}
