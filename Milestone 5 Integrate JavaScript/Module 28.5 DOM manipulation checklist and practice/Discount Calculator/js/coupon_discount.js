document.getElementById("btn-discount").addEventListener('click',function(){

    const originalPrice = document.getElementById("original-price");
    const originalPriceValueString = originalPrice.innerHTML;
    const originalPriceValue = parseFloat(originalPriceValueString);
    const originalPriceValueDiscount =  0.7 * originalPriceValue;
    const couponText = document.getElementById("coupon-field");
    const couponTextValue = couponText.value;
    const couponDiscount = document.getElementById("coupon_disc");
    couponText.value = "";
    if (couponTextValue === 'DISC30') {
        couponDiscount.innerText = originalPriceValueDiscount;
    } else {
        couponDiscount.innerText = originalPriceValue;
        alert('Have a look coupon code')
    }
})