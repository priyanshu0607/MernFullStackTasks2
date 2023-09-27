function reverse(){
    let num = document.getElementById("firstNumber").value;
    document.getElementById("result").innerHTML = num.split("").reverse().join("");
}