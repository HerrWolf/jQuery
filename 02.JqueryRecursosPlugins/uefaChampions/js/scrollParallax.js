$(window).scroll(function(){
	
	var posY = window.pageYOffset;

	$("#bloque2").css({"top": -180 - posY/3 + "px"});
	$("#cristiano").css({"top": -250 + posY/5 + "px"});

	// hacer que los grupos aparezcan por los lados
	$("#grupos").css({"margin-left": -100 +posY/3.3 +"%"})

	if (posY > $("#bloque2").offset().top){

		$("#grupos").css({"margin":"auto"});
	}

	$("#bloque3").css({"top": -150 - posY/3 + "px"});
});