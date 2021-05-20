$(document).ready(function(){
    $('.brand-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            arrows: false,
            autoplay: true,
            speed: 1200,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            infinite: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    speed: 500,
                    slidesToScroll: 1,
                    
                  }
                },
                {
                    breakpoint: 780,
                    settings: {
                        speed: 400,
                      dots: false
                    }
                  },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    speed: 200,
                    slidesToScroll: 1,
                    dots: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    speed: 200,
                    slidesToScroll: 1,
                    dots: false
                  }
                }
            ]
         
});
});