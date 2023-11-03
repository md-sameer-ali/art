$(document).ready(function () {
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content-main').hide();
    $('.tab-content-main:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content-main').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});
jQuery(function($){
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.nav-ul a').each(function() {
      if (this.href === path) {
        $(this).addClass('active-page');
      }
    });
    $('.sub-menu a').each(function() {
      if (this.href === path) {
        $('.dropdown a').addClass('active-page');
      }
    });

    $(".menubar").on("click" , function(){
        $(".nav-area").slideToggle();
        $(this).toggleClass("cross-active")
    })
})
$(document).ready(function () {
    // Show the first tab and hide the rest
    $('#tabs-nav2 li:first-child').addClass('active');
    $('.tab-content-small').hide();
    $('.tab-content-small:first').show();

    // Click function
    $('#tabs-nav2 li').click(function () {
        $('#tabs-nav2 li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content-small').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});
$(document).ready(function () {
    // Show the first tab and hide the rest
    $('#tabs-nav3 li:first-child').addClass('active');
    $('.tab-content-small2').hide();
    $('.tab-content-small2:first').show();

    // Click function
    $('#tabs-nav3 li').click(function () {
        $('#tabs-nav3 li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content-small2').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});

$(document).ready(function () {
    $(".set > a").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});
$(document).ready(function () {
    // $(".faq2").on("click", function (e) {
    //     e.preventDefault();
    //     $(".faq2 .set > a").off("click")
    // });
    $(".faq2 .set2 > a").on("click", function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass("active2")) {
            $(this).parent().removeClass("active2");
            $(this)
                .siblings(".content2")
                .slideUp(200);
            $(".faq2 .set2 > a i")
                .removeClass("fa-solid fa-chevron-down")
                .addClass("fa-solid fa-chevron-right");
        } else {
            $(".faq2 .set2 > a i")
                .removeClass("fa-solid fa-chevron-down")
                .addClass("fa-solid fa-chevron-right");
            $(this)
                .find("i")
                .removeClass("fa-solid fa-chevron-right")
                .addClass("fa-solid fa-chevron-down");
            $(".faq2 .set2 > a").parent().removeClass("active2");
            $(this).parent().addClass("active2");
            $(".content2").slideUp(200);
            $(this)
                .siblings(".content2")
                .slideDown(200);
        }
    });
});

