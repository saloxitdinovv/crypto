import { postData } from "/modules/http.js"

let transactions = document.querySelector(".transactions");
let form = document.forms[0];
let error

form.onsubmit = (e) => {
    e.preventDefault();
    error = false;
    if (error) {
        console.log("error");
    } else {
        submit();
    }
};


function submit() {
    let user = {}
    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });
    console.log(user);
    postData("/transactions", user);

    fetch("http://localhost:9000/transactions")
        .then((res) => res.json())
        .then((res) => transictions(res, transactions));
        
    }

function transictions(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let mainDiv = document.createElement('div')
        let time = document.createElement('h4')
        let date = document.createElement('h2')
        let bitcoin = document.createElement('img')
        let transactionCode = document.createElement('p')
        let total = document.createElement('h1')
        let status = document.createElement('button')


        mainDiv.classList.add('transDiv')
        time.classList.add('time')
        time.innerHTML = 'AM 01:16'
        date.classList.add('date')
        date.innerHTML = '24 dec 2018'
        bitcoin.src = '/public/bitcoin.svg'
        transactionCode.innerHTML = '74EKRJMXkhKDR5dj34578fgirwE22sfg'
        total.innerHTML = item.sum
        status.innerHTML = 'Completed'

        place.append(mainDiv)
        mainDiv.append(time, date, bitcoin, transactionCode, total, status)
    }
}

fetch("http://localhost:9000/transactions")
    .then((res) => res.json())
    .then((res) => transictions(res, transactions));