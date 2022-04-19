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
    a=Number(a)
    b=Number(b)
    return a/b
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

// function worker(arr){
//     for(let i=0;i<arr.length,i++){
//         if(arr[i]=="+" || arr[i]=="-"||arr[i]=="*"||arr[i]=="/"){
//             let val1=arr.slice(0,i)
//             let val2=arr.slice(i+1,arr.length+1)
//             let operator=arr[i]
//             let nextOperate=arr[i+1];
//             let resultVal=document.querySelector(".result");
//             resultVal.textContent= operate(val1,val2,operator1);
//         }
//     }
// }

// function work(inpValArr){
//     for(let i=0;i<inpValArr.length;i++){
//         if(inpValArr[i]=="+" || inpValArr[i]=="-"||inpValArr[i]=="*"||inpValArr[i]=="/"){
//             // let val1=inpValArr.slice(0,i)
//             // let val2=inpValArr.slice(i+1,arr.length+1)
//             // let operator=inpValArr[i]
//             return nextOperate=inpValArr[i+1];
//         }}
// }

// let buttonCalc=document.querySelectorAll("button");
// let inpVal=document.querySelector(".input-value")
// let inpValArr=[]
// buttonCalc.forEach((e)=>{
//     e.addEventListener("click", ()=>{
//         inpValArr.push(e.textContent);
//         inpVal.textContent=inpValArr.join("");
//         if(e.textContent=="=" || e.textContent==work(inpValArr)){
//             console.log(inpValArr)
//             for(let i=0;i<inpValArr.length;i++){
//                 if(inpValArr[i]=="+" || inpValArr[i]=="-"||inpValArr[i]=="*"||inpValArr[i]=="/"){
//                     let numeral1=inpValArr.slice(0,i).join("");
//                     let numeral2=inpValArr.slice(i+1,inpValArr.length-1).join("");
//                     let operator1=inpValArr[i];
//                     let resultVal=document.querySelector(".result");
//                     resultVal.textContent= operate(numeral1,numeral2,operator1);
//                 }
//             }
//     }
// })})



        



