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
            console.log(e.textContent)
                arr.splice(0,arr.length);
                arr.shift()
                console.log(arr)
                inputVal.textContent="";
                resultVal.textContent= "";
                    }else if(e.textContent=="DELETE"){
                        arr.pop()
                        inputVal.textContent=arr.join("");
                        console.log(arr)
                    }
                    
                    else{
        arr.push(e.textContent)
        inputVal.textContent=arr.join("")
        for(let i=0;i<arr.length;i++){ //1+ 1+3 //1+3=
            if(arr[i]=="+" || arr[i]=="-"||arr[i]=="*"||arr[i]=="/"){//1=+  +
                for(let j=i+1;j<arr.length;j++){//j=2 j<2 j<3 j<4 12 1no 2yes 23 //3RUN
                    if(arr[j]=="=" || arr[j]=="+" || arr[j]=="-"||arr[j]=="*"||arr[j]=="/"){ //2no 3yes j+=3 //j=3
                        let number1=arr.slice(0,i).join("");//0
                        console.log(number1);
                        let number2=arr.slice(i+1,j).join("");//2
                        console.log(number2);
                        let operator1=arr[i];//1
                        console.log(operator1);
                        let answer=operate(number1,number2,operator1);
                        resultVal.textContent= answer;
                        console.log(answer)
                        console.log(arr);//1+3=
                        console.log(j)
                        arr.splice(0,j,answer)
                        console.log(arr);
                    }
                }
            }
        }
        
    }})
})


        



