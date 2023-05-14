function updateDateandTime(){
    const now = new  Date();
    const dateString = now.toLocaleDateString(undefined, {weekday:"long", year:"numeric", month:"long", day:"numeric"});
    const timeString = now.toLocaleTimeString();
    document.getElementById('date')[0].innerText = dateString;
    document.getElementById('time')[0].innerText = timeString;
}

setInterval(updateDateandTime, 1000);
updateDateandTime();     