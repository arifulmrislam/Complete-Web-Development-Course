document.getElementById("btn-pay").addEventListener("click", function () {
    

    const currentPrice = document.getElementById("current-price");
    const currentPriceValueString = currentPrice.innerText;
    const currentPriceValue = parseFloat(currentPriceValueString);
    const currentDiscountValue = 0.7 * currentPriceValue;
    const discountPrice = document.getElementById("discount-price");
    discountPrice.innerText = currentDiscountValue;
});