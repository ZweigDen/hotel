const topChoice = document.getElementById("topChoice");
const popular = document.getElementById("popular");
const getInspiration = document.getElementById("getInspiration");

let topChoiceData = [
    {
        tittle:"Hotel Aqua",
        star:5,
        img:"assets/images/top1.jpg",
        price:"2,480",
        view:2000
    },
    {
        tittle:"Mr. Kawasaki Inn",
        star:4,
        img:"assets/images/top2.jpg",
        price:"3,380",
        view:500
    },
    {
        tittle:"Weekly Paradise",
        star:4,
        img:"assets/images/top3.jpg",
        price:"4,780",
        view:470
    },
    {
        tittle:"Beast Hotel",
        star:4,
        img:"assets/images/top4.jpg",
        price:"1,980",
        view:283
    }
];
let popularData=[
    {
        tittle:"JAPAN",
        city:"Osaka",
        img:"Osaka.jpg"
    },
    {
        tittle:"JAPAN",
        city:"Kyoto",
        img:"Kyoto.jpg"
    },
    {
        tittle:"iceland",
        city:"Reykjavík",
        img:"Reykjavic.jpg"
    },
    {
        tittle:"France",
        city:"Paris",
        img:"Paris.jpg"
    },
    {
        tittle:"Italy",
        city:"Roma",
        img:"Roman.jpg"
    },
    {
        tittle:"Thailand",
        city:"Bangkok",
        img:"Bangkok.jpg"
    }
];
let getInspirationData = [
    {
        tittle:"The fifth most visited country",
        description: "Italy is the fifth most visited country in the world, with a total of 52.3 million…",
        img:"italy.jpg"
    },
    {
        tittle:"Visit Thailand for Bangkok",
        description: "Asian tourists primarily visit Thailand for Bangkok and the historical, natural, and…",
        img:"Thailand.jpg"
    },
    {
        tittle:"Lord of the Rings Tour",
        description: "The national cuisine has been described as Pacific Rim, incorporating the native Māori…",
        img:"NewZealand.jpg"
    }
]

// 繪製畫面1
function randomTopChoice(){
    let str="";
    topChoiceData.forEach(function(item){
        let starNum = "";
        for(let i=0;i<item.star;i++){
            starNum+=`<i class="fas fa-star"></i>`;
        }
        str+= `<div class="swiper-slide">
        <div class="imgBox mb-1" style='background-image: url("${item.img}")'></div>
        <h4 class="mb-1">${item.tittle}</h4>
        <div class="mb-1 d-flex align-items-center">
            ${starNum}<p class="mb-0 ml-1 textGray">${item.star}・${item.view} reviews</p>
        </div>
        <h5 class="textGray">TWD${item.price}</h5>
    </div>`
    });
    topChoice.innerHTML = str;
}
// 繪製畫面2
function randomPopular(){
    let str="";
    popularData.forEach(function(item){
        str+=`<div class="col-lg-4 col-sm-6 col-12 mb-3">
        <div class="imgBox2" style='background-image: url("assets/images/${item.img}")'>
            <div class="imgShadow px-3 d-flex justify-content-between align-items-center">
                <div>
                    <h6 class="textGray2">${item.tittle}</h6>
                    <h3 class="text-light">${item.city}</h3>
                </div>
                <i class="fas fa-chevron-down h3 text-light"></i>
            </div>
        </div>
    </div>`
    });
    popular.innerHTML = str;
}
// 繪製畫面3
function randomInspiration(){
    let str="";
    getInspirationData.forEach(function(item){
        str+=`<div class="swiper-slide">
        <div class="imgBox3 mb-3" style='background-image: url("assets/images/${item.img}")'></div>
        <h3 class="mb-1">${item.tittle}</h3>
        <p class="h4 textGray">${item.description}</p>
    </div>`
    });
    getInspiration.innerHTML = str;
}


function init(){
    randomTopChoice();
    randomPopular();
    randomInspiration();
    swiperTop();
    swiperDown();
}

window.onload = init;

// 跑馬燈swiper
  function swiperTop(){
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1.4,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }
      });
  }
  function swiperDown(){
    let swiper = new Swiper('#swiperDown', {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        breakpoints: {
            320: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }
      });
  }