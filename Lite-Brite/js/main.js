function main() {
  var colorClass = '';
	var blinking = false;
  var interval;
  $('.select-color').on('click', function() {
        var selectedColor = $(this).attr('class');
  		switch(selectedColor) {
          case 'select-color cyan not-selected':
            colorClass = 'cyan';
            break;
          case 'select-color magenta not-selected':
            colorClass = 'magenta';
            break;
          case 'select-color yellow not-selected':
            colorClass = 'yellow';
            break;
          default:
            console.log('switch error');
                            }
  		$(this).removeClass('not-selected');
  		$(this).siblings().addClass('not-selected');
  });
  
	$('.box').on('click', function() {
    $(this).toggleClass(colorClass);
  });
  
  $('.toggle-blink').on('click', function() {

    if(blinking) {
      clearInterval(interval);
      blinking = false;
    } else {
      if(colorClass) {
      $('.toggle-blink').toggleClass('opacity');
    }
    
    interval = setInterval(function() {
      $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
    }, 350);
      blinking = true;
    }
    
  });

}

$(document).ready(main);