const date = document.getElementById('date');
const time = document.getElementById('hour');

let watch = () => {
    const DATE = new Date();
    time.innerHTML = DATE.toLocaleTimeString();

    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    date.innerHTML = `${days[DATE.getDay()]} ${DATE.getDate()}/${DATE.getMonth()}/${DATE.getFullYear()}`;
};
const INTERVAL_ID = setInterval(watch, 1000);



