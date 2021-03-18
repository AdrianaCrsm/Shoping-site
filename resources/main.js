$(function(){
    getHTML = function (productsObj)
    {
        return `
        <div class="single-product " data-id="${productsObj.id}">
            <div class="product-img-wrapper" data-id="${productsObj.id}" data-img=${productsObj.imgUrl}>
                <img src="assets/coats/${productsObj.imgUrl}">
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
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
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

});