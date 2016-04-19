/**
 * Created by abdulsamad on 2/13/16.
 */

//Next code used to prevent unexpected menu close when using some components (like accordion, tabs, forms, etc), please add the next JavaScript to your page
$( window ).load(function() {
    $(document).on('click', '.navbar .dropdown-menu', function(e) {e.stopPropagation();});
});


//Start Fix MegaNavbar on scroll page
var navHeight = $('#main_navbar').offset().top;
FixMegaNavbar(navHeight);
$(window).bind('scroll', function() {FixMegaNavbar(navHeight);});

function FixMegaNavbar(navHeight) {
    if (!$('#main_navbar').hasClass('navbar-fixed-bottom')) {
        if ($(window).scrollTop() > navHeight) {
            $('#main_navbar').addClass('navbar-fixed-top')
            $('body').css({'margin-top': $('#main_navbar').height()+'px'});
            if ($('#main_navbar').parent('div').hasClass('container')) $('#main_navbar').children('div').addClass('container').removeClass('container-fluid');
            else if ($('#main_navbar').parent('div').hasClass('container-fluid')) $('#main_navbar').children('div').addClass('container-fluid').removeClass('container');
        }
        else {
            $('#main_navbar').removeClass('navbar-fixed-top');
            $('#main_navbar').children('div').addClass('container-fluid').removeClass('container');
            $('body').css({'margin-top': ''});
        }
    }
}
//Start Fix MegaNavbar on scroll page


//Start Fix Main Slider by owlCarousel

$(document).ready(function() {

    $("#main-slider").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 800,
        paginationSpeed : 700,
        singleItem:true,
        autoPlay: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});

//End  Main Slider by owlCarousel

//Start  Child Slider by owlCarousel

$(document).ready(function() {

    $(".child-slider").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true,
        pagination:false,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });


});

$( ".child-slider .item a" ).hover(
    function() {
        $( this ).append( $( "<a href='#'><span> Take a look </span></a>" ) );
    }
    , function() {
        $( this ).find( "a:last" ).remove();
    }

);

//End  Child Slider by

$(document).ready(function() {
    function setHeight() {
        leftColumnHight = $('.set-height').height() + 78;
        console.log(leftColumnHight);
        $('#advertisement').css('min-height', leftColumnHight);
    };
    setHeight();
})








