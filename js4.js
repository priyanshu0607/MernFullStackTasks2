function month_name(number){
    if(number===1){return "Jan"}if(number===2){return "Feb"}if(number===3){return "Mar"}
    if(number===4){return "Apr"}if(number===5){return "May"}if(number===6){return "Jun"}
    if(number===7){return "Jul"}if(number===8){return "Aug"}if(number===9){return "Sept"}
    if(number===10){return "Oct"}if(number===11){return "Nov"}if(number===12){return "Dec"}
}
function date() {
    let today = new Date();
    document.getElementById("displayDate").innerHTML = today.getDate() + '/' + month_name((today.getMonth() + 1)) + '/' + today.getFullYear();
}
function time() {
    let today = new Date();
    document.getElementById("displayTime").innerHTML = today.toTimeString();
}