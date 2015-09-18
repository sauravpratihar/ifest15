// All scripts
(function($){
    "use strict";

    $( window ).on( "orientationchange", function( event ) {
        if ($(window).width() > 978) {
            var margin = 15,
                base_dimensions = 134;
        } else {
            var margin = 10,
                base_dimensions = 104;
        }

        if ($(window).width() > 767) {
            var gridster = $(".navi .gridster > ul").gridster({
                widget_margins: [margin, margin],
                widget_base_dimensions: [base_dimensions, base_dimensions]
            }).data('gridster');
            gridster.disable();
        }
    });

    $(window).hashchange( function(){
        stopVideo();
        if ($(window.location.hash).length == 0) {
            if ($('.pt-page-current').is('pt-page-0')) {
                window.location.reload();
            }
        }
        if (window.location.hash == '') {
            gotoPage(0, 18);
        } else {
            gotoPage($('[url="' + window.location.hash.replace('#', '') + '"]').attr('page'), 18);
        }
        return false;
    });
    
    $(window).load(
        function() {
            $('#preloader').animate({opacity: 0}, 500, function() {
                $(this).remove();
            });
        }
    );
    
    $(document).ready(function() {

        if ($(window.location.hash).length == 0 && window.location.hash != '') {
            window.location.hash = '#our-blog';
        }

        $('p').each(function() {
            if (!$(this).html()) {
                $(this).remove();
            }
        });

        $('.navi li').click(function() {
            if (history.pushState) {
                window.history.pushState({},"", '#' + $(this).attr('url'));
            }
        });

        if (window.location.hash) {
            if ($(window.location.hash).length != 0) {
                gotoPage($(window.location.hash).attr('class').replace('blog-page-list', '').replace('pt-page', '').replace('pt-page-', '').replace('blog-single-post', '').trim(), 4);
            } else {
                if (history.pushState) {
                    window.history.pushState({},"", ' ');
                }
            }
        }
        
        $('body').on('click', '.home-page', function() {
            if (history.pushState) {
                window.history.pushState({},"", ' ');
            }
        });
        
        $('body').on('click', '.blogpost, .submenu a', function() {
            if (history.pushState) {
                window.history.pushState({},"", $(this).attr('href').replace('undefined', ''));
            }
        });

        $('body').on('click', '.next-page, .prev-page', function() {
            if ($('.pt-page-' + $(this).attr('page')).is('.blog-page-list')) {
                blogPosts(0);
            }
            if (history.pushState) {
                window.history.pushState({},"", '#' + $('.pt-page-' + $(this).attr('page')).attr('id'));
            }
        });

        if ($(window).width() > 979) {
            var margin = 15,
                base_dimensions = 134;
        } else {
            var margin = 10,
                base_dimensions = 104;
        }

        if ($(window).width() > 767) {
            var gridster = $(".gridster > ul").gridster({
                widget_margins: [margin, margin],
                widget_base_dimensions: [base_dimensions, base_dimensions]
            }).data('gridster');

            gridster.disable();
        }

        if ($('body').is('.nicescroll')) {
            $('.pt-page').each(function() {
                $(this).niceScroll({
                    cursorcolor : '#ffffff',
                    cursorborder: '5px solid transparent',
                    cursorborderradius: '0px',
                    zindex: '1',
                    horizrailenabled: false
                });
                $(this).getNiceScroll().hide();
            });

            $('.pt-page-current').getNiceScroll().show();
        }

        $('#grid').mixitup({
            targetSelector: '.item-p',
            onMixStart: function() {
                $('.og-expanded > a').trigger('click');
            }
        });

        $('#primary .og-grid li').click(function() {
            return false;
        });
        
        $('.pt-page .og-grid > li > a').click(function(e) {
            if ($(this).closest('li').is('.og-expanded')) {
                var thisitem = $(this).closest('li');
                $('.full', thisitem).animate({height: '0'}, 300, function() {
                    $(thisitem).closest('li').removeClass('og-expanded');
                });
                $(thisitem).animate({height: '293'}, 300);
                return false;
            }
            e.preventDefault();
        });
        
        $('.pt-page .og-grid > li').click(function() {
            $('.og-fullimg iframe', this).width($('.og-fullimg', this).width());
            if ($(this).is('.og-expanded')) {
                
            } else {
                $('.pt-page .og-grid > li.og-expanded .full').animate({height: '0'}, 0);
                $('.pt-page .og-grid > li.og-expanded').animate({height: '293'}, 300);
                $('.pt-page .og-grid > li.og-expanded').removeClass('og-expanded');
            }
            var h3_height = $('.full h3', this).height() + 50;
            var tag_height = $('.full .og-tags', this).length !== 0 ? $('.full .og-tags', this).height() + 50 : 0;
            var content_height = $('.full .work_content', this).length !== 0 ? $('.full .work_content', this).height() + 50 : 0;
            var link_height = $('.full .work_link', this).length !== 0 ? $('.full .work_link', this).height() : 0;
            var li_height = 410 + h3_height + tag_height + content_height + link_height + 50;
            if (li_height - 410 < 506)
                li_height = 800;

            var page = $(this).closest('.pt-page');
            $(page).animate({scrollTop: $(this).position().top + $('header', page).outerHeight(true)});
            
            $(this).animate({height: li_height}, 300);
            $('.full', this).animate({height: li_height - 295}, 300, function() {
                $(this).closest('li').addClass('og-expanded');
                $('.portfolio_gallery', this).carouFredSel({
                    items      : 1,
                    responsive : true,
                    height     : 446,
                    pagination : false,
                    scroll     : {
                        fx           : 'crossfade',
                        easing       : 'quadratic',
                        items        : 1,
                        duration     : 1000,
                        pauseOnHover : true
                    },
                    prev : $(this).find('.prev-slide'),
                    next : $(this).find('.next-slide'),
                });
            });
        });
        
        $('.full.og-expander, .prev-slide, .next-slide').click(function(e) {
            e.stopPropagation();
        });
        
        $('.og-close').click(function(e) {
            stopVideo();

            $(this).closest('.full').animate({height: '0'}, 300, function() {
                $(this).closest('li').removeClass('og-expanded');
            });
            $(this).closest('li').animate({height: '293'}, 300);
            return false;
        });

        
        $( "#accordion > div" ).accordion();
        $( "#tabs > div" ).tabs();
        
        var menu = $('#site-navigation');
        $('.menu-icon').click(function() {
            if (menu.is('.open')) {
                menu.removeClass('open');
            } else {
                menu.addClass('open');
            }
                
        });

        //Prevent Fake Browser Navigation
        var naviLink = $('.page-transition');
        naviLink.click(function(event){
            stopVideo();
            event.preventDefault();
        });

        // Team previews expand
        var $teammate = $('.team-mate');
        var clickable = $('.prev-page, .home-page, .submenu li a');
        $('.team-mate .content').click(function(){
            $teammate.removeClass('expanded').find('a').css({'outline':'none', 'text-decoration':'none'});
            if($(this).closest('.team-mate').hasClass('frst')){
                $teammate.removeClass('frst');
            } else {
                if ($(this).closest('.team-mate').offset().top + 282 > $(window).height()) {
                    $(this).closest('.pt-page').animate({scrollTop: $(this).closest('.team-mate').position().top}, 300);
                }
                $teammate.removeClass('frst');
                $(this).closest('.team-mate').addClass('frst');
                $(this).closest('.team-mate').addClass('expanded');
            }
            return false;
        });

        clickable.click(function(){
            $teammate.removeClass('expanded');
        });


        $('.outer-wrapper section').css('min-height', $(window).height() - 325);

    });
})(jQuery);

function downloadURL(url) {
    var hiddenIFrameID = 'hiddenDownloader',
        iframe = document.getElementById(hiddenIFrameID);
    if (iframe === null) {
        iframe = document.createElement('iframe');
        iframe.id = hiddenIFrameID;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }
    iframe.src = url;
};


function stopVideo() {
    var myPlayer = document.getElementById(jQuery('.og-expanded .og-expander-inner').find('embed').attr('id')); 
    if (myPlayer)
        myPlayer.pauseVideo();
}