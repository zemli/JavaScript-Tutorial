var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    var text = $('#inputLang').val();
    var html = template(text);
    $('.list').append(html);
    $('#inputLang').val('');

    return false;  
  });
  /*
  $('.glyphicon-star').on('click', function() {
    $(this).toggleClass('active');
  });
  */
  $(document).on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active');
  });
  /*
  $('.glyphicon-remove').on('click', function() {
    $(this).parent().remove();
  });
  */
   $(document).on("click", '.glyphicon-remove', function() {
        $(this).parent().remove();
  });
  

    var languages = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    $( "#inputLang" ).autocomplete({
      source: languages
    });

};

$(document).ready(main);