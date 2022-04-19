function add(a,b){
    a=Number(a)
    b=Number(b)
    return a+b
}
function subtract(a,b){
    a=Number(a)
    b=Number(b)
    return a-b
}
function multiply(a,b){
    a=Number(a)
    b=Number(b)
    return a*b
}
function divide(a,b){
    if(b==0){
        return "Can't divide by 0"
    }else{
    a=Number(a)
    b=Number(b)
    return a/b
    }
}

function operate(num1,num2,operator){
    if(operator=="+"){
        return add(num1,num2)
    }
    if(operator=="-"){
        return subtract(num1,num2)
    }
    if(operator=="*"){
        return multiply(num1,num2)
    }
    if(operator=="/"){
        return divide(num1,num2)
    }
}

let buttonCalc=document.querySelectorAll("button");
let inputVal=document.querySelector(".input-value")
let resultVal=document.querySelector(".result");
let arr=[];

buttonCalc.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.textContent=="CLEAR"){
                arr.splice(0,arr.length);
                arr.shift()
                inputVal.textContent="";
                resultVal.textContent= "";
        }else if(e.textContent=="DELETE"){
            arr.pop()
            inputVal.textContent=arr.join("");   
        }else{
arr.push(e.textContent)
inputVal.textContent=arr.join("")
for(let i=0;i<arr.length;i++){ 
if(arr[i]=="+" || arr[i]=="-"||arr[i]=="*"||arr[i]=="/"){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]=="=" || arr[j]=="+" || arr[j]=="-"||arr[j]=="*"||arr[j]=="/"){ 
            let number1=arr.slice(0,i).join("");
            let number2=arr.slice(i+1,j).join("");
            let operator1=arr[i];
            let answer=operate(number1,number2,operator1);
            resultVal.textContent= answer;
            arr.splice(0,j,answer)
                        
}}}}}})})


        



