let billAmount= document.querySelector("#bill");
let cashAmount=document.querySelector("#cash");
let errorMessage=document.querySelector("#error");
let checkButton=document.querySelector("#check");
let noOfNotes=document.querySelectorAll(".numberOfNotes")
const currency=[2000, 500, 100, 20, 10, 5, 1];

function showError(x){
    errorMessage.style.display="block"
    errorMessage.innerText=x;
    return 0;
}

function hideError(){
    errorMessage.style.display="none";
}

function calculateReturn(toBeReturned){ // dry run. let to be returned be 250
    for (let i=0; i<currency.length; i++){
        let numberOfNotes=Math.trunc(toBeReturned/currency[i]);//250/2000=0=> 250/500=0=> 250/100=2=> 50/20=2=> 10/10=1
        toBeReturned=toBeReturned%currency[i]; // 250%2000=250=> 250%500=250=> 250%100=50=> 50%20=10=> 10%10=0
        noOfNotes[i].innerText=numberOfNotes; // 2 100 notes, 2 20   and 1 10


    }

}

checkButton.addEventListener("click", function(){
    hideError()
    if (Number(billAmount.value)==Number(cashAmount.value)){
        showError("Cash given is equal to bill Amount. No change to be given to customer")

    }

    if(Number(billAmount.value)>0){

        
        if(Number(cashAmount.value)>=Number(billAmount.value)){
            let toBeReturned= Number(cashAmount.value-billAmount.value);
            calculateReturn(toBeReturned)
        }
        else{
            showError("Cash must be equal to or more than the bill amount")
        }

    }
    else{
        showError("The bill amount should atleast be zero")
    }
})