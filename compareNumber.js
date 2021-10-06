document.getElementById("btn").addEventListener("click", onclick);
document.addEventListener("keydown",onkeydown);



function onkeydown(e){
if (e.key ==="Enter" ){
    //calling other fucntion on condition met for enter pressed
    onclick();
}

}



function onclick(){
    
    var input1_text = document.getElementById("first").value;
    var a= Number(input1_text);

    var b=Number(document.getElementById("second").value);
    var c=Number(document.getElementById("third").value);
//cpmpare
var max= a;
    if (b > max)
    max = b;
    if (c > max)
    max = c;
    document.getElementById("p1").innerHTML= max;
}
