const picked = document.getElementById("picked");
const month = document.getElementById("month");
const calendar = document.getElementById("calendar");

const DATE = new Date();
let thisMonth = DATE.getMonth();
let year = DATE.getFullYear();

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

picked.innerHTML = `${DATE.getDate()}/${thisMonth + 1}/${year}`;

const createCalendar = () => {
  month.innerHTML = `${MONTHS[thisMonth]}, ${year}`;

  const dayOne = new Date(year, thisMonth).getDay();
  const monthDays = 32 - new Date(year, thisMonth, 32).getDate();

  date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      let column = document.createElement("td");
      if (date > monthDays) break;
      else if (i === 0 && j < dayOne) {
        let columnText = document.createTextNode("");
        column.appendChild(columnText);
        row.appendChild(column);
      } else {
        let columnText = document.createTextNode(date);
        column.appendChild(columnText);

        if(date === DATE.getDate() && thisMonth === DATE.getMonth() && year === DATE.getFullYear()){
          column.classList.add("today")
        }

        column.onclick = () => {
          picked.innerHTML = `${column.textContent}/${thisMonth + 1}/${year}`;
        };

        row.appendChild(column);

        date++;
      }
    }
    calendar.appendChild(row);
  }
};

createCalendar();

const nextMonth = () => {
  thisMonth = thisMonth + 1;
  calendar.innerHTML = ""

  if(thisMonth > 11){
    year = year + 1
    thisMonth = 0
  }
  createCalendar()
  return thisMonth
};

const prevMonth = () => {
  thisMonth = thisMonth - 1;
  calendar.innerHTML = ""

  if(thisMonth < 0){
    year = year - 1
    thisMonth = 11
  }
  createCalendar()
  return thisMonth
};
