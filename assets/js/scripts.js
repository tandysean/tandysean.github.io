!function e(n,t,a){function o(r,s){if(!t[r]){if(!n[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var f=t[r]={exports:{}};n[r][0].call(f.exports,function(e){var t=n[r][1][e];return o(t?t:e)},f,f.exports,e,n,t,a)}return t[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(){$(document).ready(function(){$(".wp1").waypoint(function(){$(".wp1").addClass("animated fadeInUp")},{offset:"75%"}),$(".wp2").waypoint(function(){$(".wp2").addClass("animated fadeInUp")},{offset:"75%"}),$(".wp3").waypoint(function(){$(".wp3").addClass("animated fadeInRight")},{offset:"75%"}),$(".flexslider").flexslider({animation:"slide"}),$(".single_image").fancybox({padding:4}),$('[data-toggle="tooltip"]').tooltip(),$(".nav-toggle").click(function(){$(this).toggleClass("active"),$(".header-nav").toggleClass("open"),event.preventDefault()}),$(".header-nav li a").click(function(){$(".nav-toggle").toggleClass("active"),$(".header-nav").toggleClass("open")}),$(function(){$(window).scroll(function(){var e=$(window).scrollTop();e>=20?($("section.navigation").addClass("fixed"),$("header").css({"border-bottom":"none",padding:"10px 0"}),$("header .member-actions").css({top:"26px"}),$("header .navicon").css({top:"23px"})):($("section.navigation").removeClass("fixed"),$("header").css({padding:"30px 0"}),$("header .member-actions").css({top:"41px"}),$("header .navicon").css({top:"48px"}))})}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})})})},{}]},{},[1]);