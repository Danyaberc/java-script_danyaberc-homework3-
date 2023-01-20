let a = document.querySelector('.quantity');

let d = Number(0); //Кількість товару

let sum = document.querySelector('.summa'); // Загальна сума

let fullsum = Number(1); //Повна сумма

let price = document.querySelector('.pricelist');
price.addEventListener('change', (ev) => {
   fullsum = ev.target.value;
   multiply();
})

let newPrice = Number(price.innerHTML);
console.log(newPrice);

let newQuantity = Number(a.innerHTML);

let coursevalue = Number(1);

//-------------Вибір валюти--------------------//

let UAH = document.querySelector('.button_value_UAH');
UAH.addEventListener('click', () => {
   coursevalue = 1;
   multiply();
})

let EUR = document.querySelector('.button_value_EUR');
EUR.addEventListener('click', () => {
   coursevalue = 42;
   multiply();
})


let USD = document.querySelector('.button_value_USD');
USD.addEventListener('click', () => {
   coursevalue = 40;
   multiply();
})

let CHZ = document.querySelector('.button_value_CHZ');
CHZ.addEventListener('click', () => {
   coursevalue = 32;
   multiply();
})

//------------------------------------------/////

function multiply() {
   sum.innerHTML = fullsum * d / coursevalue;  //------Функція кількість на ціну
}

let b = document.querySelector('.button_minus');
b.addEventListener('click', () => {
   d = d - 1;
   a.innerHTML = d;
   multiply();
   if (d < 0) {
      document.querySelector('.message').innerHTML = 'Не може бути відємні значення';
      d = 0;
      a.innerHTML = 0;
   }
})


let c = document.querySelector('.button_plus');
c.addEventListener('click', () => {
   d = d + 1;
   multiply();
   // a.innerHTML = d;
   if (d >= 0) {
      document.querySelector('.message').innerHTML = '';
      a.innerHTML = d;

      // d = d - 1;
   }
})








// let cart = {
//    'sisls23': 2
// }

// document.onclick = event => {
//    console.log(event.target.classList);
//    if (event.target.classList.contains('plus')) {
//       plusFunction(event.target.dataset.id);
//    }
// }

// const plusFunction = id => {
//    cart[id]++;
//    renderCart();
// }
// const renderCart = () => {
//    console.log(cart);
// }
// renderCart();