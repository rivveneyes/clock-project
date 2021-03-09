
const display= document.getElementById('time');
const dateDisplay= document.getElementById('date');

function displayTime(){
  const theTime = new Date();
  const hour = returnAmPm( theTime.getHours());
  const minute= addLeadingZero(theTime.getMinutes());
  const second = addLeadingZero(theTime.getSeconds());

  display.textContent=`${hour}:${minute}:${second} ${amPm} `;  
  
  }

function addLeadingZero(number){
return number < 10 ? "0" + number :number;
}

function returnAmPm(hour){
const isAm = hour <12 || hour === 0;
 amPm = isAm ? "AM" : "PM";
 hour= hour>= 13 ? hour-12 : hour;
 hour = hour ===0 ? hour +12 :hour;
return hour;
}


function converToOrdinal(number){
  if(number < 10 || number > 20){
  switch (number%10){
    case 1:
      return number +"st";
    case 2:
      return number+ "nd";
    case 3:
      return number + "rd";
  }
}
  return number + "th";
}


function displayDate(){
const theDate = new Date();
const day= days[theDate.getDay()];
const month = months[theDate.getMonth()];
const date= converToOrdinal(theDate.getDate());  
const year = theDate.getFullYear();
dateDisplay.textContent=`${day}, ${month} ${date} ${year}`;
}

const days = [
  "Sunday",
  "Monday",
  "Tuseday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday"];
  const months =[
    'January',
  "February",
  "March",
  'April',
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"];

displayTime()
displayDate()
setInterval(displayTime, 1000);