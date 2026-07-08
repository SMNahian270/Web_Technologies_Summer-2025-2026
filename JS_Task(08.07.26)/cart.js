console.log("connected");

function calculate()
{
    const price = document.getElementById("productPrice").value;
    const items = document.getElementById("Quantity").value;

    if(items <=0)
        {
            document.getElementById("errorQuantity").innerHTML="Must atleast add 1 prodcut";
            document.getElementById("errorQuantity").style="color: red"
            document.getElementById("payable").value = 0;
            document.getElementById("button").style.display ="none";
        }
    else
        {
            document.getElementById("errorQuantity").innerHTML="";
            bill = price*items;
            document.getElementById("payable").value = bill;
            document.getElementById("button").style.display ="block";
        }
}