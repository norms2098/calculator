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
const num0btn = document.querySelector('.num0');
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
//eraser buttons query selectors:
const clearBtn=document.querySelector('.clear-btn');
const deleteBtn=document.querySelector('.delete-btn');
//initializations:
mainTextField.innerHTML="";
subTextField.innerHTML="";

//global variables:
let operator;
let number1,number2;

//flags:
let plusBtnPressed=false,subBtnPressed=false,multBrnPressed=false,diviBtnPressed=false,dotBtnPressed=false;
let equalBtnisDone=false;

//button event listeners:
num1btn.addEventListener('click',() => {
    mainTextField.innerHTML+="1";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="1";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="1";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="1";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="1";
        diviBtnPressed=false;
    }
})
num2btn.addEventListener('click',() => {
    mainTextField.innerHTML+="2";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="2";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="2";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="2";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="2";
        diviBtnPressed=false;
    }
})
num3btn.addEventListener('click',() => {
    mainTextField.innerHTML+="3";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="3";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="3";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="3";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="3";
        diviBtnPressed=false;
    }
   
})
num4btn.addEventListener('click',() => {
    mainTextField.innerHTML+="4";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="4";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="4";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="4";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="4";
        diviBtnPressed=false;
    }
    
})
num5btn.addEventListener('click',() => {
    mainTextField.innerHTML+="5";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="5";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="5";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="5";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="5";
        diviBtnPressed=false;
    }
   
})
num6btn.addEventListener('click',() => {
    mainTextField.innerHTML+="6";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="6";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="6";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="6";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="6";
        diviBtnPressed=false;
    }
    
})
num7btn.addEventListener('click',() => {
    mainTextField.innerHTML+="7";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="7";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="7";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="7";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="7";
        diviBtnPressed=false;
    }
   
})
num8btn.addEventListener('click',() => {
    mainTextField.innerHTML+="8";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="8";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="8";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="8";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="8";
        diviBtnPressed=false;
    }
   
})
num9btn.addEventListener('click',() => {
    mainTextField.innerHTML+="9";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="9";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="9";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="9";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="9";
        diviBtnPressed=false;
    }
})
num0btn.addEventListener('click',() => {
    mainTextField.innerHTML+="0";
    if(plusBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="0";
        plusBtnPressed=false;
    }
    if(subBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="0";
        subBtnPressed=false;
    }
    if(multBrnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="0";
        multBrnPressed=false;
    }
    if(diviBtnPressed){
        mainTextField.innerHTML=""
        mainTextField.innerHTML+="0";
        diviBtnPressed=false;
    }
})
dot.addEventListener('click', () => {
    if(!dotBtnPressed){
        mainTextField.innerHTML += "."
        dotBtnPressed=true;
    }
    
})
clearBtn.addEventListener('click',() => {
    mainTextField.innerHTML="";
    subTextField.innerHTML="";
    number1=null,number2=null;
})
deleteBtn.addEventListener('click',()=>{
    mainTextField.innerHTML=mainTextField.innerHTML.substring(0,mainTextField.innerHTML.length-1);
})

plusbtn.addEventListener('click',() => {
    operator="+"
    if((mainTextField.innerHTML!=='')&& (subTextField.innerHTML!=='')){
        let findOperator=subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,'');
        console.log(subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,''))
        if(findOperator==="+"){addnumbers()}
        if(findOperator==="*"){multiplynumbers()}
        if(findOperator==="/"){dividenumbers()}
        if(findOperator==="-"){subtractnumbers()}
    }
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false;
    plusBtnPressed=true;
    dotBtnPressed=false;
})
minusbtn.addEventListener('click',() => {
    operator="-"
    if((mainTextField.innerHTML!=='')&& (subTextField.innerHTML!=='')){
        let findOperator=subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,'');
        console.log(subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,''));
        if(findOperator==="+"){addnumbers()}
        if(findOperator==="*"){multiplynumbers()}
        if(findOperator==="/"){dividenumbers()}
        if(findOperator==="-"){subtractnumbers()}
    }
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false
    subBtnPressed=true;
    dotBtnPressed=false;
})
dividebtn.addEventListener('click',() => {
    operator="/"
    if((mainTextField.innerHTML!=='')&& (subTextField.innerHTML!=='')){
        let findOperator=subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,'');
        console.log(subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,''))
        if(findOperator==="+"){addnumbers()}
        if(findOperator==="*"){multiplynumbers()}
        if(findOperator==="/"){dividenumbers()}
        if(findOperator==="-"){subtractnumbers()}
    }
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false;
    diviBtnPressed=true;
    dotBtnPressed=false;
})
multiplybtn.addEventListener('click',() => {
    operator="*"
    if((mainTextField.innerHTML!=='')&& (subTextField.innerHTML!=='')){
        let findOperator=subTextField.innerHTML.replace(/[A-Za-z0-9\s^x]/g,'');
        console.log(subTextField.innerHTML.replace(/[A-Za-z0-9\s]/g,''))
        if(findOperator==="+"){addnumbers()}
        if(findOperator==="*"){multiplynumbers()}
        if(findOperator==="/"){dividenumbers()}
        if(findOperator==="-"){subtractnumbers()}
    }
    subTextField.innerHTML=`${mainTextField.innerHTML} ${operator} `
    equalBtnisDone=false;
    multBrnPressed=true;
    dotBtnPressed=false;
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
    let sum;
    if((subTextField.innerHTML.split(operator)[0].indexOf(".")!== -1 )|| 
    (mainTextField.innerHTML.indexOf(".") !== -1)){
        number1=parseFloat(subTextField.innerHTML.split(operator)[0]);
        number2=parseFloat(mainTextField.innerHTML);
        sum=number1+number2;
        subTextField.innerHTML=`${number1} + ${number2} = `
        mainTextField.innerHTML=sum;
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
    else{
        number1=parseInt(subTextField.innerHTML.split(operator)[0]);
        number2=parseInt(mainTextField.innerHTML);
        sum=number1+number2;
        subTextField.innerHTML=`${number1} + ${number2} = `
        mainTextField.innerHTML=sum;
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
}
   
function multiplynumbers(){
    let prod;
    if((subTextField.innerHTML.split(operator)[0].indexOf(".")!== -1 )|| 
    (mainTextField.innerHTML.indexOf(".") !== -1)){
        number1=parseFloat(subTextField.innerHTML.split(operator)[0]);
        number2=parseFloat(mainTextField.innerHTML);
        prod=number1*number2;
        subTextField.innerHTML=`${number1} X ${number2} = `
        mainTextField.innerHTML=prod.toFixed(2);
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
    else{
        number1=parseInt(subTextField.innerHTML.split(operator)[0]);
        number2=parseInt(mainTextField.innerHTML);
        prod=number1*number2;
        subTextField.innerHTML=`${number1} X ${number2} = `
        mainTextField.innerHTML=prod;
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
  
}
function subtractnumbers(){
    let diff;
    if((subTextField.innerHTML.split(operator)[0].indexOf(".")!== -1 )|| 
    (mainTextField.innerHTML.indexOf(".") !== -1)){
        number1=parseFloat(subTextField.innerHTML.split(operator)[0]);
        number2=parseFloat(mainTextField.innerHTML);
        diff=number1-number2;
        subTextField.innerHTML=`${number1} - ${number2} = `
        mainTextField.innerHTML=diff.toFixed(2);
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
    else{
        number1=parseInt(subTextField.innerHTML.split(operator)[0]);
        number2=parseInt(mainTextField.innerHTML);
        diff=number1-number2;
        subTextField.innerHTML=`${number1} - ${number2} = `
        mainTextField.innerHTML=diff;
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
    
}
function dividenumbers(){
    let quo;
    if(mainTextField.innerHTML === "0"){
        alert("Bestie you cannot divide by zero. Try Again")
        mainTextField.innerHTML="";
        number2=null;
        return;
    }
    if((subTextField.innerHTML.split(operator)[0].indexOf(".")!== -1 )|| 
    (mainTextField.innerHTML.indexOf(".") !== -1)){
        number1=parseFloat(subTextField.innerHTML.split(operator)[0]);
        number2=parseFloat(mainTextField.innerHTML);
        quo=number1/number2;
        subTextField.innerHTML=`${number1} / ${number2} = `
        mainTextField.innerHTML=quo.toFixed(2);
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
    else{
        number1=parseInt(subTextField.innerHTML.split(operator)[0]);
        number2=parseInt(mainTextField.innerHTML);
        quo=number1/number2;
        subTextField.innerHTML=`${number1} / ${number2} = `

        if(quo.toString().indexOf(".") !== -1){
            mainTextField.innerHTML=quo.toFixed(2);
        }
        else{
            mainTextField.innerHTML=quo;
        }
        
        equalBtnisDone=true;
        dotBtnPressed=false;
    }
    
}

