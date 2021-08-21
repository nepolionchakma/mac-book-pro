
// Handler

document.getElementById('8gb').addEventListener('click', function(){
    extraMemoryCost.innerText = '0';
    totalPriceUpdate();

});
document.getElementById('16gb').addEventListener('click', function(){
    extraMemoryCost.innerText = '180';
    totalPriceUpdate();

});
document.getElementById('256gb').addEventListener('click', function(){
    extraStorageCost.innerText = '0';
    totalPriceUpdate();

});
document.getElementById('512gb').addEventListener('click', function(){
    extraStorageCost.innerText = '100';
    totalPriceUpdate();

});
document.getElementById('1tb').addEventListener('click', function(){
    extraStorageCost.innerText = '180';
    totalPriceUpdate();

});
document.getElementById('free').addEventListener('click', function(){
    deliveryCost.innerText = '0';
    totalPriceUpdate();

});
document.getElementById('cost').addEventListener('click', function(){
    deliveryCost.innerText = '20';
    totalPriceUpdate();
});
 const mainMacPrice = '1299';


// Total Sum
 
function totalPriceUpdate (){
    
    const memoryCharge = parseFloat(extraMemoryCost.innerText);
    const storageCharge = parseFloat(extraStorageCost.innerText);
    const shipingCharge = parseFloat(deliveryCost.innerText);
    const bestMacPrice = parseFloat(mainMacPrice);
    totalMacFinalPrice.innerText = memoryCharge + storageCharge + shipingCharge + bestMacPrice;

    discountPrice.innerText =   memoryCharge + storageCharge + shipingCharge + bestMacPrice;
    
}

// Promo Code Use
document.getElementById('promo-btn').addEventListener('click', function(){
    
    
    const promoInput = document.getElementById('promo-input');
    const track = document.getElementById('tracker');

    
    const totalPrice = parseFloat(totalMacFinalPrice.innerText)
    const discountPrice = document.getElementById('discountPrice');
    
// Condition

    if(promoInput.value == 'stevekaku'){
        var discount = (totalPrice * 20) / 100;
        discountPrice.innerText = totalPrice - discount;
        track.innerText = '';

    }
    else{
       
            track.innerText = '!! Please Use valid Code or Contact us !!';
    }

    // empty value
    promoInput.value = '';
})
