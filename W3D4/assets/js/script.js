function changeH1() {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Benvenuti in Smartopia!';
}
function changeBackgroundColor() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'red';
}
function changeFooterAddress() {
    const footerAddress = document.getElementById('footer-address');
    footerAddress.textContent = 'Via Inventata 123, 87654 Città Immaginaria';
}
function changeLink() {
    const amazonLinks = document.getElementsByClassName('Amazon-link');
    for (let i = 0; i < amazonLinks.length; i++) {
        if (amazonLinks[i]) {
            amazonLinks[i].classList.add('Amazon-link-changed');
        }
    }
}
function changeImages() {
    const images = document.getElementsByClassName('product-image');
    if (images.length > 0 && images[0].classList.contains('product-image-hidden')) {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('product-image-hidden');
        }
    } else {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add('product-image-hidden');
        }
    }
}
const priceColors = ['red', 'blue', 'green', 'orange', 'purple'];
let colorIndex = 0;
function changePriceColor() {
    const priceElements = document.getElementsByClassName('price');
    for (let i = 0; i < priceElements.length; i++) {
        priceElements[i].style.color = priceColors[colorIndex];
    }
    colorIndex = (colorIndex + 1) % priceColors.length;
    console.log('Color index:', colorIndex); // Log the current color index
}

