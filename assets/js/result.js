const recommended = document.getElementById("recommended");

let recommData = [
    {
        tittle:"Rachada Hotel",
        img:"Rachada1.jpg",
        distance: 2,
        city:"Rachada, Bangkok",
        room:"Deluxe Double Room",
        guests:2,
        bed:1,
        size:"Queen size",
        deals:["Free cancellation","No prepayment"],
        price:"1,980"
    },
    {
        tittle:"Forever Place",
        img:"Phaya.jpg",
        distance: 2.9,
        city:"Phaya Thai, Bangkok",
        room:"Standard Double Room",
        guests:2,
        bed:1,
        size:"Queen size",
        deals:["Free cancellation"],
        price:"1,680"
    },
    {
        tittle:"LUV Hotel",
        img:"Bangkapi.jpg",
        distance: 14,
        city:"Bangkapi, Bangkok",
        room:"Standard Double Room",
        guests:2,
        bed:1,
        size:"Queen size",
        deals:["Free cancellation"],
        price:"2,460"
    },
    {
        tittle:"WOW Life Hotel",
        img:"Chatuchack1.jpg",
        distance: 12,
        city:"Chatuchack, Bangkok",
        room:"Standard Double Room",
        guests:2,
        bed:1,
        size:"Queen size",
        deals:["No prepayment"],
        price:"2,240"
    },
    {
        tittle:"Celebrity Palace",
        img:"Chatuchack2.jpg",
        distance: 8,
        city:"Chatuchack, Bangkok",
        room:"Standard Double Room",
        guests:2,
        bed:1,
        size:"Queen size",
        deals:["No prepayment"],
        price:"1,890"
    },
    {
        tittle:"RR Space",
        img:"RangRak.jpg",
        distance: 4.4,
        city:"Rang Rak, Bangkok",
        room:"Standard Double Room",
        guests:2,
        bed:1,
        size:"King size",
        deals:["Free cancellation"],
        price:"2,090"
    },
    {
        tittle:"Bangkok Hostel",
        img:"Watana1.jpg",
        distance: 6,
        city:"Watana, Bangkok",
        room:"Twin Room",
        guests:2,
        bed:2,
        size:"2twins",
        deals:["Free cancellation", "No prepayment"],
        price:"880"
    },
    {
        tittle:"Watana First Hostel",
        img:"Watana2.jpg",
        distance: 6,
        city:"Watana, Bangkok",
        room:"Twin Room",
        guests:2,
        bed:2,
        size:"2twins",
        deals:["Free cancellation"],
        price:"790"
    },
    {
        tittle:"DD Space",
        img:"DinDaeng1.jpg",
        distance: 7,
        city:"Watana, Bangkok",
        room:"Standard Double Room",
        guests:2,
        bed:1,
        size:"Queen size",
        deals:[],
        price:"1,240"
    },
    {
        tittle:"Dininn Hotel",
        img:"DinDaeng2.jpg",
        distance: 7,
        city:"Watana, Bangkok",
        room:"Deluxe Twin Room",
        guests:2,
        bed:2,
        size:"2twins",
        deals:[],
        price:"3450"
    }
];

function randomRecom(){
    let str="";
    recommData.forEach(function(item){
        str+=`<a href="detail.html" class="d-flex pb-3 mb-3 border-bottom text-dark text-decoration-none">
        <div class="recommBox" style="background-image: url('assets/images/${item.img}');"></div>
        <div class="d-sm-flex">
        <div class="p-sm-2 p-1">
        <h6 class="text-primary">${item.city}<span class="textGray d-none d-sm-block">・${item.distance} km from center</span></h6>
        <h3 class="mb-2">${item.tittle}</h3>
        <h5 class="mb4">${item.room}</h5>
        <h6 class="textGray mb-sm-3">${item.guests} guests・${item.bed} bed (${item.size})</h6>
        <div class="d-flex textGray">
            <h6 class="px-1 py4 radius bg-primary2 d-none d-sm-block">Free cancellation</h6>
            <h6 class="px-1 py4 radius bg-primary2 ml4 d-none d-sm-block">No prepayment</h6>
        </div>
    </div>
    <div class="p-sm-2 p-1 d-flex flex-column justify-content-between align-items-sm-end ml-auto">
        <div class="d-flex">
            <i class="fas fa-star h6"></i><i class="fas fa-star h6"></i><i class="fas fa-star h6"></i><h6 class="textGray ml4">4.0 (283)</h6>
        </div>
        <div>
            <h6 class="textGray text-sm-right">per night</h6>
            <h3>TWD ${item.price}</h3>
        </div>
    </div>
        </div>
    </a>`;
    })
    recommended.innerHTML = str;
}

function init(){
    randomRecom();
}

window.onload = init;