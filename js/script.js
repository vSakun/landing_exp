$(document).ready(function () {
  var objToStick = $("nav"); //Получаем нужный объект
  var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока
  var allObj = $(".glob_mn,.smal_mn,.back_mn");

  $(window).scroll(function () {
    var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

    if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
    	if($(window).width() > 768){
    		$('header .bottom_wrap .flex_top').addClass("top_fix");
    		$(allObj).removeClass("all_fix");
    		$('.glob_mn').removeClass("glob_fix_add");
    		$('.smal_mn').removeClass("smal_fix");
    		$('.back_mn').removeClass("back_fix");
    		$('.smal_mn p').removeClass("p_fix");
    	}
    	else{
    		$(allObj).addClass("all_fix");
    		$('.glob_mn').addClass("glob_fix_add");
    		$('.smal_mn').addClass("smal_fix");
    		$('.back_mn').addClass("back_fix");
    		$('.smal_mn p').addClass("p_fix");
    	};
    } else {
    	if($(window).width() > 768){
    		$('header .bottom_wrap .flex_top').removeClass("top_fix");
    	}
    	else{
    		$(allObj).removeClass("all_fix");
    		$('.glob_mn').removeClass("glob_fix_add");
    		$('.smal_mn').removeClass("smal_fix");
    		$('.back_mn').removeClass("back_fix");
    		$('.smal_mn p').removeClass("p_fix");
    	};
    };
  });
});

$(function(){
	$('.smal_mn').on('click',function(){
		$('.glob_mn').removeClass("glob_fix_add");
		$('.smal_mn').removeClass("smal_fix");
		$('.back_mn').removeClass("back_fix");
		$('.smal_mn p').removeClass("p_fix");
	});	
});
$(function(){
	$('.back_mn').on('click',function(){
		$('.glob_mn').addClass("glob_fix_add");
		$('.smal_mn').addClass("smal_fix");
		$('.back_mn').addClass("back_fix");
		$('.smal_mn p').addClass("p_fix");
	});
});

function windowSize(){
	if($(window).width() > '768'){
		if($("all_fix")){
			$(".smal_mn,.glob_mn,.back_mn").removeClass("all_fix");
		}
		else{$('.glob_mn').removeClass("glob_fix_add");
		$('.smal_mn').removeClass("smal_fix");
		$('.back_mn').removeClass("back_fix");
		$('.smal_mn p').removeClass("p_fix");
	};
}
else if($(window).width() < '768'){
	$('header .bottom_wrap .flex_top').removeClass("top_fix");
}
};
$(window).on('load resize',windowSize);