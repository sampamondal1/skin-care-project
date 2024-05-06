let nav_list =document.querySelector(".nav_list")

function display(){
    nav_list.classList.toggle('show')
}



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



$(".ftoggle").on("click",function(){
    $('.slide div').fadeToggle(1500)
})

