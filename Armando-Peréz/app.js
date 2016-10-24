/* version 1: use function hasClass
var main = function() {
  $('.nav li').click(function() {

		if($(this).hasClass("nav-consumer")){
      $('.thumbnail').removeClass('selected');
      $('.consumer').addClass('selected');
    }
    else if($(this).hasClass("nav-mobile")){
      $('.thumbnail').removeClass('selected');
      $('.mobile').addClass('selected');
    }
    else if($(this).hasClass("nav-commerce")){
      $('.thumbnail').removeClass('selected');
      $('.commerce').addClass('selected');
    }
    else if($(this).hasClass("nav-enterprise")){
      $('.thumbnail').removeClass('selected');
      $('.enterprise').addClass('selected');
    }
    else if($(this).hasClass("nav-all")){
      $('.thumbnail').removeClass('selected');
    }
    
    $('.nav li').removeClass('active');
    $(this).addClass('active');
    
  });
};
 
$(document).ready(main);
*/

// version 2 get attribute class
var main = function() { 
$('.nav li').click(function() { 
var category = $(this).attr('class'); 

if(category === "nav-consumer"){ 
$('.thumbnail').removeClass('selected'); 
$('.consumer').addClass('selected'); 
} 
else if(category === "nav-mobile"){ 
$('.thumbnail').removeClass('selected'); 
$('.mobile').addClass('selected'); 
} 
else if(category === "nav-commerce"){ 
$('.thumbnail').removeClass('selected'); 
$('.commerce').addClass('selected'); 
} 
else if(category === "nav-enterprise"){ 
$('.thumbnail').removeClass('selected'); 
$('.enterprise').addClass('selected'); 
} 
else if(category === "nav-all"){ 
$('.thumbnail').removeClass('selected'); 
} 

$('.nav li').removeClass('active'); 
$(this).addClass('active'); 

}); 
}; 

$(document).ready(main);