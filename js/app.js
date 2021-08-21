
document.getElementById('memory-8gb').addEventListener('click',function(){
    updatePrice('memory-cost',0)
  })
  document.getElementById('memory-16gb').addEventListener('click',function(){
    updatePrice('memory-cost',180)
  })
  document.getElementById('storage-256gb').addEventListener('click',function(){
    updatePrice('storage-cost', 0)
  })
  document.getElementById('storage-512gb').addEventListener('click',function(){
    updatePrice('storage-cost',100)
  })
  document.getElementById('storage-1tb').addEventListener('click',function(){
    updatePrice('storage-cost',180)
  })
  document.getElementById('delivery-free').addEventListener('click',function(){
    updatePrice('delivery-cost', 0)
  })
  document.getElementById('delivery-paid').addEventListener('click',function(){
    updatePrice('delivery-cost', 20)
  })
  
  // added function 
   
  function updatePrice(element,price){
    let elementCost = document.getElementById(element);
    elementCost.innerText = price;
    // best price 
    const existingPrice = document.getElementById("best-price")
    const prceValue = parseInt( existingPrice.innerText);
  
    // memory cost 
    const memory = document.getElementById('memory-cost')
    const memoryCost = parseInt(memory.innerText);
  
    // storage cost 
    const storage = document.getElementById('storage-cost')
    const storageCost = parseInt(storage.innerText);
  
    // delivery charge
    const delivery = document.getElementById('delivery-cost')
    const deleveryCharge = parseInt(delivery.innerText);
  
    let totalExtraPrice = prceValue + memoryCost + storageCost + deleveryCharge;
    
    // total amaount 
    const amount = document.getElementById('extra-total-cost')
    amount.innerText = totalExtraPrice;
    // extra total 
    const extraTotal = document.getElementById('extra-total')
    extraTotal.innerText = amount.innerText;
   }
  
  
  // using promo code 
  
  document.getElementById('promo-code').addEventListener('click', function(){
    const promoCode = document.getElementById("promo-input")
    const promoInput = promoCode.value
    
    const amount = document.getElementById('extra-total-cost')
    const extraTotal = document.getElementById('extra-total')
    let finalAmount = parseInt(amount.innerText);
    if(promoInput == 'stevekaku'){
      const discount = (finalAmount/100)*20;
      extraTotal.innerText = finalAmount - discount;
    }
    promoCode.value = '';
  })