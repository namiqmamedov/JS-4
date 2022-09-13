function Multiply(){
    var result = 1;
    for (i=11;i<15;i++) {
       result *=i;
    }
    return result;
}
console.log(Multiply());

function chMultiple(){
    num1 = document.getElementById("Multiple").value;
    num2 = document.getElementById("Multiple1").value;
    alert("Result:"  +  num1 * num2); 
}