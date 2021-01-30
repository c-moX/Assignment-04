
var bookingButton = document.getElementById('booking-btn').addEventListener('click', function(){
    var topHandler = document.getElementById('navbar');
    topHandler.style.display = 'none';
    var firstHandler = document.getElementById('first-handler');
    firstHandler.style.display = 'none';
    var secondHandler = document.getElementById('scond-handler');
    secondHandler.style.display = 'block';
})

/*
// Step: 01
//(FirstClass + Economy) InputField and Increase + Decrease Button function (Step: 02)
// =====================================================================================
// Step: 01
// (FirstClass + Economy) InputField and Increase + Decrease Button function (Step: 01)
//=========================================================================================
//IncreaseButton and InputField (01)
document.getElementById('firstClass-increaseBtn').addEventListener("click", function(){
    const firstClassInput = document.getElementById('firstClass-input');
    const firstClassCount = parseInt(firstClassInput.value);
    const firstClassNewCount = firstClassCount + 1;
    firstClassInput.value = firstClassNewCount;

    const firstClassTotal = firstClassNewCount * 150;
    document.getElementById('firstClass-total').innerText = '(' + '$' + firstClassTotal + ')';
})

//DecreaseButton and InputField (02)
document.getElementById("firstClass-decreaseBtn").addEventListener("click", function(){
    const firstClassInput = document.getElementById('firstClass-input');
    const firstClassCount = parseInt(firstClassInput.value);
    const firstClassNewCount = firstClassCount - 1;
    firstClassInput.value = firstClassNewCount;

    const firstClassTotal = firstClassNewCount * 150;
    document.getElementById('firstClass-total').innerText = '(' + '$' + firstClassTotal + ')';
})

// Economy InputField and Increase + Decrease Button function
//DecreaseButton and InputField (03)
document.getElementById('economy-decreaseBtn-one').addEventListener("click", function(){
    const economyInput = document.getElementById('economy-input');
    const economyCount = parseInt(economyInput.value);
    const economyNewCount = economyCount + 1;
    economyInput.value = economyNewCount;

    const economyTotal = economyNewCount * 100;
    document.getElementById('economy-total').innerText = '(' + '$' + economyTotal + ')';
})

//DecreaseButton and InputField (04)
document.getElementById('economy-decreaseBtn-two').addEventListener("click", function(){
    const economyInput = document.getElementById('economy-input');
    const economyCount = parseInt(economyInput.value);
    const economyNewCount = economyCount - 1;
    economyInput.value = economyNewCount;

    const economyTotal = economyNewCount * 100;
    document.getElementById('economy-total').innerText = '(' + '$' + economyTotal + ')';
})
*/


// Step: 02
//(FirstClass + Economy) InputField and Increase + Decrease Button function (Step: 02)
// =====================================================================================
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    // const ticketNewCount = ticketCount (+ || -) 1;
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    // const ticketTotal = ticketNewCount * ticket;
    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + "-total").innerHTML = '(' + '$' + ticketTotal + ')';

    calculateTotal();
}

//=================================================================================

//firstClass and economy total price fixed (Step: 01)
//-------------------------------------------------------
function calculateTotal() {
    const firstClassInput = document.getElementById('firstClass-count');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;
}

//firstClass and economy total price fixed (Step: 02)
//-------------------------------------------------------
function calculateTotal() {
    //ticket Total Input Value function
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    //Subtotal Value
    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    //vat Value
    const vat = Math.round(totalPrice * 10 / 100); // const vat = (totalPrice * 10 /100).toFixed(0);
    document.getElementById('vat-amount').innerText = '$' + vat;

    //Total Value
    const fixedTotal = totalPrice + vat;
    document.getElementById('fixed-total').innerText = '$' + fixedTotal;
}

//ticket Total Input Value function
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


