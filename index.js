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


// Cart
const cart = document.querySelector('.icon-tabler-shopping-cart')
const shoppCart = document.querySelector('.cart-container')
shoppCart.style.display = 'none';

cart.addEventListener('click', () =>{
  shoppCart.style.display = 'flex'
})
const closeCart = document.querySelector(".cart-close");

closeCart.addEventListener("click", () => {

shoppCart.style.display = "none";

});

// Add to cart

const cartContainer = document.querySelector('.cart-container-content');
const cartEmpty = document.querySelector('.cart-empty');
const addCart1 = document.querySelector('.plus1');
const addCart2 = document.querySelector('.plus2');
const addCart3 = document.querySelector('.plus3');
const addCart4 = document.querySelector('.plus4');
const navItemsQty = document.querySelector(".counter-item");
const unity = document.querySelectorAll('.unity')
const itemsQty = document.querySelector(".items-qty");
const cartTotal = document.querySelector(".cart-total");
const articulo1 = document.querySelector('.articulo1')
const cartFull = document.querySelectorAll('.cart-full');
const cartAmountNumber = document.querySelectorAll('.cart-amount-number');
const cardArticulo1 = document.querySelector('.articulo1');
const articulo2 = document.querySelector('.articulo2')
const articulo3 = document.querySelector('.articulo3')
const articulo4 = document.querySelector('.articulo4')
const stock = document.querySelectorAll('.stock')

if(reactInfinity == 0 && nikePegasus == 0 && jordanSeries == 0 && leBron19 == 0 ){
  articulo1.style.display = 'none'
  articulo2.style.display = 'none'
  articulo3.style.display = 'none'
  articulo4.style.display = 'none'
  cartEmpty.style.display = 'flex'
}

let counterReactInfinity = 0;
let counterLeBron19 = 0;
let counterNikePegasus = 0;
let counterJordanSeries = 0;

//Total
const total = document.querySelector('.cart-total');
total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

// ARTICLE 1
addCart1.addEventListener('click', () => {
 
  if(reactInfinity <5){
    counterReactInfinity++
    navItemsQty.textContent++
    unity[0].textContent++
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo1.style.display = 'flex'
    reactInfinity+=1
    stock[0].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
    

  }else if(reactInfinity == 5){
    plusBtn[0].style.visibility = 'hidden'
    counterReactInfinity = 5
    addCart1.style.visibility = 'hidden';
    
    alert('There is not more stock')
    cartContainer.style.display = 'flex'
    articulo1.style.display = 'flex'
    navItemsQty.textContent++
    unity[0].textContent = 5
    itemsQty.textContent++
    reactInfinity-=1
    stock[0].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
    
  
  } else if (reactInfinity < 5){
    counterReactInfinity++
    cartContainer.style.display = 'flex'
    articulo1.style.display = 'flex'
    reactInfinity+=1
    itemsQty.textContent++
    addCart1.style.visibility = 'visible';
    navItemsQty.textContent++
    stock[0].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
    
  }

})
// ARTICLE 2

addCart2.addEventListener('click', () => {
 
  if(leBron19 < 5){
    counterLeBron19++
    navItemsQty.textContent++
    unity[1].textContent++
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo2.style.display = 'flex'
    cartTotal.textContent = `Total: $${leBron19 *160}.00`;
    leBron19+=1
    stock[1].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(leBron19 == 5){
    plusBtn[1].style.visibility = 'hidden'
    counterLeBron19 = 5
    addCart2.style.visibility = 'hidden';
    
    alert('There is not more stock')
    navItemsQty.textContent++
    unity[1].textContent = 5
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo2.style.display = 'flex'
    leBron19-=1
    stock[1].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (leBron19 < 5){
    counterLeBron19++
    leBron19+=1
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo2.style.display = 'flex'
    addCart2.style.visibility = 'visible';
    navItemsQty.textContent++
    stock[1].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})
// ARTICLE 3

addCart3.addEventListener('click', () => {

  if(nikePegasus < 5){
    counterNikePegasus++
    navItemsQty.textContent++
    unity[2].textContent++
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo3.style.display = 'flex'
    nikePegasus+=1
    stock[2].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(nikePegasus == 5){
    plusBtn[2].style.visibility = 'hidden'
    counterNikePegasus = 5
    addCart3.style.visibility = 'hidden';
   
    alert('There is not more stock')
    navItemsQty.textContent++
    unity[2].textContent = 5
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo3.style.display = 'flex'
    nikePegasus-=1
    stock[2].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (nikePegasus < 5){
    counterNikePegasus++
    nikePegasus+=1
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo3.style.display = 'flex'
    addCart3.style.visibility = 'visible';
    navItemsQty.textContent++
    stock[2].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})
// ARTICLE 4

addCart4.addEventListener('click', () => {
  if(jordanSeries < 5){
    counterJordanSeries++
    navItemsQty.textContent++
    unity[3].textContent++
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo4.style.display = 'flex'
    jordanSeries+=1
    stock[3].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(jordanSeries == 5){
    plusBtn[3].style.visibility = 'hidden'
    counterJordanSeries = 5
    addCart4.style.visibility = 'hidden';
    
    alert('There is not more stock')
    navItemsQty.textContent++
    unity[3].textContent = 5
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo4.style.display = 'flex'
    jordanSeries-=1
    stock[3].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (jordanSeries < 5){
    counterJordanSeries++
    jordanSeries+=1
    itemsQty.textContent++
    cartContainer.style.display = 'flex'
    articulo4.style.display = 'flex'
    addCart4.style.visibility = 'visible';
    navItemsQty.textContent++
    stock[3].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})
// trash 
const trash = document.querySelectorAll('.trash')

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

// Counter items
const minusBtn = document.querySelectorAll(".cart-amount-minus");

minusBtn[0].addEventListener('click', () => {
  if(reactInfinity < 5 && reactInfinity  >= 0){
    counterReactInfinity--
    navItemsQty.textContent--
    unity[0].textContent--
    itemsQty.textContent--
    reactInfinity-=1
    plusBtn[0].style.visibility= 'visible'
    stock[0].textContent++
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(reactInfinity == 5 ){
    counterReactInfinity++
    unity[0].textContent = 5
    stock[0].textContent = 5
    minusBtn[0].style.visibility = 'hidden'
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }
})

minusBtn[1].addEventListener('click', () => {
  if(leBron19 < 5 && leBron19  >= 0){
    counterLeBron19--
    navItemsQty.textContent--
    unity[1].textContent--
    itemsQty.textContent--
    leBron19-=1
    plusBtn[1].style.visibility= 'visible'
    stock[1].textContent++
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(leBron19 == 5 ){
    counterLeBron19++
    unity[1].textContent = 5
    stock[1].textContent = 5
    minusBtn[1].style.visibility = 'hidden'
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }
})

minusBtn[2].addEventListener('click', () => {
  if(nikePegasus < 5 && nikePegasus  >= 0){
    counterNikePegasus--
    navItemsQty.textContent--
    unity[2].textContent--
    itemsQty.textContent--
    nikePegasus-=1
    plusBtn[2].style.visibility= 'visible'
    stock[2].textContent++
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(nikePegasus == 5 ){
    counterNikePegasus++
    unity[2].textContent = 5
    stock[2].textContent = 5
    minusBtn[2].style.visibility = 'hidden'
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }
})

minusBtn[3].addEventListener('click', () => {
  if(jordanSeries < 5 && jordanSeries  >= 0){
    counterJordanSeries--
    navItemsQty.textContent--
    unity[3].textContent--
    itemsQty.textContent--
    jordanSeries-=1
    plusBtn[3].style.visibility= 'visible'
    stock[3].textContent++
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(jordanSeries == 5 ){
    counterJordanSeries++
    unity[3].textContent = 5
    stock[3].textContent = 5
    minusBtn[3].style.visibility = 'hidden'
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }
})

const plusBtn = document.querySelectorAll(".cart-amount-plus");

plusBtn[0].addEventListener('click', () => {
  
  if(reactInfinity <5){
    counterReactInfinity++
    navItemsQty.textContent++
    unity[0].textContent++
    itemsQty.textContent++
    reactInfinity+=1
    stock[0].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
    
  }else if(reactInfinity == 5){
    counterReactInfinity = 5
    alert('There is not more stock')
    plusBtn[0].style.visibility= 'hidden'
    navItemsQty.textContent++
    unity[0].textContent = 5
    itemsQty.textContent++
    reactInfinity-=1
    stock[0].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (reactInfinity < 5){
    counterReactInfinity++
    reactInfinity+=1
    itemsQty.textContent++
    navItemsQty.textContent++
    stock[0].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})

plusBtn[1].addEventListener('click', () => {
  if(leBron19 <5){
    counterLeBron19++
    navItemsQty.textContent++
    unity[1].textContent++
    itemsQty.textContent++
    leBron19+=1
    plusBtn[1].style.visibility= 'visible'
    stock[1].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
    
  }else if(leBron19 == 5){
    counterLeBron19 = 5
    alert('There is not more stock')
    plusBtn[1].style.visibility= 'hidden'
    navItemsQty.textContent++
    unity[1].textContent = 5
    itemsQty.textContent++
    leBron19-=1
    stock[1].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (leBron19 < 5){
    counterLeBron19++
    plusBtn[1].style.visibility= 'visible'
    leBron19+=1
    itemsQty.textContent++
    navItemsQty.textContent++
    stock[1].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})

plusBtn[2].addEventListener('click', () => {
  if(nikePegasus <5){
    counterNikePegasus++
    navItemsQty.textContent++
    unity[2].textContent++
    itemsQty.textContent++
    nikePegasus+=1
    plusBtn[2].style.visibility= 'visible'
    stock[2].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
    
  }else if(nikePegasus == 5){
    counterNikePegasus = 5
    alert('There is not more stock')
    plusBtn[2].style.visibility= 'hidden'
    navItemsQty.textContent++
    unity[2].textContent = 5
    itemsQty.textContent++
    nikePegasus-=1
    stock[2].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (nikePegasus < 5){
    counterNikePegasus++
    plusBtn[2].style.visibility= 'visible'
    nikePegasus+=1
    itemsQty.textContent++
    navItemsQty.textContent++
    stock[2].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})

plusBtn[3].addEventListener('click', () => {
  if(jordanSeries <5){
    counterJordanSeries++
    navItemsQty.textContent++
    unity[3].textContent++
    itemsQty.textContent++
    jordanSeries+=1
    plusBtn[3].style.visibility= 'visible'
    stock[3].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  }else if(jordanSeries == 5){
    counterJordanSeries = 5
    alert('There is not more stock')
    plusBtn[3].style.visibility= 'hidden'
    navItemsQty.textContent++
    unity[3].textContent = 5
    itemsQty.textContent++
    jordanSeries-=1
    stock[3].textContent = 0
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `

  } else if (jordanSeries < 5){
    counterJordanSeries++
    plusBtn[3].style.visibility= 'visible'
    jordanSeries+=1
    itemsQty.textContent++
    navItemsQty.textContent++
    stock[3].textContent--
    total.textContent = `$${counterReactInfinity*140 + counterLeBron19*160 + counterNikePegasus * 105 + counterJordanSeries *70}.00 `
  }
})

//Checkout
const cartCheckout = document.querySelector(".cart-checkout");

// SHOW PRODUCTS
const showAll = document.querySelector(".btn-show-all");
const box = document.querySelectorAll('.box')
const showNikeCasual = document.querySelector(".btn-show-casual");
const showNikeRun = document.querySelector(".btn-show-run");

showAll.addEventListener("click", () => {

  box[0].style.display = "flex";
  box[1].style.display = "flex";
  box[2].style.display = "flex";
  box[3].style.display = "flex";

});

// FILTERED BY TYPE CASUAL
showNikeCasual.addEventListener("click", () => {
  box[0].style.display = "none";
  box[1].style.display = "none";
  box[2].style.display = "flex";
  box[3].style.display = "flex";
 
});

// FILTERED BY TYPE RUN
showNikeRun.addEventListener("click", () => {
  box[0].style.display = "flex";
  box[1].style.display = "flex";
  box[3].style.display = "none";
  box[2].style.display = "none";
});
// Checkout
const checkout = document.querySelector('.checkout');
checkout.addEventListener('click', () => {
  location.reload();
})