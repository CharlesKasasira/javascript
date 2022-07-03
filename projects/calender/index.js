const time = document.getElementById('hour');
const selectMonth = document.getElementById("month");
const  monthAndYear = document.getElementById("monthAndYear");
const  selectYear = document.getElementById("year");

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

const MONTHS = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthAndYear.innerHTML = `${MONTHS[month]}, ${today.getFullYear()}`;

setInterval(() => {
    let today = new Date();
    time.innerHTML = today.toLocaleTimeString();
}, 1000);




// trying to figure everything out here don't mind this
// let currentDate = document.getElementById('1');
// currentDate.innerHTML = today.getDate();

let dayOne = (new Date(year, month)).getDay();
let daysInMonth = 32 - new Date(year, month, 32).getDate();


// creating rows
let calendar = document.getElementById("calendar"); // body of the calendar

date = 1;
for (let i = 0; i < 6; i++){// rows
    let row = document.createElement("tr");
    for(let j = 0; j < 7; j++){ // columns
        let column = document.createElement("td");
        if(date > daysInMonth){// making sure that the date is not more than the days in the month. 
            break;
        } 
        else if (i === 0 && j < dayOne ){
            let columnText = document.createTextNode("");//empty date if it is before the first day of the month.e.g in july 2021, 1st was a thurday hence dayOne = 4;
            column.appendChild(columnText);
            row.appendChild(column);
        }
        else {
            columnText = document.createTextNode(date);
            column.appendChild(columnText);
            if(date === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
                column.style.color = "crimson";
            }
            row.appendChild(column);
            date++;
        }
    }
    calendar.appendChild(row);
}


/*
 // ASSUMPTIONS
 1. okay i can get today's date, how do if i could get the first date of every month
    -the first day depends on the year and month
 2. I know I have to loop through something but how will I do that.

*/
