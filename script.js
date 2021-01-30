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





// Step: 02
// (FirstClass + Economy) InputField and Increase + Decrease Button function (Step: 02)
//=========================================================================================







