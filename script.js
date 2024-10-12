// scroll smooth
$(document).ready(function(){
  
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });

// page up
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const pageUpBtn = document.getElementById("pageUpBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        pageUpBtn.style.display = "block";
    } else {
        pageUpBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// bagain link
document.getElementById("pageUpBtn").onclick = topFunction;

document.getElementById('1').addEventListener('click', function () {
    window.open ("https://www.facebook.com")
});

document.getElementById('2').addEventListener('click', function () {
    window.open ("https://x.com")
});

document.getElementById('3').addEventListener('click', function () {
    window.open ("https://www.instagram.com/")
});

document.getElementById('4').addEventListener('click', function () {
    window.open ("https://www.linkedin.com/")
});