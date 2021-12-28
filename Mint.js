var counterVal = 0;

function Mint() {
    updateDisplay(++counterVal);
    if (counterVal > 5) {
        resetCounter();
        
    }
}



function updateDisplay(val) {
    document.getElementById("Counter-Label").innerHTML = val;
}   



 function resetCounter(){
     counterVal = 0;
     updateDisplay(counterVal);
     alert("You cannot mint more than 5 NFT:s")
}

