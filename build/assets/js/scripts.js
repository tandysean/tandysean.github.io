(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4,
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "10px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "23px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "padding": "30px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    });

});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvX2Fzc2V0cy9qYXZhc2NyaXB0cy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKioqKioqKioqKioqKioqKiBXYXlwb2ludHMgKioqKioqKioqKioqKioqKioqL1xuXG4gICAgJCgnLndwMScpLndheXBvaW50KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLndwMScpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW5VcCcpO1xuICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAnNzUlJ1xuICAgIH0pO1xuICAgICQoJy53cDInKS53YXlwb2ludChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy53cDInKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluVXAnKTtcbiAgICB9LCB7XG4gICAgICAgIG9mZnNldDogJzc1JSdcbiAgICB9KTtcbiAgICAkKCcud3AzJykud2F5cG9pbnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcud3AzJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblJpZ2h0Jyk7XG4gICAgfSwge1xuICAgICAgICBvZmZzZXQ6ICc3NSUnXG4gICAgfSk7XG5cbiAgICAvKioqKioqKioqKioqKioqKiogSW5pdGlhdGUgRmxleHNsaWRlciAqKioqKioqKioqKioqKioqKiovXG4gICAgJCgnLmZsZXhzbGlkZXInKS5mbGV4c2xpZGVyKHtcbiAgICAgICAgYW5pbWF0aW9uOiBcInNsaWRlXCJcbiAgICB9KTtcblxuICAgIC8qKioqKioqKioqKioqKioqKiBJbml0aWF0ZSBGYW5jeWJveCAqKioqKioqKioqKioqKioqKiovXG5cbiAgICAkKCcuc2luZ2xlX2ltYWdlJykuZmFuY3lib3goe1xuICAgICAgICBwYWRkaW5nOiA0LFxuICAgIH0pO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqIFRvb2x0aXBzICoqKioqKioqKioqKioqKioqKi9cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqIE5hdiBUcmFuc2Zvcm1pY29uICoqKioqKioqKioqKioqKioqKi9cblxuICAgIC8qIFdoZW4gdXNlciBjbGlja3MgdGhlIEljb24gKi9cbiAgICAkKCcubmF2LXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5oZWFkZXItbmF2JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICAvKiBXaGVuIHVzZXIgY2xpY2tzIGEgbGluayAqL1xuICAgICQoJy5oZWFkZXItbmF2IGxpIGEnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5uYXYtdG9nZ2xlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcuaGVhZGVyLW5hdicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICB9KTtcblxuICAgIC8qKioqKioqKioqKioqKioqKiBIZWFkZXIgQkcgU2Nyb2xsICoqKioqKioqKioqKioqKioqKi9cblxuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGwgPj0gMjApIHtcbiAgICAgICAgICAgICAgICAkKCdzZWN0aW9uLm5hdmlnYXRpb24nKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1ib3R0b21cIjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiOiBcIjEwcHggMFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnaGVhZGVyIC5tZW1iZXItYWN0aW9ucycpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiMjZweFwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJ2hlYWRlciAubmF2aWNvbicpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiMjNweFwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdzZWN0aW9uLm5hdmlnYXRpb24nKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAkKCdoZWFkZXInKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdcIjogXCIzMHB4IDBcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJ2hlYWRlciAubWVtYmVyLWFjdGlvbnMnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjQxcHhcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCdoZWFkZXIgLm5hdmljb24nKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjQ4cHhcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLyoqKioqKioqKioqKioqKioqIFNtb290aCBTY3JvbGxpbmcgKioqKioqKioqKioqKioqKioqL1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnYVtocmVmKj0jXTpub3QoW2hyZWY9I10pJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gdGhpcy5ob3N0bmFtZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pOyJdfQ==
