// togger icon

let nav_list =document.querySelector(".nav_list")

function display(){
    nav_list.classList.toggle('show')
}

// slider

let slide_index=1;
let slide_auto_index=1;
let slider1=document.getElementById("slider1")
let slider2=document.getElementById("slider2")
let slider3=document.getElementById("slider3")

function showSlide(n){
    slide_index = slide_index + n
    // console.log(slide_index);
    display(slide_index)
}

function display (n) {
    if(n%3===1 || n%3===-1){
        slider1.style.display='block'
        slider2.style.display='none'
        slider3.style.display='none'
    }
    else if(n%3===2 || n%3===-2){
        slider1.style.display='none'
        slider2.style.display='block'
        slider3.style.display='none'
    }
    else{
        slider1.style.display='none'
        slider2.style.display='none'
        slider3.style.display='block'
    }
    
}
setInterval(autoslide,2000)

function autoslide(){
    if(slide_auto_index%3===1 || slide_auto_index%3===1){
        slider1.style.display='block';
        slider2.style.display='none';
        slider3.style.display='none';
        slide_auto_index = slide_auto_index+1
    }
    else if(slide_auto_index%3===2 || slide_auto_index%3===2){
        slider1.style.display='none';
        slider2.style.display='block';
        slider3.style.display='none';
        slide_auto_index = slide_auto_index+1
    }
    else{
        slider1.style.display='none';
        slider2.style.display='none';
        slider3.style.display='block';
        slide_auto_index = slide_auto_index+1
    }
}