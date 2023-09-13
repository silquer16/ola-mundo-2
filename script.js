// Variáveis para rastrear o carrinho e o total
let cart = [];
let cartTotal = 0;

// Função para adicionar um produto ao carrinho
function addToCart(productId, productName, productPrice) {
    cart.push({ id: productId, name: productName, price: productPrice });
    cartTotal += productPrice;
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Limpa o conteúdo anterior
    cartItems.innerHTML = "";

    // Adiciona os itens do carrinho
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Atualiza o total do carrinho
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Event listener para botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productId = event.target.getAttribute("data-product-id");
        const productName = event.target.previousElementSibling.previousElementSibling.textContent;
        const productPrice = parseFloat(event.target.previousElementSibling.textContent.replace("$", ""));

        addToCart(productId, productName, productPrice);
        updateCartDisplay();
    });
});

// Event listener para o botão "Finalizar Compra"
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", () => {
    // Lógica para finalizar a compra (pode variar de acordo com as necessidades)
    alert("Compra finalizada! Obrigado por fazer compras conosco.");
    
    // Limpar o carrinho
    cart = [];
    cartTotal = 0;
    updateCartDisplay();
});
