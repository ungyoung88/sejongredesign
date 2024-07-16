$(document).ready(function () {
    // header
    $('.h-inner> ul').mouseenter(function (e) {
        e.preventDefault()
        $('header').stop().animate({ height: '450px' }, 300)
    })
    $('.h-inner').mouseleave(function () { $('header').stop().animate({ height: '100px' }, 300) })

    // gotop 
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0',
        }, 1000)
    })

    // bx slider
    $(".slide-wrapper").bxSlider({
        pager: false,
        maxSlides: 3,
        slideWidth: 460,
        slideMargin: 40,
    })


    // tabmenu
    $('.tabmenu .innermenu').click(function (e) {
        e.preventDefault()  // 먼저 p 모두 on class 제거하고
        $('.tabmenu .innermenu').removeClass('on')

        // 내가 선택한 p(this) 안에있는 p에 on class가 추가
        $(this).addClass('on')

        // 해당하는 tab item 보이기
        let idx = $(this).index()
        $('.tabitems .inneritem').hide()
        $('.tabitems .inneritem').eq(idx).show()

    })
    $('.tabmenu .innermenu').eq(0).trigger('click')
    //    창 열었을 때 강제로 첫번째 탭이 클릭되어있도록 

});
