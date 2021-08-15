const purchasePrice = document.querySelector('#purchase-price');
const stockQuantity = document.querySelector('#stock-quantity');
const currentPrice = document.querySelector('#current-price');
const checkBtn = document.querySelector('#check');
const outputBtn = document.querySelector('#output');
const changeColor = document.querySelector('#change-color');


function showoutput(){

    if(purchasePrice.value > currentPrice.value){

        const purchaseVal = purchasePrice.value * stockQuantity.value;
        const lossVal = purchasePrice.value - currentPrice.value;
        const lossAmt = lossVal * stockQuantity.value;
        const lossPer = (lossAmt/purchaseVal)*100;

        outputBtn.innerText = ` The loss is ${lossAmt} and the loss percentage is ${lossPer}`;
        changeColor.style.backgroundColor = "red";

    }

    else if(purchasePrice.value < currentPrice.value){

        const profitVal = currentPrice.value - purchasePrice.value;
        const profitAmt = profitVal * stockQuantity.value;
        const profitPer = (profitVal/purchasePrice.value)*100;

        outputBtn.innerText = `The profit is ${profitAmt} and profit percentage is ${profitPer}`;
        changeColor.style.backgroundColor = "green";
    }

    else{
        outputBtn.innerText = `There is no gain or loss on your stocks price`;
    }
    

}

checkBtn.addEventListener('click', showoutput);

