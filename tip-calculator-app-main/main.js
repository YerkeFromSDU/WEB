const bill = document.getElementById('bill')
const people = document.getElementById('number')
const tipCustom = document.getElementById('custom')
const tipAmt = document.getElementById('tipTotal')
const billAmt = document.getElementById('billTotal')

function tip(n){
    const percent = parseFloat(((n * bill.value) / people.value).toFixed(2))
    const total = parseFloat(((bill.value / people.value) + percent).toFixed(2))

    const custom = parseFloat((((tipCustom.value/100) * bill.value)/people.value).toFixed(2))
    const customTotal = parseFloat(((bill.value/people.value) + custom).toFixed(2))

    if (bill.value && people.value && tipCustom.value=="") {
        tipAmt.innerHTML = "$" + percent;
        billAmt.innerHTML = "$" + total;

    } else if(bill.value && people.value && tipCustom.value) {
        tipAmt.innerHTML = "$" + custom;
        billAmt.innerHTML = "$" + customTotal;
    } else {
        tipAmt.innerHTML = "none";
        billAmt.innerHTML = "none";
    }
}

tipCustom.addEventListener("keypress", function(event) {
    const custom = parseFloat((((tipCustom.value/100) * bill.value)/people.value).toFixed(2))
    const customTotal = parseFloat(((bill.value/people.value) + custom).toFixed(2))

    if (event.key === "Enter") {
        event.preventDefault();
        tipAmt.innerHTML = "$" + custom;
        billAmt.innerHTML = "$" + customTotal;
    }
});

function reset() {
    bill.value = "";
    people.value = "";
    tipAmt.innerText = "$0.00";
    billAmt.innerText = "$0.00";
    tipCustom.value = "";
}



