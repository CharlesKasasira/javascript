const date = document.getElementById('date');
const time = document.getElementById('hour');

let d = new Date();
var days = ['Sunday', 'Monday', 
            'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 
            'Saturday', 'Sunday'];
let s = d.getSeconds();
let m = d.getMinutes();
let h = d.getHours();
setInterval(() => {
    time.innerHTML = `${h}:${m}:${s}`;
    s++;
    if(s === 60){
        s = 0;
        m++;
    }
    if (m === 60){
        m = 0;
        h++;
    }
    if(h === 24){
        h = 0;
    }
}, 1000);


date.innerHTML = `${days[d.getDay()]} ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;