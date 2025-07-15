// function seerToMon(seer){

//     if(seer < 0){
//         return 'wrong input';
//     }
//     const mon = seer / 40;
//     return mon;
// }

// console.log(seerToMon(100));
// console.log(seerToMon(-10));

// function totalSales(shirt,pant,show){
    
//     // const shirtPrice = shirt * 100;
//     // const pantPrice = pant * 200;
//     // const showPrice = show * 500;
//     if(shirt < 0 || pant < 0 || show < 0){
//         return 'wrong input';
//     }
//     const totalPrice = (shirt * 100 + pant * 200 + show * 500);

//     return totalPrice;
// }

// console.log(totalSales(5, 10, 15));

function deliveryCost(totalShirt){
    if(totalShirt>= 0 && totalShirt <= 100){
        return totalShirt * 100;
    }else if(totalShirt >= 0 && totalShirt <= 200){
        return ((totalShirt - 100)*80 + 100*100); 
    }else if(totalShirt >= 0 && totalShirt > 200){
        const total3 = totalShirt - 200;
        const total4 = totalShirt - (total3 + 100);
        const total5 = totalShirt - (total4 + total3);
        return (total3*50 + total4*80 + total5*100);
    }else{
        return 'wrong input';
    }
}

console.log(deliveryCost(-201));