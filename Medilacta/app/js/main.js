// $(function() {
//   var header = document.getElementById('header');
//   var headroom = new Headroom(header);
//   headroom.init();
//   //Menu Responsive
//   //Calc width screem
//   var wide = $(window).width(),
//     links = $('#links'),
//     btnMenu = $('#btn-menu'),
//     icon = $('#btn-menu .icon');

//     if(wide < 700) {
//       links.hide();
//       icon.addClass('fa-bars');
//     }

//     btnMenu.on('click', function(e) {
//       links.slideToggle();
//       icon.toggleClass('fa-bars');
//       icon.toggleClass('fa-times');
//     });
    
//     $(window).on('rezise', function(){
//       if($(this).width() >700 ){
//           links.show();
//           icon.addClass('fa-times');
//           icon.removeClass('fa-bars');
//       } else {
//           links.hide();
//           icon.addClass('fa-bars');
//           icon.removeClass('fa-times');
//       }
//     });
// });

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

//scrolling effect

$(window).on("scroll", function(){
  if($(window).scrollTop()) {
    $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
});

//////////////////////////////////////////////INICIA EL SLIDE ///////////////////////

var numeroSlide = 1;
var formatearLoop = false;
var cantidadImg = $("#slide ul li").lenght;


////////////////////////////////////////////////*INDICADOR*/////////////////////
$("#indicator li").click(function(){
  var roleSlide = $(this).attr("role-slide");

  $("#slide ul li").css({"display":"none"});
  
  $("#slide ul li:nth-child("+ roleSlide +")").fadeIn();

  $("#indicator li").css({"opacity":".5"});

  $(this).css({"opacity":"1"});
  formatearLoop = true;
  numeroSlide = roleSlide;

});


/* FUNCION AVANZAR*/

function avanzar() {

  if(numeroSlide >= 4){
    numeroSlide = 1;
  }
  else {
  numeroSlide++;
  }

  $("#slide ul li").css({"display":"none"});

  $("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();

  $("#indicator li").css({"opacity":".5"});

  $("#indicator li:nth-child("+ numeroSlide +")").css({"opacity":"1"});
  
}


/*Right*/

$("#right").click(function() {
  avanzar();

  formatearLoop = true;
  
});

/*left*/

$("#left").click(function() {

  if(numeroSlide <= 1){
      numeroSlide = 4;
  }
  else {
    numeroSlide--;
  }

  $("#slide ul li").css({"display":"none"});
  
  $("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();

  $("#indicator li").css({"opacity":".5"});

  $("#indicator li:nth-child("+ numeroSlide +")").css({"opacity":"1"});
  formatearLoop = true;
  
});


// /*LOOP SLIDER*/

// setInterval(function(){

//   if(formatearLoop){
//     formatearLoop = false;
//   }

//   else {
//   avanzar();
//   }

// },6000);




// (function($) { // Begin jQuery
//     $(function() { // DOM ready
//       // If a link has a dropdown, add sub menu toggle.
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.nav-dropdown').toggle();
//         // Close one dropdown when selecting another
//         $('.nav-dropdown').not($(this).siblings()).hide();
//         e.stopPropagation();
//       });
//       // Clicking away from dropdown will remove the dropdown class
//       $('html').click(function() {
//         $('.nav-dropdown').hide();
//       });
//       // Toggle open and close nav styles on click
//       $('#nav-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
//       // Hamburger to X toggle
//       $('#nav-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
//     }); // end DOM ready
//   })(jQuery); // end jQuery

//   $(function() {
//   $('.footer-links-holder h3').click(function () {
//     $(this).parent().toggleClass('active');
//   });
// });






