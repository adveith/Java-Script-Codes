console.log("hello world!");
var name = prompt("Enter your name :")
alert("hello,"+name);
console.log(name);
// document.write("<h1 style='color:red;'>Hello User</h1>");


function CAL(){
    var a= parseInt(document.getElementById("num1").value)
    var b= parseInt(document.getElementById("num2").value)
    var res = confirm("Are you sure you want to add "+a+" + "+b)

    if(res == true){
        alert(a+" + "+b+" = "+(a+b))
    }
    else{
        alert("Operation Cancelled")
    }
}