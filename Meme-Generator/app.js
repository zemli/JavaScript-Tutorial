var main = function() {
	$('#top-text').keyup(function() {
    var topText = $('#top-text').val();
    $('.top-caption').text(topText);
  });
  
  $('#bottom-text').keyup(function() {
    var bottomText = $('#bottom-text').val();
    $('.bottom-caption').text(bottomText);
  });
  
   $('#image-url').keyup(function() {
		 var imgUrl = $('#image-url').val();
     $('img').attr('src',imgUrl);
  });
};
 
$(document).ready(main);