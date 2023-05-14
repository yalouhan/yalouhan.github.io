document.addEventListener('DOMContentLoaded', function(){
    function updateDateandTime(){
        const now = new  Date();
        const dateSetting = { 
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric", 
            timeZone: "Europe/London" 
        };
        const timeSetting = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "Europe/London"
        };
        const dateString = now.toLocaleDateString(undefined, dateSetting);
        const timeString = now.toLocaleTimeString(undefined, timeSetting);
        document.getElementById('date').innerText = dateString;
        document.getElementById('time').innerText = timeString;
    }
    setInterval(updateDateandTime, 1000);
    updateDateandTime();     
});