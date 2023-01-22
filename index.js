const keys=document.querySelectorAll(".keys")
let display=document.getElementById("io-box")
display.textContent="0"
let previousKeyType="number"
let num1="", num2="", op=""
keys.forEach((e)=>e.addEventListener("click", function(){
    if(e.textContent==="CLEAR"){
        display.textContent="0"
        num1=""
        num2=""
        op=""
        previousKeyType="number"
    }else if(e.textContent==="DELETE"){
        display.innerText = display.innerText.slice(0, -1)
        if(display.innerText===""){
            display.innerText="0"
        }
    }else if(e.textContent==="="){
        if(previousKeyType!="operator")
        {num2=display.textContent
        display.textContent=doMath(num1, op, num2)
        num1=display.textContent}
    }else if(e.textContent==="+" || e.textContent==="x" || e.textContent==="-" || e.textContent==="÷"){
        if(previousKeyType!="operator"){if(num1!="" && op!=""){
            num2=display.textContent
            display.textContent=doMath(num1, op, num2)
        }
        num1=display.textContent
        op=e.textContent
        previousKeyType="operator"
        }
    }else if(e.textContent==="."){
        if(!display.textContent.includes(".")){
            display.textContent+=e.textContent
        }
    }else{
        if(display.textContent==="0"){
            display.textContent=e.textContent
        }else if(previousKeyType==="operator"){
            previousKeyType="number"
            display.textContent=e.textContent
        }else{
            display.textContent+=e.textContent
        }
    }
}))

function doMath(num1, op, num2){
    let number1=parseFloat(num1)
    let number2=parseFloat(num2)
    let result
    if(op==="+"){
        result=number1+number2
        return result.toFixed(2)
    }else if(op==="-"){
        result=number1-number2
        return result.toFixed(2)
    }else if(op==="x"){
        result=number1*number2
        return result.toFixed(2)
    }else{
        result=number1/number2
        return result.toFixed(2)
    }
}