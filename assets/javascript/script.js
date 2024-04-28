// Javascript on submission of contact form
function contactForm()
{
    event.preventDefault;
    firstName = document.getElementById("firstName").value;
    if (firstName == "")
    {
        alert("Please enter a first name and email address so we can best respond to your query. Thank you.");
    }
    else 
    {
        alert("Thank you for contacting us, " + firstName + ", we will be in touch as soon as possible. Have a nice day.");
    }
    
}

//Event registration form - Jibin T//

function registerForm()
{
    event.preventDefault;
    emailAddress = document.getElementById("emailAddress").value;
    if (emailAddress == "" )
        {
        alert("Please enter a valid email address so we can best respond to your query. Thank you.");
    }
    else 
    {
        alert("Thank you for contacting us, we will be in touch as soon.");
    }
    
}


