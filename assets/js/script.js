function displayCards(status){
    let productDetails = JSON.parse(details);
    
    let insert = "";
    currentItems(status);
    productDetails.map((card) =>{
        
        if(card.filter === status)
        {
            let discountedPrice = discount(card.price, card.disc);
            
            let stars = "";

            stars = starRepeat(card.star);

            insert +=  `<div class="swiper-slide">
                            <div class="card rounded-0" style="width: 18rem;">
                                <img src="${card.img}" class="card-img-top rounded-0" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${card.name}</h5>
                                    <p class="card-text">₹ ${discountedPrice} <del>${card.price}</del> (${card.disc}% off)</p>
                                    <p>${stars}<p>
                                    <button type="button" class="btn btn-white border">VIEW</button>
                                </div>
                            </div>
                        </div>`;
        }
    });

    document.getElementById('cards-container').innerHTML = insert;
    resetSwiper();
}
function currentItems(status){
    const av = document.getElementById('available');
    const up = document.getElementById('upcoming');
    const mis = document.getElementById('missed');
    if(status == "Available"){
        av.style.color = 'white';
        av.style.backgroundColor = 'black';
        up.style.color = 'black';
        up.style.backgroundColor = 'white';
        mis.style.color = 'black';
        mis.style.backgroundColor = 'white';
    }
    else if(status == "Upcoming"){
        av.style.color = 'black';
        av.style.backgroundColor = 'white';
        up.style.color = 'white';
        up.style.backgroundColor = 'black';
        mis.style.color = 'black';
        mis.style.backgroundColor = 'white';
    }
    else if(status == "Missed"){
        av.style.color = 'black';
        av.style.backgroundColor = 'white';
        up.style.color = 'black';
        up.style.backgroundColor = 'white';
        mis.style.color = 'white';
        mis.style.backgroundColor = 'black';
    }
}
function discount(price, disc){
    return price - (price * disc/100);
}
function starRepeat(star){
    let stars = "";

    for(let i = 1; i <= 5; i++){
        if(i <= star)
            stars += '<i class="bi bi-star-fill" style="color:black;"></i>';
        else
            stars += '<i class="bi bi-star"></i>';
    }
    return stars;
}