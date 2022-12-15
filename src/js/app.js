import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let productDiv = document.querySelector('.product');
    let productPrice = document.querySelectorAll('p')[1].innerHTML;
    let span = document.createElement('span');
    span.class = 'data-price';
    span.className = 'data-price';
    span.innerHTML = 'product-price';
    productDiv.setAttribute('data-price', productPrice);
    productDiv.appendChild(span);

});
