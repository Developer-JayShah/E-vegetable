/*------------------------------------Navbar-----------------------------------*/
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
}) 

/*-------------------------------------Banner product---------------------------*/ 
$(document).ready(function(){
    $('.logo-slider').slick({
            slidesToShow: 1,
            sliderToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: false,
            infinite: true,
            // responsive: [
            //     {
            //     breakpoint: 768,
            //     setting: {
            //         slidesToShow: 4
            //     }
            // }, 
            // {
            //     breakpoint: 520,
            //     setting: {
            //          slidesToShow: 3
            //     }
            // }
            // ]
         
});
});
/*------------------------------------------------------------------------------*/

    var countDate = new Date('May 25, 2021 00:00:00').getTime();

    function newYear(){
        var now = new Date().getTime();
        gap = countDate - now;
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 24;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / second);

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('sec').innerText = s;
    }

    setInterval(function(){
        newYear();
    }, 1000)
/*-------------------------------------------------------------------------------*/
$(document).ready(function(){
    $('.ban-sliders').slick({
            slidesToShow: 1,
            sliderToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: false,
            infinite: true,
            // responsive: [
            //     {
            //     breakpoint: 768,
            //     setting: {
            //         slidesToShow: 4
            //     }
            // }, 
            // {
            //     breakpoint: 520,
            //     setting: {
            //          slidesToShow: 3
            //     }
            // }
            // ]
         
});
});  