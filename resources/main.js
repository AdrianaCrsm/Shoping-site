$(function(){
    getHTML = function (productsObj)
    {
        return `
        <div class="single-product " data-id="${productsObj.id}">
            <div class="product-img-wrapper" data-id="${productsObj.id}" data-img=${productsObj.imgUrl}>
                <img src="assets/coats/${productsObj.imgUrl}" class="store-img">
                <span class="store-item-icon">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                </span>
            </div>
            <div class="product-informations">
                <div class="product-title">${productsObj.name}</div>
                <div class="product-price">${productsObj.currency}${productsObj.price}</div>
            </div>
        </div>
        `;
    }
    getOverlayHTML = function(overlayObj){
        return `<div class="overlay-info-wrapper">
        <div class="title-info">${overlayObj.name}</div>
        <div class="price-info">$${overlayObj.price}</div>
        <div class="title-size">Your Size</div>
        <div class="size-info">
            <div class="size-btn ">S</div>
            <div class="size-btn">M</div>
            <div class="size-btn">L</div>
            <div class="size-btn">XL</div>
        </div>
        <div class="buttons-info">
            <div class="selected">
                Details
            </div>
            <div>
                Order
            </div>
            <div>
                Payment
            </div>
        </div>
        <div class="comp-info-wrapper">
            <div class="comp-info">
                <div>Composition</div>
                <div>Country</div>
            </div>
            <div class="comp-info grey">
                <div>${overlayObj.composition}</div>
                <div>${overlayObj.country}</div>
            </div>
        </div>
        <div class="more-info">
            <div>Care</div>
            <div class="grey">${overlayObj.care}</div>
        </div>
        <div class="add-button">Add to Cart</div>
    </div>
        `;
    }
    $('.cart-btn').click(function(){
        $('#cart-info').toggleClass("show-cart,hide-cart");
    });

    for(let i=0; i<products.coats.length;i++){
        productsObj=products.coats[i];
        productsHTML = getHTML(productsObj);
        $('.products-wrapper').append(productsHTML);
    }

    $('.product-img-wrapper').click(function(){
        $('.overlay-img-wrapper').css({backgroundImage:"url(assets/coats/" + $(this).data('img') + ")"});
        let pId= $(this).data('id');
        overlayHTML= "" ;
        for(let j=0; j<products.coats.length;j++){
            if(products.coats[j].id==pId)
            // nu ai nevoie sa recreezi modalul de fiecare data cand dai click. poti sa folosesti structura deja adaugata in html si cu selectiile de rigoare sa adaugi datele dinamic
            overlayHTML = getOverlayHTML(products.coats[j]); 
        }
        console.log(pId);
        $('.overlay-img-wrapper').html(overlayHTML);
        $('.overlay').fadeIn();
    });
    $('.overlay-img-wrapper').click(function(event){
        event.stopPropagation();
    });
    $('.close-overlay').click(function(){
       $('.overlay').fadeOut();
    });
    
   /* var btnSize=$('.size-btn');
    for(var i=0;i<btnSize.length;i++){
        btnSize[i].click(function(){
            var sizeElemSelected=$('.active');
            if(sizeElemSelected.length > 0)
                sizeElemSelected[0]=sizeElemSelected[0].removeClass("active");
            btnSize[i].addClass('active');
        });
    }*/
    $('body').on('click','size-btn',function(){
        $('.size-btn.active').removeClass('active');
        $(this).addClass('active');
    })
});