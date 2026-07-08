console.log("Connected");

function submitcredentials()
{
    const username = document.getElementById("Username11").value;
    const password = document.getElementById("password11").value;

    if(!username)
        {
            document.getElementById("UserError").innerHTML="Must fill the username";
            document.getElementById("UserError").style.color = "red";
        }
    else if(username.length < 3)
        {
            document.getElementById("UserError").innerHTML="Username should be atleast 3 char long";
            document.getElementById("UserError").style.color = "red";
        }    
    else if(username.length > 9)
        {
            document.getElementById("UserError").innerHTML="Username cannot exceed 9 char";
            document.getElementById("UserError").style.color = "red";
        }
    else
        {
            document.getElementById("UserError").innerHTML="";
        }    
    if(!password){
        document.getElementById("passErr").innerHTML = "Password is required";
    }else if(password.length < 8){
        document.getElementById("passErr").innerHTML = "Password must be at least 8 char long";
    }else{
        document.getElementById("passErr").innerHTML = "";
    }    
    return false;
}