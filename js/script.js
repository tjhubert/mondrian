function randomColorGenerator(){var a=10*Math.random();return 10/3>=a?"blue":20/3>=a?"red":"yellow"}function inView(a,b){var c=a.offset().top,d=a.offset().top+a.height(),e=$(window).scrollTop()+$(window).height(),f=$(window).scrollTop();return"undefined"==typeof b&&(b=0),c>f-b&&e>d-b}!function(){function a(){$(document).scrollTop()>1e3?b.css("opacity","1"):b.css("opacity","0")}var b=$("#background-image");$(window).scroll(function(){a()}),a()}(),function(){function a(a){$(d[a]).css("display","none").removeClass("carousel-yellow").removeClass("carousel-red").removeClass("carousel-blue")}function b(a){$(d[a]).css("display","block").addClass("carousel-"+randomColorGenerator())}var c,d=$(".carousel-slides"),e=0;$("#arrow-carousel-right").click(function(){c=e,e++,e===d.length&&(e=0),a(c),b(e)}),$("#arrow-carousel-left").click(function(){c=e,e--,-1===e&&(e=d.length-1),a(c),b(e)}),b(0)}(),function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("Please use a laptop or desktop computer to access this website."):navigator.userAgent.indexOf("Chrome")<=-1&&navigator.userAgent.indexOf("Firefox")<=-1&&alert("Please use Google Chrome or Firefox browser to access this website.")}(),function(){function a(e){function i(){$(d[g]).removeClass("animate-intro"),$(d[g]).addClass("animate-outro"),++g<=d.length&&(g===d.length?(c=d.length-1,setTimeout(b(e),2500)):g===d.length-1?setTimeout(a(e),500):setTimeout(a(e),150))}return function(){d=f[e],0===g&&-1!==h?(Array.prototype.forEach.call(f[h],function(a){$(a).css("display","none")}),Array.prototype.forEach.call(d,function(a){$(a).css("display","inline-block")}),setTimeout(i,0)):i()}}function b(i){return function(){d=f[i],$(d[c]).removeClass("animate-outro"),$(d[c]).addClass("animate-intro"),--c>=-1&&(-1===c?(g=0,h=i,e=i<f.length-1?++i:0,setTimeout(a(e),800)):setTimeout(b(i),150))}}var c,d,e,f=[$(".initial-hidden-a"),$(".initial-hidden-b"),$(".initial-hidden-c"),$(".initial-hidden-d")],g=0,h=-1;a(0)()}(),function(){function a(a){a=a||window.event,a.preventDefault&&a.preventDefault(),a.returnValue=!1}function b(b){return k[b.keyCode]?(a(b),!1):void 0}function c(){window.addEventListener&&window.addEventListener("DOMMouseScroll",a,!1),window.onwheel=a,window.onmousewheel=document.onmousewheel=a,window.ontouchmove=a,document.onkeydown=b}function d(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",a,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}function e(a){return function(){f.css("top",$(document).scrollTop()),f.addClass("show-lightbox"),g.css("background-image","url("+a.url+")");var b=a.title+", "+a.year;h.find("span").html(b),c()}}var f=$("#lightbox"),g=$("#lightbox-content"),h=$("#lightbox-description"),i=$(".modal-works"),j=[{url:"media/gray-tree.jpg",year:"1912",title:"The Gray Tree"},{url:"media/pier-and-ocean.jpg",year:"1915",title:"Pier and Ocean (Composition No. 10)"},{url:"media/farm-near-duivendrecht.jpg",year:"1916",title:"Farm Near Duivendrecht"},{url:"media/composition-checkerboard-dark-colors.jpg",year:"1919",title:"Composition: Checkerboard, Dark Colors"},{url:"media/composition-II-in-red-blue-and-yellow.jpg",year:"1930",title:"Composition II in Red, Blue, and Yellow"},{url:"media/tableau-number-4.jpg",year:"1925",title:"Tableau No. IV"},{url:"media/the-still-life-with-gingerpot-2.jpg",year:"1912",title:"The Still Life with Gingerpot II"},{url:"media/new-york-city-1.jpg",year:"1942",title:"New York City I"},{url:"media/composition-london.jpg",year:"1944",title:"Composition London"},{url:"media/victory-boogie-woogie.jpg",year:"1944",title:"Victory Boogie-Woogie"}],k={37:1,38:1,39:1,40:1};j.sort(function(a,b){return parseInt(a.year)-parseInt(b.year)}),Array.prototype.forEach.call(i,function(a,b){$(a).css("background-image","url("+j[b].url+")"),$(a).click(e(j[b]))}),$("#lightbox-hide").click(function(){f.removeClass("show-lightbox"),d()}),$("#lightbox-transparent").click(function(){f.removeClass("show-lightbox"),d()})}(),function(){function a(){h||($(document).scrollTop()>50?(i=!0,e.addClass("navbar-shrink")):(i=!1,e.removeClass("navbar-shrink")))}function b(){Array.prototype.forEach.call(f,function(a,b){$(a).removeClass("navbar-active")})}function c(a){var c=$(f[a]);c.hasClass("navbar-active")||b(),c.addClass("navbar-active")}function d(a,b){function d(){g=!1,e.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove")}var e=$("html, body");0===b?offset=100:1===b?offset=200:offset=200,e.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",function(){e.stop(),d()}),$("html, body").animate({scrollTop:a.offset().top-offset},1200,"smooth",function(){d(),c(b)})}var e=$("#navbar"),f=$(".navbar-links"),g=!1,h=!1,i=!1;$.extend(jQuery.easing,{smooth:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c}}),Array.prototype.forEach.call(f,function(a,c){var e=$(a);e.mouseover(function(a){e.hasClass("navbar-active")||(e.addClass("hover-"+randomColorGenerator()),0===c&&$("#first-navbar").addClass("border-left"))}),e.mouseleave(function(){e.removeClass("hover-blue"),e.removeClass("hover-red"),e.removeClass("hover-yellow"),0===c&&$("#first-navbar").removeClass("border-left")}),e.click(function(){e.hasClass("navbar-active")||(g=!0,b(),0===c?d($("#multi-column"),0):1===c?d($("#carousel"),1):d($("#modal"),2))})}),$(window).scroll(function(){a(),g||(inView($("#multi-column"),100)||inView($("#video"))?c(0):inView($("#carousel"),150)?c(1):inView($("#background"),300)||inView($("#modal"),150)?c(2):b())}),e.mouseover(function(){i&&(e.removeClass("navbar-shrink"),i=!1),h=!0}),e.mouseleave(function(){h=!1,a()})}();