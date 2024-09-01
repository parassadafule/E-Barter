document.getElementById("donationForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    
    var thanksSection = document.getElementById("thanks-section");
    thanksSection.style.display = "block";

    var blur = document.getElementsByClassName("main")[0]; 
    blur.style.filter = "blur(5px)";

    thanksSection.classList.add("show");
    
    thanksSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("thanks-section").addEventListener("click", function(event) {
   if (event.target.classList.contains("collect")) {
     window.location.href = "../templates/index.html";
   }
});
  