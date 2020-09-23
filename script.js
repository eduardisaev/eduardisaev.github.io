//main scripts
$(document).ready(function (){
     $("#WorkExperiences").click(function (){
         $('html, body').animate({
             scrollTop: $("#Work-section").offset().top -150
         }, 1000);
     });
 });

 $(document).ready(function (){
      $("#Projects").click(function (){
          $('html, body').animate({
              scrollTop: $("#Projects-section").offset().top -150
          }, 1000);
      });
  });

$(document).ready(function (){
     $("#logo").click(function (){
         $('html, body').animate({
             scrollTop: $('body').offset().top
         }, 1000);
     });
 });

function scrollWork(){
  $('html, body').animate({
      scrollTop: $("#Work-section").offset().top -150
  }, 1000);
}

function scrollProjects(){
  $('html, body').animate({
      scrollTop: $("#Projects-section").offset().top -150
  }, 1000);
}

function myFunction(){
  var x = document.getElementById("Hover");
  var y = document.getElementById("noHover");
  if(x.className === "dropdown"){
    x.className += " responsive";
    y.className += " responsive";
  }
}

function secondFunction(){
  var x = document.getElementById("Hover");
  var y = document.getElementById("noHover");

  x.className = "dropdown";
  y.className = "dropdown-erase";
}

window.addEventListener("resize", resizeWindow);

function resizeWindow(){
  var w = window.innerWidth;
  var x = document.getElementById("Hover")
  if(w > 1100){
    x.className = "dropdown";
  }
}

function shadowFunction(){
  var x = document.getElementById("Profile");
  if(x.className === "Profile"){
    x.className += " responsive"
  }
}

function shadowReset(){
  var x = document.getElementById("Profile");
  x.className = "Profile";
}

//work scripts

function shadow2Function(){
  var x = document.getElementById("Work-section");
  if(x.className === "Work-section"){
    x.className += " responsive"
  }
}

function shadow2Reset(){
  var x = document.getElementById("Work-section");
  x.className = "Work-section";
}

//project scripts

function shadow3Function(){
  var x = document.getElementById("Projects-section");
  if(x.className === "Projects-section"){
    x.className += " responsive"
  }
}

function shadow3Reset(){
  var x = document.getElementById("Projects-section");
  x.className = "Projects-section";
}
