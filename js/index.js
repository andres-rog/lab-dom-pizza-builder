// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni) { document.querySelector('.btn.btn-pepperoni').classList.add('active'); }
  else { document.querySelector('.btn.btn-pepperoni').classList.remove('active'); }

  if(state.mushrooms) { document.querySelector('.btn.btn-mushrooms').classList.add('active'); }
  else { document.querySelector('.btn.btn-mushrooms').classList.remove('active'); }

  if(state.greenPeppers) { document.querySelector('.btn.btn-green-peppers').classList.add('active'); }
  else { document.querySelector('.btn.btn-green-peppers').classList.remove('active'); }

  if(state.whiteSauce) { document.querySelector('.btn.btn-sauce').classList.add('active'); }
  else { document.querySelector('.btn.btn-sauce').classList.remove('active'); }

  if(state.glutenFreeCrust) { document.querySelector('.btn.btn-crust').classList.add('active'); }
  else { document.querySelector('.btn.btn-crust').classList.remove('active'); }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pricePepperoni = document.querySelector('.price ul li:nth-child(1)');
  const priceMushrooms = document.querySelector('.price ul li:nth-child(2)');
  const pricegreenPeppers = document.querySelector('.price ul li:nth-child(3)');
  const priceWhiteSauce = document.querySelector('.price ul li:nth-child(4)');
  const priceGlutenFreeCrust = document.querySelector('.price ul li:nth-child(5)');

  let sum = 10;
  const totalPrice = document.querySelector('.price strong');
  
  if(state.pepperoni) {
    pricePepperoni.style.display ='block'
    sum+=1
  }
  else {pricePepperoni.style.display ='none'}

  if(state.mushrooms) {
    priceMushrooms.style.display ='block'
    sum+=1
  }
  else {priceMushrooms.style.display ='none'}

  if(state.greenPeppers) {
    pricegreenPeppers.style.display ='block'
    sum+=1
  }
  else {pricegreenPeppers.style.display ='none'}

  if(state.whiteSauce) {
    priceWhiteSauce.style.display ='block'
    sum+=3
  }
  else {priceWhiteSauce.style.display ='none'}

  if(state.glutenFreeCrust) {
    priceGlutenFreeCrust.style.display ='block'
    sum+=5
  }
  else {priceGlutenFreeCrust.style.display ='none'}

  totalPrice.innerHTML="$"+sum;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
