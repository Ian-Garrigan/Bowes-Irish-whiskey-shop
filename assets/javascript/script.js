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


// customized owl carousel functionality IAN.G
$(document).ready(function() {


    //Init the carousel
    $("#bestsellerSlider").owlCarousel({
      items: 4,
      center: true,
      nav: true,
      lazyLoad: true,
      loop: true,
    //   fontawesome html injection
      navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
      autoplay: true,
      autoplayTimeout:4000,
      onInitialized: createProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: createProgressBar
    });

     function createProgressBar() {
      // apply keyframe animation
      $("#bar").css({
        transition: "width 4000ms",
        width: "100%"
      });
    }

    function resetProgressBar() {
      $("#bar").css({
        transition: "width 0s",
        width: 0
      });
    }
    //Init progressBar where elem is $("#bestsellerSlider")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      createProgressBar();
      //start counting
      start();
    }
});

// IAN.G quotes progression indicator
var content = document.querySelector(".quotes-content");
var progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function() {
  var contentScrolled = window.scrollY - content.offsetTop + window.innerHeight;
  var percentageScrolled = contentScrolled / content.offsetHeight * 100;

  if (window.scrollY > content.offsetTop)
    progressBar.style.setProperty("--scroll-y", percentageScrolled);
  else progressBar.style.setProperty("--scroll-y", 0);
});

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
                alert("Well done, you have won! Please see the screen for your voucher code.");
                gameWonDOMUpdates();
            }
            else
            {
                alert("Hard luck, please try again soon. The answer was " + answers[num3]);
                
                gameLostDOMUpdates();
            }
        }
        else
        {
            alert("Hard luck, please try again soon. The answer was " + answers[num2]);
            gameLostDOMUpdates();
        }
        
    }
    else
    {
        alert("Hard luck, please try again soon. The answer was " + answers[num1]);
        gameLostDOMUpdates();
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

function gameLostDOMUpdates()
{
    // Reset DOM to default if needed (in case someone playing again after winning)
    document.getElementById("gamePromptText").innerHTML="Are you ready to put your whiskey knowledge to the test?";
    document.getElementById("gameButton").innerHTML="Click here to play again";
    // Hide these elements
    document.getElementById("gameOutputLine").style.display="none";
    document.getElementById("gameOutputHeading").style.display="none";
    document.getElementById("gameOutputBody").style.display="none";
}

function gameWonDOMUpdates()
{
    document.getElementById("gamePromptText").innerHTML="Looking to sharpen your whiskey knowledge even further?";
    document.getElementById("gameButton").innerHTML="Click here to play again";
    document.getElementById("gameOutputLine").style.display="block";
    document.getElementById("gameOutputHeading").innerHTML="Congratulations!";
    document.getElementById("gameOutputHeading").style.display="block";
    document.getElementById("gameOutputBody").innerHTML="Your voucher code is <br/> <strong>BOWES10</strong>";
    document.getElementById("gameOutputBody").style.display="block";
}

