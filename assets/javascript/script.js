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