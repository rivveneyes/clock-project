//=======global var======//
const display= document.getElementById('time');
const dateDisplay= document.getElementById('date');
var toD='';
const days = ["Monday","Tuseday","Wensday","Thursday","Friday","Saturday","Sunday"];
const months =['January',"February","March",'April',"May","June","July","August","September","October","November","December"];
//checks if number needs leeing zero
function zeroplacer(par){
  if(par<10){
    return "0"+par;
  }
  else{
    return par;
  }
}
// sets global var ('toD' =to am/pm), along with change time to 1-12hr dispaly;
function ampm(hour){
if(hour<13){
  toD="AM";
  return hour
}
else{
  toD='PM';
  return hour=hour-12;  
}
}

// adds ending suffix to the date
function placer(num){
  if(num==1 || num ==21 || num ==31){
    return num+"st";
  }
  else if(num==2 || num ==22){
    return num+"nd";
  }
  else if(num==3 || num ==23){
    return num+"rd";
}
  else{return num+'th'}
}
// creates date with all needed time stamp plus displaying to document
function catchtime(){
var theDate = new Date();
var hour = theDate.getHours();
var newhour=zeroplacer(ampm(hour));
var min= zeroplacer(theDate.getMinutes());
var sec = zeroplacer(theDate.getSeconds());
var day= days[theDate.getDay()-1];
var month = months[theDate.getMonth()];
var date= placer(theDate.getDate());  
var year = theDate.getFullYear();
display.innerHTML=`${newhour}:${min}:${sec} ${toD}`;  
dateDisplay.innerHTML=`${day}, ${month} ${date} ${year}`;
console.log('TICK')
}

setInterval(catchtime, 1000);