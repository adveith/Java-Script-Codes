console.log("Welcome to the Currency convertor");
alert("Welcome to the Currency Convertor");
function convert()
{
    var amount = document.getElementById("amount").value;
    var res = confirm("Are you sure you want to convert "+amount+" to Us Dollars?")
    if(res == true){
        alert(amount+" = "+(amount * 1.79549));
    }
    else{
        return false;
    }
}
