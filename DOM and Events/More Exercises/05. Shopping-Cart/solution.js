function solve() {
    const buttons = Array.from(document.getElementsByClassName('add-product'));
    const cartTextArea = document.querySelector('textarea');
    const checkoutBtn = document.querySelector('.checkout');

    checkoutBtn.addEventListener('click', checkout);

    let cart = [];
    let totalPrice = 0;

    for (const button of buttons) {
        button.addEventListener('click', (event) => {
            const prodDiv = event.target.parentElement.parentElement;
            const prodName = prodDiv.querySelector('.product-title').textContent;
            const price = Number(prodDiv.querySelector('.product-line-price').textContent);
            addCart(prodName, price);
        });
    }

    function addCart(name, price) {
        cart.push({name, price});
        totalPrice += price;
        cartTextArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }

    function checkout() {
        const uniqueProducts = [...new Set(cart.map(prod => prod.name))];
        cartTextArea.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.\n`;

        buttons.forEach(button => {
            button.disabled = true;
        });
        checkoutBtn.disabled = true;
    }
}