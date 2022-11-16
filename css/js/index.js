
$(document).ready(function(){
     $( "#accordion" ).accordion();

     $( "#AnuTop" ).click(function() {
          console.log("I am in click")
          //topFunction();
          $('html, body').animate({scrollTop : 0},800);
        });
   });

function topFunction() {
     $(document).body.scrollTop = 0; // For Safari
     $(document).documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$("button").click(function(){
     $("div").animate({
       left: '250px',
       opacity: '0.5',
       height: '150px',
       width: '150px'
     });
   });
   

$(".toggleMe").toggle();

$("html, body").animate({scrollTop: 0}, 1000);

//--Animate a DIV --> 
/*  
$("#AnuTop").click(function(){
      //--$('.animate').animate( {right: '250px'}, 1000 );
      alert("AnuTop");
  });
  */
  
  
  

  