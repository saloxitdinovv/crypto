let form = document.forms[0];
let currencyInput = form.querySelector('input[name="currency"]')
let sumInput = form.querySelector('input[name="sum"]')

let postData = async (url, body) => {
    const res = await fetch("http://localhost:9000/transactions", {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res;
};

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
    let date = new Date()
    let user = {
        time: `${date.getHours()
            }:${date.getMinutes()}`,
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    };


    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });
    console.log(user);
    postData("/transictions", user);
}