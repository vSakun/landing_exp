$(document).ready(function () {
        var objToStick = $("#objToStick"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
            	$(objToStick).addClass("topWindow");
            } else {
            	$(objToStick).removeClass("topWindow");
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
		$('#smal_mn').css({"width":"none","cursor":"pointer","transition":"width .5s"});
		$('.back_mn').css({"opacity":"0","display":"none"});
	});
})