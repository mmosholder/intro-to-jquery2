$(document).on('ready', function() {
  
  $('p').mouseover(function() {
  	$('p').css('color', 'pink');
  	$('h1').append('!');
  });

  var isGood = true;

  $('.link1').click(function(){
  	var confirm1 = confirm("Are you sure you want to go to that URL?");
  	if (confirm1 === false) {
  		$('.link1').remove();
  		return false;
  	}
  });

});