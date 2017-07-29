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


function plusSlides(n){
	var m1 = $(".dot[name=first]");
	var m2 = $(".dot[name=double]");
	var m3 = $(".dot[name=triple]");
	if(m2[0] == undefined && m3[0] == undefined){
		if(n == 1){
			currentSlide(2);
		}
		else{
			currentSlide(1);
		};
	}
	if(m1[0] == undefined && m3[0] == undefined){
		if(n == 1){
			currentSlide(3);
		}
		else{
			currentSlide(1);
		};
	}
	if(m1[0] == undefined && m2[0] == undefined){
		if(n == 1){
			currentSlide(3);
		}
		else{
			currentSlide(2);
		};
	}
}


function currentSlide(n){
	if(n == 1 || n == 0){
		$(".sl_cntr").removeClass("act_c");
		$(".sl_blr").removeClass("act_r");
		$(".sl_bll").addClass("act_l");
		$(".mini_bt[name=double],.mini_bt[name=triple]").removeClass("dot");
		$(".mini_bt[name=first]").addClass("dot");
		$(".prev").removeAttr("onclick");
		$(".prev").addClass("dot");
		$(".next").removeClass("dot");
		$(".next").attr({"onclick":"plusSlides(1)"});
	}
	else if(n == 2){
		$(".sl_bll").removeClass("act_l");
		$(".sl_blr").removeClass("act_r");
		$(".sl_cntr").addClass("act_c");
		$(".mini_bt[name=first],.mini_bt[name=triple]").removeClass("dot");
		$(".mini_bt[name=double]").addClass("dot");
		$(".prev").attr({"onclick":"plusSlides(-1)"});
		$(".next").attr({"onclick":"plusSlides(1)"});
		$(".prev").removeClass("dot");
		$(".next").removeClass("dot");
	}
	else if(n == 3){
		$(".sl_cntr").removeClass("act_c");
		$(".sl_bll").removeClass("act_l");
		$(".sl_blr").addClass("act_r");
		$(".mini_bt[name=first],.mini_bt[name=double]").removeClass("dot");
		$(".mini_bt[name=triple]").addClass("dot");
		$(".next").removeAttr("onclick");
		$(".next").addClass("dot");
		$(".prev").removeClass("dot");
		$(".prev").attr({"onclick":"plusSlides(-1)"});
	}
}