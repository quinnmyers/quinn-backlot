$(function(){$(".people__person").on("click",function(e){e.preventDefault();var a=$(this),t=a.data("person");$(".people__slider").animate({opacity:0}),$(".people__overlay[data-person="+t+"]").animate({opacity:1}),$(".people__overlay[data-person="+t+"]").css("zIndex","10000000")}),$(".people__overlay__wrap__close").on("click",function(e){e.preventDefault();var a=$(this),t=a.parents(".people__overlay");t.animate({opacity:0}),t.css("zIndex","1"),$(".people__slider").animate({opacity:1})}),$(".people__slider").owlCarousel({autoPlay:3e3,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]}),$(".openIframe").on("click",function(e){e.preventDefault();var a=$(this);lity(a.attr("href"))});var e=$(".four__sort__button").click(function(a){a.preventDefault();var t=$(this).text();if("all"==this.id)$(".four__wrap > a").fadeIn(450);else{var o=$("."+this.id).fadeIn(450);$(".four__wrap > a").not(o).hide(),$(".four__heading").text(t)}e.removeClass("active"),$(this).addClass("active")})});