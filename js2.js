function order(){
    let str = document.getElementById("word").value;
    document.getElementById("result").innerHTML = str.split('').sort().join('');;
}