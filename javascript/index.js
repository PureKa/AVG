$(document).ready(function(){
    $('.cl-muavg').click(function(){
        $('.mua-avg').slideToggle()
    })
    // chill
    $('.GHTB').click(function(){
        $('.DRGHTB').slideToggle()
    })

    $('.vavg').click(function(){
        $('.vavg1').slideToggle()
    })

    $('.htavg').click(function(){
        $('.htavg2').slideToggle()
    })
})

const openm = document.querySelector('.open')
        ,menuopen = document.querySelector('.container-menu-top2')
        ,maino = document.querySelector('.main-overplay')

    openm.addEventListener('click' , toggle);
    maino.addEventListener('click' , toggle);


    function toggle(){
        menuopen.classList.toggle('active-open')
        document.body.classList.toggle('hiden')
        maino.classList.toggle('main')
    }

    // slider show

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("item-slider");
      if (n > slides.length) {slideIndex = 1}

      if (n < 1) {slideIndex = slides.length}

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      if (slideIndex > slides.length) {slideIndex = 1}

      slides[slideIndex-1].style.display = "block"; 
      
    }
    // date
    var date = new Date()
        ,getMoth = date.getMonth() + 1,
        getDate = date.getDate() + '/' + getMoth + '/' + date.getFullYear()

        ,dataDate = getDate
    ,renderDate = document.querySelectorAll('#date')
    getDay()
    function getDay(){
        for(var i = 0; i<renderDate.length;i++){
            renderDate[i].innerHTML = dataDate
        }
    }
    // slider 2

    const rag = document.querySelector('.carosel')
        let isDrag = false;
        let prevPageX ;
        let prevScrollLeft;

        let preNext = document.querySelectorAll('button i')
        ,frishWidth = rag.querySelector('.list-item-slider-2').offsetWidth;

        
        preNext.forEach(function(icon){
            icon.addEventListener('click', ()=>{
                rag.scrollLeft += icon.id === "left" ? -frishWidth : frishWidth;
            })
        })

        

        function dragStar(e){
            isDrag = true;
            prevPageX = e.pageX
            prevScrollLeft = rag.scrollLeft
        }

        function drag(e){
            if(!isDrag){return;}
            e.preventDefault();
            let positionDriff = e.pageX - prevPageX
            rag.scrollLeft = prevScrollLeft - positionDriff
        }

        function dragStop() {
            isDrag = false
        }
       
        rag.addEventListener('mousemove', drag)
        rag.addEventListener('mousedown', dragStar)
        rag.addEventListener('mouseup', dragStop)
//  body 3
var labelB3 = document.querySelector('.item-list-label')
, chevron = document.querySelector('.fa-chevron-up')
,dropdowLabel = document.querySelector('.drop-dow-label')
labelB3.addEventListener('click', ()=>{
    chevron.classList.toggle('activer-b3')
    dropdowLabel.classList.toggle('drop-dowlabel')
})


var carousel = document.querySelector('.contai-item-carousel')
var isDrang = false, isPageX, isScollLeft;


carousel.addEventListener('mousemove',drang);
carousel.addEventListener('mousedown',drangStar);
carousel.addEventListener('mouseup',drangStop);


function drangStar(e){
    isDrang = true;
    isPageX = e.pageX;
    isScollLeft = carousel.scrollLeft;
}
function drang(e){
    if(!isDrang){return}
    e.preventDefault()
    let positionDrif = e.pageX - isPageX
    carousel.scrollLeft = isScollLeft - positionDrif
}

function drangStop(){
    isDrang = false;
}
