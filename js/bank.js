function getInputValue(inputId) {
    const inputField= document.getElementById(inputId);
   const inputAmmountText = inputField.value;
   const ammountValue = parseFloat(inputAmmountText);
   //clear input field
   inputField.value = '';
   return ammountValue;
}
function updateInputValue(inputField,depositeAmmount) {
     const totalElement= document.getElementById(inputField);
 const totalText = totalElement.innerText;
 const previousTotal = parseFloat(totalText)
 totalElement.innerText = previousTotal+depositeAmmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 return previousBalanceTotal;
}
function UpdateBalance( depositeAmmount,issAdd){
    const balanceTotal = document.getElementById('balance-total');
 /* const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText); */
 const previousBalanceTotal = getCurrentBalance();
 if(issAdd == true){
     balanceTotal.innerText = previousBalanceTotal+depositeAmmount;
 }
 else{
     balanceTotal.innerText = previousBalanceTotal-depositeAmmount;
 }
}


document.getElementById('deposite-button').addEventListener('click', function(){
   
   /* const depositeInput = document.getElementById('deposite-input');
   const depositeAmmountText = depositeInput.value;
   const depositeAmmount = parseFloat(depositeAmmountText) */
   const depositeAmmount = getInputValue('deposite-input');
   if(depositeAmmount > 0){
       updateInputValue('deposite-total',depositeAmmount);
       UpdateBalance( depositeAmmount, true)
   }
//    console.log(depositeAmmount);
   
//get current deposite


/*  const depositeTotal = document.getElementById('deposite-total');
 const depositeTotalText = depositeTotal.innerText;
 const previousDepositeTotal = parseFloat(depositeTotalText)
 depositeTotal.innerText = previousDepositeTotal+depositeAmmount; */
 
 
 //update balance and
 
 
 /* const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 balanceTotal.innerText = previousBalanceTotal+depositeAmmount; */
 
 
  //clear input field
 
//    depositeInput.value = '';
})


//withdraw the

document.getElementById("withdraw-button").addEventListener('click', function(){
    
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawammountText = withdrawInput.value;
    const  withdrawAmmount = parseFloat(withdrawammountText) */
      const withdrawAmmount= getInputValue('withdraw-input');
      const currentBalance = getCurrentBalance();
      
      if(withdrawAmmount > 0 && withdrawAmmount< currentBalance){
          updateInputValue('withdraw-total',withdrawAmmount);
          UpdateBalance( withdrawAmmount, false);
      }
      if(withdrawAmmount > currentBalance){
          console.log("you can't withdraw")
      }
    //get current withdraw
    
    
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalText)
    withdrawTotal.innerText =previouswithdrawTotal+ withdrawAmmount; */
//    updateInputValue('withdraw-total',withdrawAmmount)
    
    //update withdraw balance 
   /*  const withdrawbalanceTotal = document.getElementById("balance-total")
   const withdrawbalanceTotalText = withdrawbalanceTotal.innerText;
   const withdrawPreviousBalanaceText = parseFloat(withdrawbalanceTotalText);
    withdrawbalanceTotal.innerText = withdrawPreviousBalanaceText-withdrawAmmount; */
    // UpdateBalance( withdrawAmmount, false)
   
    //clear input 
    //  withdrawInput.value = '';
})