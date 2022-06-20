const total = document.getElementById('total');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const btn = document.querySelector('.btn');
let amount = document.querySelector('#amount').value;
const date = document.querySelector('#date');


income.innerHTML = 0;
currentExpense = 0;
expense.innerHTML = currentExpense;

today = new Date();
date.innerHTML = today.toLocaleDateString();


total.innerText = `${parseInt(income.innerHTML) + parseInt(expense.innerHTML)}`;

let newExpense;

let changed = () => {
    newExpense = document.querySelector('#amount').value
    return newExpense;
}



let add = () => {
    if (document.querySelector('#amount').value < 0){
        return expense.innerHTML = `${parseInt(newExpense) + parseInt(currentExpense)}`, total.innerHTML = `ugx ${parseInt(income.innerHTML) + parseInt(expense.innerHTML)}`;
    }
    else{
        return income.innerHTML = `${parseInt(newExpense) + parseInt(currentExpense)}`, total.innerHTML = `ugx ${parseInt(income.innerHTML) + parseInt(expense.innerHTML)}`;
    }
   
}


