$(document).ready(function() {
	var userNumb = parseInt(prompt("Enter a number"));

	if (userNumb == NaN) {
		userNumb = prompt("This time enter a real number");
	}
	for (var i = 1; i <= userNumb; i++) {
		  
       	if (i % 3 === 0 && i % 5 === 0) {
			$('body').append('<p>' + 'fizzbuzz' + '</p>');
		}
		else if ( i % 3 === 0) {
			$('body').append('<p>' + 'fizz' + '</p>');
		}
		else if (i % 5 === 0) {
			$('body').append('<p>' + 'buzz' + '</p>');
		}
		
		else {
			$('body').append('<p>' + i + '</p>');
		} 
        
	}
});