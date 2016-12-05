function slick() {
        var carouselType = $('.carousel').data('carouseltype');
        //  console.log('carouselType = ' + carouselType);
        var perPageArray = ['team','logos'];
        perPageArray['logos'] = [7,5,3,3,1,1];
        perPageArray['team'] = [5,3,3,1,1,1];
      $(".carousel").slick({
        asNavFor: '.carousel_text',
        useCSS: true,
        useTransform: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        speed: 600,
        slidesToShow: perPageArray[carouselType][0],
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: perPageArray[carouselType][1]
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: perPageArray[carouselType][2]
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: perPageArray[carouselType][3]
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: perPageArray[carouselType][4]
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: perPageArray[carouselType][5]
                }
            },
        ]

      });
      $('.carousel_text').slick({
        asNavFor: '.carousel',
        fade: true,
        speed: 1000,
        cssEase: 'ease',
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });
      $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//      console.log(nextSlide);
        carouselUpdateCaseText(nextSlide);
        carouselConnectorRefresh()
    });
    }
function carouselConnectorRefresh() {
    $('.connector-refresh').addClass('hide');
    $('.connector h4').addClass('hide');
    setTimeout(function(){
        $('.connector-refresh').removeClass('hide');
    },50);
    setTimeout(function(){
        $('.connector h4').removeClass('hide');
    },300);

}

// CASE STUDY BODY TEXT
function carouselUpdateCaseText(thisItem) {
//  console.log(thisItem);
    $('.carousel-target').removeClass('show');
    $('.carousel-target[data-item=' + thisItem + ']').addClass('show'); 
    setTimeout(function(){
        $('.carousel-target').removeClass('relative');
        $('.carousel-target[data-item=' + thisItem + ']').addClass('relative'); 
    },500);
};

//判断当前元素是否可见
function inView(){
    $(".fadeout,.fadeGroup").inViewport(function(){
              // Callback for when the element appears in the viewport.
                $(this).addClass("in");
    }, function(){
              // Callback for when the element disappears from the viewport.
        $(this).removeClass("in");
    });   
}
function countUp(thisElement) {

 // console.log(thisElement);

    var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '' 
    };

//  var thisElement = $('#' + countVisitors + '');
    var thisID = $(thisElement).attr('id');
    var thisStartVal = $(thisElement).data('startval');
    var thisEndVal = $(thisElement).data('endval');
    var thisDecimals = $(thisElement).data('decimals');
    var thisDuration = $(thisElement).data('duration');
//  var numAnim = new CountUp(thisID, 0, thisEndVal, 0, thisDuration, options);
    var numAnim = new CountUp(thisID, thisStartVal, thisEndVal, thisDecimals, thisDuration, options);

// console.log(thisStartVal);
// console.log(thisEndVal);

    // on completion, go to next element, unless it's the last

    if (thisID == 'countProtocols') {
        numAnim.start(function() {
            $('#countTransactions').parent().addClass('in');
            countUp(countTransactions);
        });

    } else if (thisID == 'countTransactions') {
        numAnim.start(function() {
            $('#countDays').parent().addClass('in');
            countUp(countDays);
        });

    } else {
        numAnim.start();
    }

}

$(function(){
    var countProtocols = $("#countProtocols"),
        countTransactions = $("#countTransactions"),
        countDays = $("#countDays");
    countProtocols.inViewport(function(){
        console.log(!countProtocols.hasClass("one"))
        if(!countProtocols.hasClass("one")){
            countProtocols.addClass("one")
            countUp(countProtocols);  
        }
       
    },function(){

    }) 
    inView();
    slick();
})