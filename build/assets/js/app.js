!function(){return function o(r,n,t){function c(s,l){if(!n[s]){if(!r[s]){var u="function"==typeof require&&require;if(!l&&u)return u(s,!0);if(e)return e(s,!0);var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}var a=n[s]={exports:{}};r[s][0].call(a.exports,function(o){return c(r[s][1][o]||o)},a,a.exports,o,r,n,t)}return n[s].exports}for(var e="function"==typeof require&&require,s=0;s<t.length;s++)c(t[s]);return c}}()({1:[function(o,r,n){$(function(){o("./modules/svg4everybody")(),o("./modules/noJs")(),o("./modules/change-bg")(),o("./modules/masonry")(),o("./modules/scroll2ancor")(),o("./modules/scroll-up")()})},{"./modules/change-bg":2,"./modules/masonry":3,"./modules/noJs":4,"./modules/scroll-up":5,"./modules/scroll2ancor":6,"./modules/svg4everybody":7}],2:[function(o,r,n){r.exports=function(){const o=$(window).height()/2,r=$("#bg");$(window).on("scroll touchmove",function(){$(document).scrollTop()>=$("#header").position().top-o&&$(r).css("background-color",$("#header").attr("data-color")),$(document).scrollTop()>=$("#schedule").position().top-o&&$(r).css("background-color",$("#schedule").attr("data-color")),$(document).scrollTop()>=$("#info").position().top-o&&$(r).css("background-color",$("#info").attr("data-color")),$(document).scrollTop()>=$("#dress").position().top-o&&$(r).css("background-color",$("#dress").attr("data-color")),$(document).scrollTop()>=$("#gallery").position().top-o&&$(r).css("background-color",$("#gallery").attr("data-color")),$(document).scrollTop()>=$("#video").position().top-o&&$(r).css("background-color",$("#video").attr("data-color")),$(document).scrollTop()>=$("#footer").position().top-o&&$(r).css("background-color",$("#footer").attr("data-color"))})}},{}],3:[function(o,r,n){r.exports=function(){$(window).on("load",function(){$(".gallery-grid").masonry()})}},{}],4:[function(o,r,n){r.exports=function(){$(".main-wrap").removeClass("no-js")}},{}],5:[function(o,r,n){r.exports=function(){$(function(){$("#arr-up").click(function(){$("html, body").animate({scrollTop:0},1e3)})}),$(window).scroll(function(){$(this).scrollTop()>300?$("#arr-up").addClass("active"):$("#arr-up").removeClass("active")})}},{}],6:[function(o,r,n){r.exports=function(){$(function(){return $(".scroll-link[href*=\\#]").on("click",function(o){var r=$(this);$("html, body").stop().animate({scrollTop:$(r.attr("href")).offset().top-0+"px"},1e3)}),!1})}},{}],7:[function(o,r,n){r.exports=function(){$(function(){svg4everybody()})}},{}]},{},[1]);