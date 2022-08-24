//MODE DARK - LIGHT
const btn = document.querySelector(".icon-tabler-moon");
const text = document.getElementById("mode");
const buy = document.querySelector(".buy-now");
const nikeLogoBlack = document.querySelector('.nike-logo-black')
const nikeLogo = document.querySelector('.nike-logo')



if (localStorage.getItem("theme") === "") {
  localStorage.setItem("theme", "light");
}

const themeUsed = localStorage.getItem("theme");

if (themeUsed === "dark") {
  document.body.style.background = "#000000";
  text.style.color = "#ffffff";
  buy.style.color = "#ffffff";
  nikeLogo.style.display = 'flex'
  nikeLogoBlack.style.display = 'none'
 

} else {
  document.body.style.background = "#ffffff";
  text.style.color = "#000000";
  buy.style.color = "#000000";
  nikeLogo.style.display = 'none'
  nikeLogoBlack.style.display = 'flex'
}

btn.addEventListener("click", () => {
  const themeUsed = localStorage.getItem("theme");

  if (themeUsed === "dark") {
    localStorage.setItem("theme", "light");
    document.body.style.background = "#000000";
    text.style.color = "#ffffff";
    buy.style.color = "#ffffff";
    nikeLogo.style.display = 'flex'
    nikeLogoBlack.style.display = 'none'
   
  } else {
    localStorage.setItem("theme", "dark");
    document.body.style.background = "#ffffff";
    text.style.color = "#000000";
    buy.style.color = "#000000";
    nikeLogo.style.display = 'none'
    nikeLogoBlack.style.display = 'flex'
  }
});

// Stock on local storage
let reactInfinity = 1
let leBron19= 1
let nikePegasus = 1
let jordanSeries = 1
//localStorage.setItem('reactInfinity', reactInfinity)
/* 

localStorage.setItem('leBron19', leBron19)


localStorage.setItem('nikePegasus', nikePegasus)


localStorage.setItem('jordanSeries', jordanSeries)
*/

// Add to cart
const cartContainer = document.querySelector('.cart-container-content');
const cartEmpty = document.querySelector('.cart-empty');
const addCart1 = document.querySelector('.plus1');
const addCart2 = document.querySelector('.plus2');
const addCart3 = document.querySelector('.plus3');
const addCart4 = document.querySelector('.plus4');
const navItemsQty = document.querySelector(".counter-item");
const itemsQty = document.querySelector(".items-qty");
const cartTotal = document.querySelector(".cart-total");



const cartFull = document.querySelectorAll('.cart-full');
const cardArticulo1 = document.querySelector('.articulo1');
const cartAmountNumber = document.querySelectorAll('.cart-amount-number');


let units = ' units'
let subtotalCounter = 0
// ARTICLE 1
addCart1.addEventListener('click', () => {
 
  if(reactInfinity < 5){
    cartTotal.textContent = `$${ reactInfinity * 140}.00`;
    navItemsQty.textContent++
    reactInfinity+=1
    itemsQty.textContent++
    
  
  }else if(reactInfinity == 5){
    itemsQty.textContent++
    navItemsQty.textContent++
    addCart1.style.display = 'none';
    reactInfinity-=1
    alert('There is not more stock')
  
  } else if (reactInfinity < 5){
    reactInfinity+=1
    itemsQty.textContent++
    addCart1.style.display = 'flex';
    navItemsQty.textContent++
  }
})
// ARTICLE 2
addCart2.addEventListener('click', () => {
  if(leBron19 < 5){
    cartTotal.textContent = `$${ leBron19 * 160}.00`;
    navItemsQty.textContent++
    leBron19+=1
    itemsQty.textContent++
  
  }else if(leBron19 == 5){
    itemsQty.textContent++
    navItemsQty.textContent++
    addCart2.style.display = 'none';
    leBron19-=1
    alert('There is not more stock')
  
  } else if (leBron19 < 5){
    itemsQty.textContent++
    leBron19+=1
    addCart2.style.display = 'flex';
    navItemsQty.textContent++
  }
})
// ARTICLE 3
addCart3.addEventListener('click', () => {
  if(nikePegasus < 5){
    itemsQty.textContent++
    navItemsQty.textContent++
    nikePegasus+=1
  
  }else if(nikePegasus == 5){
    itemsQty.textContent++
    navItemsQty.textContent++
    addCart3.style.display = 'none';
    nikePegasus-=1
    alert('There is not more stock')
  
  } else if (nikePegasus < 5){
    itemsQty.textContent++
    nikePegasus+=1
    addCart3.style.display = 'flex';
    navItemsQty.textContent++
  }
})
// ARTICLE 4
addCart4.addEventListener('click', () => {
  if(jordanSeries < 5){
    itemsQty.textContent++
    navItemsQty.textContent++
    jordanSeries+=1
  
  }else if(jordanSeries == 5){
    itemsQty.textContent++
    navItemsQty.textContent++
    addCart4.style.display = 'none';
    jordanSeries-=1
    alert('There is not more stock')
  
  } else if (jordanSeries < 5){
    
    jordanSeries+=1
    addCart4.style.display = 'flex';
    navItemsQty.textContent++
  }
})
//Cart
const cart = document.querySelector(".counter-item-cart");
const cartArea = document.querySelector(".cart-container");
const closeCart = document.querySelector(".cart-close");

cart.addEventListener("click", () => {
  cartArea.style.display = "flex";
});

closeCart.addEventListener("click", () => {
  cartArea.style.display = "none";
});
 /*
  cartArea.style.display = 'flex';
  

  if(reactInfinity < 5){
    cartFull.style.display ="flex"
    articulo1.style.display = 'flex'   
    itemsQty.textContent ++;
    navItemsQty.textContent ++
    subtotalCounter++
    cartSubtotal[0].textContent = `Subtotal: $${subtotalCounter * 140}.00`;
    cartAmountNumber[0]. textContent = navItemsQty.textContent + units 
    if(reactInfinity == 5 ){
      alert('There is not more stock')
      cartSubtotal[0].textContent = `Subtotal: $${reactInfinity * 150}.00`;
      cartTotal.textContent = `$${ reactInfinity * 140 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;  
    } else if(reactInfinity == 5  && itemsQty.textContent == 5){
      
      addCart1.style.display = 'none'
      
    }
 
    cartContainer.style.display = 'flex' 
    cartEmpty.style.display = 'none';
    cartFull.style.display = 'flex'
    
  }
   */

/*
addCart2.addEventListener('click', () => {
    cartArea.style.display = 'flex';
   
    if(counterNikeStreet < 5){
       articulo2.style.display = 'flex' 
        itemsQty.textContent ++;
        navItemsQty.textContent ++
        subtotalCounter++
        cartSubtotal.textContent = `Subtotal: $${subtotalCounter * 230}.00`;
        cartAmountNumber[1].textContent = counterNikeStreet + ' units'
        if(counterNikeStreet == 5){
            alert('There is not more stock')
        }
        cartSubtotal[1].textContent = `Subtotal: $${counterNikeStreet * 230}.00`;
        cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
        
    }else if(counterNikeStreet == 5){
    
      addCart2.style.display = 'none'
     
    }
    cartContainer.style.display = 'flex' 
    cartEmpty.style.display = 'none';
    cartFull.style.display = 'flex'
})
addCart3.addEventListener('click', () => {
    cartArea.style.display = 'flex';
 
    if(counterNikeRun3 < 5){
      articulo4.style.display = 'flex' 
        itemsQty.textContent ++;
        navItemsQty.textContent ++
        cartAmountNumber[3].textContent = counterNikeRun3 + ' units'
        if(counterNikeRun3 == 5){
            alert('There is not more stock')
        }
        cartSubtotal[3].textContent = `Subtotal: $${counterNikeRun3 * 110}.00`;
        cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;   
    } else if(counterNikeRun3 == 5){
      
      addCart3.style.display = 'none'
      
    }
    cartContainer.style.display = 'flex' 
    cartEmpty.style.display = 'none';
    cartFull.style.display = 'flex'
})

addCart4.addEventListener('click', () => {
    cartArea.style.display = 'flex';
    
    if(counterNikeSwift2 < 5){
      articulo4.style.display = 'flex' 
        itemsQty.textContent ++;
        navItemsQty.textContent ++
        cartAmountNumber[2].textContent = counterNikeSwift2 + ' units'
        
        if(counterNikeSwift2 == 5){
            alert('There is not more stock')
        }
        cartSubtotal[2].textContent = `Subtotal: $${counterNikeSwift2 * 150}.00`;
        cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
        
    }else if(counterNikeSwift2 == 5){
     
      addCart4.style.display = 'none'
      
    }
    cartContainer.style.display = 'flex' 
    cartEmpty.style.display = 'none';
    cartFull.style.display = 'flex'
})

addCart5.addEventListener('click', () => {
    cartArea.style.display = 'flex';
    
    if(counterNikeTacoJay < 5){
      articulo5.style.display = 'flex' 
        itemsQty.textContent ++;
        navItemsQty.textContent ++
        cartAmountNumber[4].textContent = counterNikeTacoJay + ' units'
        if(counterNikeTacoJay == 5){
            alert('There is not more stock')
        }
        cartSubtotal[4].textContent = `Subtotal: $${counterNikeTacoJay * 180}.00`;
        cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
        
    }else if(counterNikeTacoJay == 5){
      
      addCart5.style.display = 'none'
      
    }
    cartContainer.style.display = 'flex' 
    cartEmpty.style.display = 'none';
    cartFull.style.display = 'flex'
})
*/
// trash 
const trash = document.querySelectorAll('.trash')
const articulo1 = document.querySelector('.articulo1')
const articulo2 = document.querySelector('.articulo2')
const articulo3 = document.querySelector('.articulo3')
const articulo4 = document.querySelector('.articulo4')
const articulo5 = document.querySelector('.articulo5')


trash[0].addEventListener('click', () => {
  articulo1.style.display = 'none'
})
trash[1].addEventListener('click', () => {
  articulo2.style.display = 'none'
})
trash[2].addEventListener('click', () => {
  articulo3.style.display = 'none'
})
trash[3].addEventListener('click', () => {
  articulo4.style.display = 'none'
})
trash[4].addEventListener('click', () => {
  articulo5.style.display = 'none'
})

// SHOW PRODUCTS
//const area = document.querySelector(".container-img");
const card = document.querySelectorAll(".box");
const showAll = document.querySelector(".btn-show-all");
const showNikeCasual = document.querySelector(".btn-show-casual");
const showNikeRun = document.querySelector(".btn-show-run");

showAll.addEventListener("click", () => {
  card[0].style.display = "flex";
  card[1].style.display = "flex";
  card[2].style.display = "flex";
  card[3].style.display = "flex";
  card[4].style.display = "flex";
});

// FILTERED BY TYPE CASUAL
showNikeCasual.addEventListener("click", () => {
  card[0].style.display = "flex";
  card[1].style.display = "flex";
  card[2].style.display = "none";
  card[3].style.display = "none";
  card[4].style.display = "flex";
});

// FILTERED BY TYPE RUN
showNikeRun.addEventListener("click", () => {
  card[0].style.display = "none";
  card[1].style.display = "none";
  card[2].style.display = "flex";
  card[3].style.display = "flex";
  card[4].style.display = "none";
});




// Counter items
const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");

const cartSubtotal = document.querySelectorAll(".cart-subtotal");

const cartCheckout = document.querySelector(".cart-checkout");


//counter article
let counterNikeAirMax = 0;
let counterNikeStreet = 0;
let counterNikeSwift2 = 0;
let counterNikeRun3 = 0;
let counterNikeTacoJay = 0;

// Plus Nike Air Max
plusBtn[0].addEventListener("click", () => {
  cartFull.style.display = 'flex'
  counterNikeAirMax++;
  plusBtn[0].previousElementSibling.textContent = `${counterNikeAirMax} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[0].textContent = `Subtotal: $${counterNikeAirMax * 150}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeAirMax >= 5) {
    alert("Sorry there is not more stock");
    
    counterNikeAirMax = 5;
    plusBtn[0].previousElementSibling.textContent = `5 units`;
    itemsQty.textContent = 5 + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent = 5 + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[0].textContent = `Subtotal: $750.00`;
    cartTotal.textContent = `$${750 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
  }
});

// Minus Nike Air Max
minusBtn[0].addEventListener("click", () => {
  
  counterNikeAirMax--;
  plusBtn[0].previousElementSibling.textContent = `${counterNikeAirMax} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 +counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[0].textContent = `Subtotal: $${counterNikeAirMax * 150}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeAirMax < 0) {
   
    counterNikeAirMax = 0;
    plusBtn[0].previousElementSibling.textContent = `0 units`;
    itemsQty.textContent = counterNikeStreet +counterNikeSwift2 +counterNikeRun3 +counterNikeTacoJay;
    navItemsQty.textContent =  counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[0].textContent = `Subtotal: $0.00`;
    cartTotal.textContent = `$${counterNikeStreet * 230 +counterNikeSwift2 * 150 +counterNikeRun3 * 110 +counterNikeTacoJay * 180}.00`;
  }

});

// Plus Nike Street
plusBtn[1].addEventListener("click", () => {
  
  counterNikeStreet++;
  plusBtn[1].previousElementSibling.textContent = `${counterNikeStreet} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[1].textContent = `Subtotal: $${counterNikeStreet * 230}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeStreet >= 5) {
    alert("Sorry there is not more stock");
    
    counterNikeStreet = 5;
    plusBtn[1].previousElementSibling.textContent = `5 units`;
    itemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[1].textContent = `Subtotal: $1150.00`;
    cartTotal.textContent = `$${1150 + counterNikeAirMax * 150 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
  }
});

// Minus Nike Street
minusBtn[1].addEventListener("click", () => {
  
  counterNikeStreet--;
  plusBtn[1].previousElementSibling.textContent = `${counterNikeStreet} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 +counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[1].textContent = `Subtotal: $${counterNikeStreet * 230}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeStreet < 0) {
   
    counterNikeStreet = 0;
    plusBtn[1].previousElementSibling.textContent = `0 units`;
    itemsQty.textContent = counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent =  counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[1].textContent = `Subtotal: $0.00`;
    cartTotal.textContent = `$${counterNikeAirMax *150 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
  }

});

// Plus Nike Swift2
plusBtn[2].addEventListener("click", () => {
  
  counterNikeSwift2++;
  plusBtn[2].previousElementSibling.textContent = `${counterNikeSwift2} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[2].textContent = `Subtotal: $${counterNikeSwift2 * 150}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeSwift2 >= 5) {
    alert("Sorry there is not more stock");
    
    counterNikeStreet = 5;
    plusBtn[2].previousElementSibling.textContent = `5 units`;
    itemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[2].textContent = `Subtotal: $750.00`;
    cartTotal.textContent = `$${750 + counterNikeStreet * 230 + counterNikeAirMax * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
  }
});

// Minus Nike SNwift2
minusBtn[2].addEventListener("click", () => {
  
  counterNikeSwift2--;
  plusBtn[2].previousElementSibling.textContent = `${counterNikeSwift2} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[2].textContent = `Subtotal: $${counterNikeSwift2 * 150}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeSwift2 < 0) {
   
    counterNikeSwift2 = 0;
    plusBtn[2].previousElementSibling.textContent = `0 units`;
    itemsQty.textContent = counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent =  counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[2].textContent = `Subtotal: $0.00`;
    cartTotal.textContent = `$${counterNikeStreet * 230 + counterNikeAirMax *150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;
  }
  
});

//Plus Nike Run 3
plusBtn[3].addEventListener("click", () => {
  
  counterNikeRun3++;
  plusBtn[3].previousElementSibling.textContent = `${counterNikeRun3} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[3].textContent = `Subtotal: $${counterNikeRun3 * 110}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeRun3 >= 5) {
    alert("Sorry there is not more stock");
    
    counterNikeRun3 = 5;
    plusBtn[3].previousElementSibling.textContent = `5 units`;
    itemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[3].textContent = `Subtotal: $550.00`;
    cartTotal.textContent = `$${550 + counterNikeStreet * 230 + counterNikeAirMax * 150  + counterNikeTacoJay * 180}.00`;
  }
});

// Minus Nike Run 3
minusBtn[3].addEventListener("click", () => {
  
  counterNikeRun3--;
  plusBtn[3].previousElementSibling.textContent = `${counterNikeRun3} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[3].textContent = `Subtotal: $${counterNikeRun3 * 110}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeRun3 < 0) {
   
    counterNikeRun3 = 0;
    plusBtn[3].previousElementSibling.textContent = `0 units`;
    itemsQty.textContent = counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent =  counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[3].textContent = `Subtotal: $0.00`;
    cartTotal.textContent = `$${counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeAirMax * 150  + counterNikeTacoJay * 180}.00`;
  }
 
//Plus Nike Taco Jay
plusBtn[4].addEventListener("click", () => {
  
  counterNikeTacoJay++;
  plusBtn[4].previousElementSibling.textContent = `${counterNikeTacoJay} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[4].textContent = `Subtotal: $${counterNikeTacoJay * 180}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeTacoJay >= 5) {
    alert("Sorry there is not more stock");
    
    counterNikeTacoJay = 5;
    plusBtn[4].previousElementSibling.textContent = `5 units`;
    itemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent = 5 + counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[4].textContent = `Subtotal: $900.00`;
    cartTotal.textContent = `$${900 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeStreet * 230 + counterNikeAirMax * 150}.00`;
  }
});

// Minus Nike Run 3
minusBtn[4].addEventListener("click", () => {
  
  counterNikeTacoJay--;
  plusBtn[4].previousElementSibling.textContent = `${counterNikeTacoJay} units`;
  itemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  navItemsQty.textContent = counterNikeAirMax + counterNikeStreet + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
  cartSubtotal[4].textContent = `Subtotal: $${counterNikeTacoJay * 110}.00`;
  cartTotal.textContent = `$${ counterNikeAirMax * 150 + counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeRun3 * 110 + counterNikeTacoJay * 180}.00`;

  if (counterNikeTacoJay < 0) {
   
    counterNikeTacoJay = 0;
    plusBtn[4].previousElementSibling.textContent = `0 units`;
    itemsQty.textContent = counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    navItemsQty.textContent =  counterNikeAirMax + counterNikeSwift2 + counterNikeRun3 + counterNikeTacoJay;
    cartSubtotal[4].textContent = `Subtotal: $0.00`;
    cartTotal.textContent = `$${counterNikeStreet * 230 + counterNikeSwift2 * 150 + counterNikeAirMax * 150 + counterNikeRun3 * 110}.00`;
  }

  
})})





