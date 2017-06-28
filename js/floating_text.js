$('input').on('focus', function() {
	$(this).parent().addClass('is-focused');
});
$('input').on('input', function() {
	if($(this).val() == '') {
		$(this).parent().removeClass('is-active');
	} else {
		$(this).parent().addClass('is-active');
	}
});

$('input').on('blur', function() {
	$(this).parent().removeClass('is-focused');

	if($(this).val() == '') {
		$(this).parent().removeClass('is-active');
	}
});
$(document).ready(function() {
	$('input').each(function () {
		if($(this).val() == '') {
			$(this).parent().removeClass('is-active');
		} else {
			$(this).parent().addClass('is-active');
		}
	});
});

//Button Animation

$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);

  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
  });
