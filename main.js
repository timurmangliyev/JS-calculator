
function sum (){
    let num1 = document.getElementsByClassName("number")[0].value
    let num2 = document.getElementsByClassName("number")[1].value
    let sum = Number(num1) + Number(num2)
    let result = document.querySelector(".result")
    result.innerHTML+=sum
}

function average (){
    let num1 = document.getElementsByClassName("number1")[0].value
    let num2 = document.getElementsByClassName("number1")[1].value
    let average = ((Number(num1) + Number(num2))/2);
    let result = document.querySelector(".result2")
    result.innerHTML+=average
    return
}

function square (){
    let num1 = document.getElementsByClassName("number2")[0].value
    let num2 = document.getElementsByClassName("number2")[1].value
    let square = ((Number(num1)**2 + Number(num2)**2)/2);
    let result = document.querySelector(".result3")
    result.innerHTML+=square
    return
}