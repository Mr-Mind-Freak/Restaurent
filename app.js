const pizzaQ = document.getElementById('pizzaQ');
const burgerQ = document.getElementById('burgerQ');
const breadQ = document.getElementById('breadQ');
const chickenQ = document.getElementById('chickenQ');
const pizzaAmount = document.getElementById('pizzaAmount');
const burgerAmount = document.getElementById('burgerAmount');
const breadAmount = document.getElementById('breadAmount');
const chickenAmount = document.getElementById('chickenAmount');
const total = document.getElementById('totalAmount');

function setZoom() {
    if (window.matchMedia('(min-width: 1020px) and (max-width: 1440px)').matches) {
      document.body.style.zoom = "67%";
    } else {
      document.body.style.zoom = "100%";
    }
  }

const setFocus = (inputBox) => {
    inputBox.focus();
}

const changeAmount = (rate,inputBox,amount) => {
    let quantity = inputBox.value;
    if (quantity > 0){
        let cost = amount.textContent;
        cost = cost.slice(1);
        cost = parseFloat(cost);
        cost = rate * quantity;
        amount.textContent = `$${cost}`;
        let tot = parseFloat(total.textContent.slice(1));
        tot += cost;
        total.textContent = `$${tot.toFixed(2)}`;
    }
    else{
        window.alert('Quantity should be greater than 0');
        inputBox.value = '';
    }
}

const reset = () => {
    pizzaQ.value = '';
    burgerQ.value = '';
    chickenQ.value = '';
    breadQ.value = '';
    pizzaAmount.textContent = '$0.00';
    burgerAmount.textContent = '$0.00';
    breadAmount.textContent = '$0.00';
    chickenAmount.textContent = '$0.00';
    total.textContent = '$0.00'
}

setZoom();
window.addEventListener('resize', setZoom);

document.getElementById('pizza-pic').addEventListener('click',()=>{ setFocus(pizzaQ) });
document.getElementById('burger-pic').addEventListener('click',()=>{ setFocus(burgerQ) });
document.getElementById('cornbread-pic').addEventListener('click',()=>{ setFocus(breadQ) });
document.getElementById('hot_chicken-pic').addEventListener('click',()=>{ setFocus(chickenQ) });

pizzaQ.addEventListener('blur', (e) => {
    changeAmount(12.55,e.target,pizzaAmount);
});
burgerQ.addEventListener('focusout',(e) => {
    changeAmount(15.33,e.target,burgerAmount);
});
breadQ.addEventListener('blur', (e) => {
    changeAmount(8.88,e.target,breadAmount);
});
chickenQ.addEventListener('focusout',(e) => {
    changeAmount(10.00,e.target,chickenAmount);
});