

$(window).on('click',function(e) {

	if($('button').hasClass('on') ==true){

	  $("h1").css('color','white');
	  $("body").css('background','black');
	  $("button").removeClass("on")
	  $("button").addClass("off")
	  $(".status").text("hey,who turn off the lights?");


	}else{
		$("body").css('background','white');
	  $("button").removeClass("off")
	  $("button").addClass("on")
	  $(".status").text("It's so bright in here!");
	  $("h1").css('color','black');

	}

});





