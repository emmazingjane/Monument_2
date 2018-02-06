$(document).ready(function() {

	$('.contact').on('submit', function (e) {
	  e.preventDefault(); // Prevent the page from reloading


		  //looping through to check for validity
		  $('form input, form textarea').each(function() {

		  	var $currentField = $(this);
		  	// if my current field is either form inoput or textarea
		  	var fieldType = $(this).attr('type');
		  	// https://api.jquery.com/attr/ this sets my attribute of the first element it matches
		  	// checking every part of the form
			  	if ($currentField.val() === '') {
			  		$currentField.addClass('error');
			  		$currentField.siblings('.error-message').fadeIn(300);
			  		// if the current field = and empty string the error message will fade in
			  		// https://api.jquery.com/val/
			  		// return;
			  	} else {
        			$(this).removeClass('error');
        			$(this).next().fadeOut(600); //show the error message
        		};

			  	// if the email is valid it will not include certain charectershttps://stackoverflow.com/questions/2855865/validating-email-addresses-using-jquery-and-regex
				// set up the email type
				if (fieldType === 'email');	
					var valid = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;   	
			  		var isValid = valid.test($currentField.val());
			  		// if email is not valid
			  		if(!isValid) {
			  			$currentField.addClass('error');
			  			$currentField.siblings('.error-message').text('Please complete the following');
			  		} if(isValid) {
			  			$('.error-message').hide(300);
			  		};

			  		$('.error').click(function() {
			  			$('#target').blur();
			  		});
		});
	});
});
