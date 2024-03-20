function updateclock(){
    const now = new Date();
    let hour = now.getHours();
    const mer = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12
    hour = hour.toString().padStart(2,0)
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hour}:${min}:${sec} ${mer}`
    document.getElementById("clock").textContent = timestring
}

updateclock()
setInterval(updateclock,1000)