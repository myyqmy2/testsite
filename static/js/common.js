if(typeof(Worker) == "undefined"){
	$("body").addClass("ieBody");
}else{
	animateImg();
	$("body").wrapInner("<div class='wrapper'></div>");
	function animateImg(){
	   var wow = new WOW({
			mobile: false,
			live: true
	  });
	  wow.init();
	}	
}


//导航
function webHeader(){
	if($(window).width() <= 1199){
        $(".mMmenuLay dl").each(function(i) {
			var _this = $(this);
            if(_this.find("dd").size()>0){
				_this.find(".mToggle").show();
				}
        });
		$(".mToggle").click(function(e){
		if($(this).parents("dl").hasClass("on")){
			$(this).parents("dl").removeClass("on");
			$(this).removeClass("mToggle2");
			}else{
				$(".mMmenuLay dl").removeClass("on");
				$(".mToggle").removeClass("mToggle2");
				$(this).addClass("mToggle2");
				$(this).parents("dl").addClass("on");
				}
		});
		$(".mOpenBtn").click(function(e){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").addClass("on");
			$("body").css("overflow","hidden");
			});
		$(".mCloseBtn,.mMenuLayBg").click(function(){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").removeClass("on");
			$("body").css("overflow","inherit");
			});
	}
}
webHeader();
$(window).scroll(function(){
	if($(document).scrollTop()>10){
		$(".backWpr").addClass("on");
		}else{
			$(".backWpr").removeClass("on");
			}
	});
//$(window).resize(function(){webHeader();});

jQuery(document).ready(function($) {

setTimeout(function(){$("body").addClass("bodyIn")},100);

$(".mheadr_ra2").attr("href","javascript:;");
$(".testBtn,.webRmenu_a2,.headr_a2,.proTryBtn,.mheadr_ra2").click(function(){
	load_product_list();
	$(".proLayer_bg,.proLayer").fadeIn(300);
	});
$(".proLay_close,.proLayer_bg").click(function(){
	$(".proLayer_bg,.proLayer").fadeOut(300);
	});


$(".footTab a").hover(function(){
	$(".footInfo li").removeClass("on");
	$(".footInfo li").eq($(".footTab a").index(this)).addClass("on");
});

//if($(".m2proBomBox").length){autoH(".m2proBomBox");}
if($(".m3prodes").length){autoH(".m3prodes");}
if($(".m3hy_aux").length){autoH(".m3hy_aux");}
if($(".m2pro_c4a p").length){autoH(".m2pro_c4a p");}
if($(".m2wh_c2bm p").length){autoH(".m2wh_c2bm p");}
if($(".m2cs_c2a p").length){autoH(".m2cs_c2a p");}



$('input, textarea').placeholder();


$(".vBtn").click(function () {
	$(".m2Lay_video").attr("src",$(this).attr("data-vsrc"));
    $(".m2layerBg,.m2layerClose,.m2Lay_video").fadeIn(600);
    document.getElementById("mPPmv").play();
});
$(".m2layerClose").click(function () {
    $(".m2layerBg,.m2layerClose,.m2Lay_video").fadeOut(600);
    document.getElementById("mPPmv").pause();
});


$(".backTop").click(function(){$("body,html").animate({"scrollTop":0},500);});


function nav(){
	if($(document).scrollTop()>10){
	$(".headerWpr").removeClass("headerWprTransparent headerWpr_w").addClass("headerWpr_down");
	}else{
		$(".headerWpr").addClass("headerWprTransparent headerWpr_w").removeClass("headerWpr_down");
	}
}
nav()
$(window).scroll(function(){nav()});


$('.hmc3num span').length && $('.hmc3num span').countUp();
$('.m2cmu1 li strong span').length && $('.m2cmu1 li strong span').countUp();


//搜素
$(".topSerBtn").click(function(){
	$(".serBg,.serLayer").fadeIn(500);
	$(".serClose").removeClass("on");
	});
$(".serClose").click(function(){
	$(".serBg,.serLayer").fadeOut(500);
	$(".serClose").addClass("on");
	});
	
	
//banner
if($(".hmFocus").length){
	$("#hmfs_s2").text(addPreZero($(".hmFocus .hmFocus_item").size())); 
	$('.hmFocus').slick({
		autoplay: true, 
		arrows: false,
		dots:true,
		infinite: true,
		speed: 500,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		fade: true,
	});
	$('.hmFocus').init(function(slick){
		$('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
	})
	$('.hmFocus').on('afterChange',function(slick,currentSlide){
		$('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
	})
}


if($(".m2gkCon3").length){
    $('.hmc5Swiper').slick({
        autoplay: true, 
        arrows: false,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        fade: true,
		responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true
            }
          }
        ]
    });

	$('.hmc5Swiper').init(function(slick){
		$('.hmc5years a.hmc5yrBtn').eq($('.hmc5Swiper').slick('slickCurrentSlide')).addClass('on').siblings().removeClass('on')
	})
	$('.hmc5Swiper').on('afterChange',function(slick,currentSlide){
		$('.hmc5years a.hmc5yrBtn').eq($('.hmc5Swiper').slick('slickCurrentSlide')).addClass('on').siblings().removeClass('on')
	})
	$('.hmc5years a.hmc5yrBtn').click(function(){
		$('.hmc5Swiper').slick('slickGoTo',$(this).index());
		$(this).addClass("on").siblings("a..hmc5yrBtn").removeClass("on")
	});
	$('.hmc5years .prev').click(function(){
	  $('.hmc5Swiper').slick('slickPrev')
	})
	$('.hmc5years .next').click(function(){
	  $('.hmc5Swiper').slick('slickNext');
	});
}


$(".m2cmc3slick").each(function(i) {
    $(".m2cmc3slick").eq(i).slick({
        autoplay: true, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
            }
          },
		  {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
			  arrows: false,
        	  dots:true,
            }
          }
        ]
    });
});

$(".m2jnSwiper").slick({
	autoplay: true, 
	arrows: true,
	dots:false,
	infinite: true,
	speed: 500,
	autoplaySpeed: 5000,
	pauseOnHover: false,
	slidesToShow: 3,
	responsive: [
	  {
		breakpoint: 993,
		settings: {
		  slidesToShow: 2,
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  arrows: false,
		  dots:true,
		}
	  }
	]
});


$(".m2aiTab a").hover(function(){
	$(this).addClass("on").siblings("a").removeClass("on");
	$(".m2aiChange").removeClass("on");
	$(".m2aiChange").eq($(".m2aiTab a").index(this)).addClass("on");
	});
if($(".m2aic3swiper").length){
    $('.m2aic3swiper').slick({
        autoplay: true, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
            }
          },
		  {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
			  arrows: false,
        		dots:true,
            }
          }
        ]
    });
}


$(".webMclose").click(function(){
	$(".webRmenu").removeClass("open");
	$(".webMclose").fadeOut(800)
	});
if($(window).width()<993){
	$(".m2nfzy_btn").click(function(){
		$(".m2nfzy_layTxt").html($(this).find(".m2nfzy_layDes").html());
		$(".m2nfzy_c2layerBg,.m2nfzy_c2layer").fadeIn(300);
		})
	$(".m2nfzy_close").click(function(){
		$(".m2nfzy_c2layerBg,.m2nfzy_c2layer").fadeOut(300);
		});
}else{
	$(".m2nfzyico2").remove();
	$(".m2nfzy_btn").hover(function(){
			$(".m2nnFzLayer").html($(this).find(".m2nfzy_layDes").html())
			$(".m2nnFzLayerWpr").stop(false,true).fadeIn(300);
		},function(){
			$(".m2nnFzLayerWpr").stop(false,true).fadeOut(300);
			});
	}
	
$('.m2menuWpr').waypoint(function(direction){if(direction==='down'){
		$(".m2menu").addClass("m2menuFixed");
		$(".headerWpr").fadeOut(300);
	}else{
		$(".m2menu").removeClass("m2menuFixed");
		$(".headerWpr").fadeIn(300);
	}},{offset:"0%" }
);


$(window).scroll(function(){
	$(".partItem").each(function(i){
	if($(document).scrollTop()+100>=$(".partItem").eq(i).offset().top){
		$(".m2menu_a").removeClass("on");
		$(".m2menu_a").eq(i).addClass("on");
		}
	});	
});

//2022-02-18 JS
$(".m4menu a").hover(function(){
	$(this).addClass("on").siblings("a").removeClass("on");
	$(".m2qsCx").hide();
	$(".m2qsCx").eq($(".m4menu a").index(this)).show();
	});

});


/*2022-02-18 Js*/
if($(".hmc4ul").length && $(window).width()<767){
    $('.hmc4ul').slick({
        autoplay: true, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        slidesToShow: 2,
        rows: 2,
        slidesToScroll: 1,
    });
}

if($(window).width()<767){
	$('body').waypoint(function(direction){if(direction==='down'){
			$(".mHeader").addClass("down");
		}else{
			$(".mHeader").removeClass("down");
		}},{offset:"-10px" }
	);
	}

/*END*/


/* 2022-03-14 CSS */
if($(".hmc8Swiper").length){
    $('.hmc8Swiper').slick({
        autoplay: true, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    });
}
/*END*/

//百度分享
if($(".bdsharebuttonbox").size()){
window._bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "../css/style.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
}


function picTxtHeight() {
$(".picTxtBox").each(function(i){if($(this).find(".txtBox").height()>$(this).find(".picBox").height()){$(this).height($(this).find(".txtBox").height());}else{$(this).height($(this).find(".picBox").height());}$(this).find(".picBox-wp,.txtBox-wp").css("min-height",$(this).height())})}
if($(document).width()>993){
	picTxtHeight(); setTimeout(function(){picTxtHeight();},300);
}
$(window).resize(function(){
	if($(document).width()>993){
		picTxtHeight();
	}
})

function autoH(className){
	var maxH = 0;
	$(className).each(function() {
    var cutH = $(this).innerHeight();
	if(cutH>maxH){
		maxH = cutH;
		}
    });

    $(className).innerHeight(maxH);
}
function autoW(className){
	var maxW = 0;
	$(className).each(function() {
    var cutW = $(this).innerWidth();
	if(cutW>maxW){
		maxW = cutW;
		}
    });

    $(className).innerWidth(maxW);
}

function addPreZero(num){
	 if(num<10){
	 var t = (num+'').length,
	  s = '';
	 for(var i=0; i<2-t; i++){
	  s += '0';
	 }
	 return s+num;
	 }else{
		 return num;
		 }
}

//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});
