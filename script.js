//number buttons query selectors:
const num1btn = document.querySelector('.num1');
const num2btn = document.querySelector('.num2');
const num3btn = document.querySelector('.num3');
const num4btn = document.querySelector('.num4');
const num5btn = document.querySelector('.num5');
const num6btn = document.querySelector('.num6');
const num7btn = document.querySelector('.num7');
const num8btn = document.querySelector('.num8');
const num9btn = document.querySelector('.num9');
//operation buttons query selectors:
const plusbtn = document.querySelector('.plus');
const minusbtn = document.querySelector('.minus');
const multiplybtn = document.querySelector('.multiply');
const dividebtn = document.querySelector('.divide');
const equals = document.querySelector('.equalbtn');
const dot = document.querySelector('.dotbtn');
//calculator screens query selectors:
const mainTextField=document.querySelector('.maintext');
const subTextField=document.querySelector('.subtext');

//initializations:
mainTextField.innerHTML="";
subTextField.innerHTML="";

//global variables:
let operator;
let number1,number2,result;

//flags:
let additionFlag,subtractionFlag,multiplicationFlag,divisionFlag;
let equalBtnisDone=false;

//button event listeners:
num1btn.addEventListener('click',() => {
    mainTextField.innerHTML+="1";
})
num2btn.addEventListener('click',() => {
    mainTextField.innerHTML+="2";
    
})
num3btn.addEventListener('click',() => {
    mainTextField.innerHTML+="3";
   
})
num4btn.addEventListener('click',() => {
    mainTextField.innerHTML+="4";
    
})
num5btn.addEventListener('click',() => {
    mainTextField.innerHTML+="5";
   
})
num6btn.addEventListener('click',() => {
    mainTextField.innerHTML+="6";
    
})
num7btn.addEventListener('click',() => {
    mainTextField.innerHTML+="7";
   
})
num8btn.addEventListener('click',() => {
    mainTextField.innerHTML+="8";
   
})
num9btn.addEventListener('click',() => {
    mainTextField.innerHTML+="9";
})

plusbtn.addEventListener('click',() => {
    operator="+"
    number1=mainTextField.innerHTML;
    subTextField.innerHTML=`${number1} ${operator} `
    equalBtnisDone=false;
    
    if((subTextField.innerHTML!=="") && (mainTextField.innerHTML!=="")){
        addnumbers();
    }
    else{
        mainTextField.innerHTML="";
    }
    

})
minusbtn.addEventListener('click',() => {
    operator="-"
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false
    mainTextField.innerHTML=""
})
dividebtn.addEventListener('click',() => {
    operator="/"
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false;
    mainTextField.innerHTML=""
})
multiplybtn.addEventListener('click',() => {
    operator="x"
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false;
    mainTextField.innerHTML=""
})

equals.addEventListener('click',()=> {
    if(!equalBtnisDone){
        if(mainTextField.innerHTML.length>0){
            switch(operator){
                case '+':
                    addnumbers();
                    break;
                case '-':
                    subtractnumbers();
                    break;
                case 'x':
                    multiplynumbers();
                    break;
                case '/':
                    dividenumbers();
                    break;
                default:
                    alert("Unexpected error.")
                    break;
            }
        }
        number1=null;number2=null;
    }
        
    
})

function addnumbers(){
    number1=parseInt(subTextField.innerHTML.split(operator)[0]);
    number2=parseInt(mainTextField.innerHTML);
    let sum=number1+number2;
    subTextField.innerHTML=`${number1} + ${number2} = `
    mainTextField.innerHTML=sum;
    equalBtnisDone=true;
}
function multiplynumbers(){
    number1=parseInt(subTextField.innerHTML.split(operator)[0]);
    number2=parseInt(mainTextField.innerHTML);
    let prod=number1*number2;
    subTextField.innerHTML=`${number1} X ${number2} = `
    mainTextField.innerHTML=prod;
    equalBtnisDone=true;
}
function subtractnumbers(){
    number1=parseInt(subTextField.innerHTML.split(operator)[0]);
    number2=parseInt(mainTextField.innerHTML);
    let diff=number1-number2;
    subTextField.innerHTML=`${number1} - ${number2} = `
    mainTextField.innerHTML=diff;
    equalBtnisDone=true;
}
function dividenumbers(){
    number1=parseInt(subTextField.innerHTML.split(operator)[0]);
    number2=parseInt(mainTextField.innerHTML);
    let quo=number1-number2;
    subTextField.innerHTML=`${number1} / ${number2} = `
    mainTextField.innerHTML=quo;
    equalBtnisDone=true;
}
