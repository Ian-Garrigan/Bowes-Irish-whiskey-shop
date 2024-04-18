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


function jsMiniGame()
{
    // Define set of questions and answers
    const questions = ["Which country produces the largest amount of whiskey per year by volume?",
    "What is the world's most popular brand of whiskey?",
    "What gives whiskey its distinctive color",
    "What is the general proof of whiskey?",
    "Which takes longer to age: Green Spot or Yellow Spot whiskey"];
    
    const answers = ["Scotland",
    "Powers",
    "Tannins",
    "80",
    "Green Spot"];

    // Generate three unique random numbers within the rang of integers corresponding to the number of questions available
    num1 = Math.floor(Math.random() * questions.length);
    num2 = Math.floor(Math.random() * questions.length);
    if (num2==num1)
    {
        while (num2==num1)
        {
            num2 = Math.floor(Math.random() * questions.length)
        }
    }
    num3 = Math.floor(Math.random() * questions.length);
    if (num3==num1 | num3==num2)
    {
        while (num3==num1 | num3==num2)
        {
            num3 = Math.floor(Math.random() * questions.length)
        }
    }
    
    // Logic to ask questions and compare answers.
    if(prompt(questions[num1])==answers[num1])
    {
        alert("Well done, you got the first question right :)");
        if(prompt(questions[num2])==answers[num2])
        {
            alert("Well done, you got the second question right :)");
            if(prompt(questions[num3])==answers[num3])
            {
                alert("Well done, you got the third question right :). Your voucher code is: BOWES10");
                
            }
            else
            {
                alert("Hard luck, please try again soon. The answer was " + answers[num3]);
            }
        }
        else
        {
            alert("Hard luck, please try again soon. The answer was " + answers[num2]);
        }
        
    }
    else
    {
        alert("Hard luck, please try again soon. The answer was " + answers[num1]);
    }

        // Update numbers so if user plays again without closing browser, they likely won't get the same questions
        num1 = Math.floor(Math.random() * questions.length);
        num2 = Math.floor(Math.random() * questions.length);
        if (num2==num1)
        {
            while (num2==num1)
            {
                num2 = Math.floor(Math.random() * questions.length)
            }
        }
        num3 = Math.floor(Math.random() * questions.length);
        if (num3==num1 | num3==num2)
        {
            while (num3==num1 | num3==num2)
            {
                num3 = Math.floor(Math.random() * questions.length)
            }
        }

}