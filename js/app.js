function updateCost(isDefult,isPaid,is512GB,is1TB,isDelivery,id){
    if(isDefult){
        const productId = document.getElementById(id);
        productId.innerText = 0;
    }
    else if(isPaid){
        const extraMemoryCost = document.getElementById(id);
        extraMemoryCost.innerText = 180;
    }
    else if(is512GB){
        const extraMemoryCost = document.getElementById(id);
        extraMemoryCost.innerText = 100;
    }
    else if(is1TB){
        const extraMemoryCost = document.getElementById(id);
        extraMemoryCost.innerText = 180;
    }
    else{
        const extraMemoryCost = document.getElementById(id);
        extraMemoryCost.innerText = 20;
    }
    //***********update total Price***********------------------------
    totalPrice()
}

//******************freeMemory(8GB) click handeler
const freeMemory =document.getElementById('free-memory');
freeMemory.addEventListener('click',function(){
   const defultMemory = updateCost(true,false,false,false,false,'memory-cost')
})
//******************16GB Memory click handeler
const paidMemory =document.getElementById('paid-memory');
paidMemory.addEventListener('click',function(){
    const updateMemory = updateCost(false,true,false,false,false,'memory-cost')
    console.log(memoryPrice);   
})
//******************free storage(256GB) click handeler-----------------------------------------
const freeStorage =document.getElementById('free-storage');
freeStorage.addEventListener('click',function(){
    const defultStorage =updateCost(true,false,false,false,false,'storage-cost');
})
//******************512GB storage click handeler------------------------------------------------
const paidStorage1 =document.getElementById('paid-storage1');
paidStorage1.addEventListener('click',function(){
    const updateStorage1 =updateCost(false,false,true,false,false,'storage-cost')
})
//******************1TB storage click handeler--------------------------------------------------
const paidStorage2 =document.getElementById('paid-storage2');
paidStorage2.addEventListener('click',function(){
    const updateStorage2 =updateCost(false,false,false,true,false,'storage-cost')
})
//******************free delivery click handeler------------------------------------------------
const freeDelivery =document.getElementById('free-delivery');
freeDelivery.addEventListener('click',function(){
    const freeDelivery = updateCost(true,false,false,false,false,'delivery-cost')
})
//******************paid delivery click handeler------------------------------------------------
const paidDelivery =document.getElementById('paid-delivery');
paidDelivery.addEventListener('click',function(){
    const paidDelivery = updateCost(false,false,false,false,true,'delivery-cost')
})

function totalPrice(){
    const extraMemoryCost =document.getElementById('memory-cost');
    const memoriCostAmout = parseFloat(extraMemoryCost.innerText);
    
    const extraStrogeCost =document.getElementById('storage-cost');
    const StorgeCostAmout = parseFloat(extraStrogeCost.innerText);

    const deliveryCost =document.getElementById('delivery-cost');
    const deliveryCostAmout = parseFloat(deliveryCost.innerText);

    const totalPrice = document.getElementById('total-cost');
    const totalAllPrice = memoriCostAmout+StorgeCostAmout+deliveryCostAmout+1299;
    totalPrice.innerText=totalAllPrice;

    const grandTotal =document.getElementById('grand-total');
    grandTotal.innerText =totalAllPrice;
}
function cuppon(){
const grandTotal =document.getElementById('grand-total');
const grandTotalAmount = parseFloat(grandTotal.innerText);
const cuponFild = document.getElementById('cuppon-field');
const cupponCode = cuponFild.value;
if(cupponCode.toLowerCase()=='stevekaku'.toLowerCase()){
    const discount = (grandTotalAmount/100)*20;
    grandTotal.innerText = grandTotalAmount-discount
            }
            cuponFild.value='';    
}
document.getElementById('apply-cupon').addEventListener('click',function(){
    cuppon();
})