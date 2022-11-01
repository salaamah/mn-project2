//Convert a 24hr time to 12hr
function make12hr(timeString) {
    let newTimeString = addAmPm(timeString);
    let hour = parseInt(timeString.substring(0,2));
    if (hour > 12) {
        hour -= 12;
        return hourWithZero(hour).concat(newTimeString.slice(2));
    }else{
        return newTimeString
    }
};
//Add Am or Pm
function addAmPm(timeString) {
    if (parseInt(timeString.substring(0,2))<12){
        return timeString.concat(" AM");
    }else{
        return timeString.concat(" PM")
    }
}
//Adding zero before hour if its single digit
function hourWithZero(hour) {
    let hourInString = "0";
    if (hour < 10){
        hourInString = hourInString.concat(hour.toString());
    }else{
        hourInString = hour.toString();
    }
    return hourInString;
}

//export default ManageTime;
export {make12hr}