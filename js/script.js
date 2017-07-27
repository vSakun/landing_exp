$(document).ready(function () {
  var objToStick = $("#smal_mn,#glob_mn,.back_mn"); //Получаем нужный объект
  var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

    if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
    	if($(window).width() > 768){
    		$('header .bottom_wrap .flex_top').addClass("top_fix");
    	}
    	else{
    		$(objToStick).css({"position":"fixed","top":"0"});
    		$('#glob_mn').css({"opacity":"0","transition":"opacity .1s","z-index":"1"});
    		$('#smal_mn').css({"width":"10%","cursor":"pointer","transition":"width .5s"});
    		$('.back_mn').css({"opacity":"0","display":"none"});
    	};
    } else {
    	if($(window).width() > 768){
    		$('header .bottom_wrap .flex_top').removeClass("top_fix");
    	}
    	else{
    		$(objToStick).css({"position":"absolute","top":"none"});
    		$('#glob_mn').css({"opacity":"1","transition":"opacity 3s","z-index":"5"});
    		$('#smal_mn').css({"width":"100%","cursor":"default"});
    		$('.back_mn').css({"opacity":"1","display":"block"});
    	};
    };
  });
});

$(function(){
	$('#smal_mn').on('click',function(){
		$('#glob_mn').css({"opacity":"1","transition":"opacity 3s","z-index":"5"});
		$('#smal_mn').css({"width":"100%","cursor":"default"});
		$('.back_mn').css({"opacity":"1","display":"block"});
	});	
});
$(function(){
	$('.back_mn').on('click',function(){
		$('#glob_mn').css({"opacity":"0","transition":"opacity .1s","z-index":"1"});
		$('#smal_mn').css({"width":"10%","cursor":"pointer","transition":"width .5s"});
		$('.back_mn').css({"opacity":"0","display":"none"});
	});
})