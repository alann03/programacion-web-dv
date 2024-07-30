const toggleMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");

  if (!mobileMenu.style.display) {
    mobileMenu.style.display = "none";
  }

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
};

const selectNavLink = () => {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a");

  let activeLinkFound = false;

  navLinks.forEach((link) => {
    if (currentUrl.endsWith(link.href)) {
      link.classList.add("active");
      activeLinkFound = true;
    }
    link.addEventListener("click", function () {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    });
  });

  if (!activeLinkFound && !currentUrl.includes("login") && !currentUrl.includes("register") && !currentUrl.includes("cart")) {
    navLinks[0].classList.add("active");
  }
};

const products = [
  {
    id: 1,
    name: "Collar Vogue",
    price: "$12.300",
    quantity: 0,
  },
  {
    id: 2,
    name: "Anillo Velvet",
    price: "$5.900",
    quantity: 0,
  },
  {
    id: 3,
    name: "Pulsera Azhi",
    price: "$9.500",
    quantity: 0,
  },
  {
    id: 4,
    name: "Reloj Emma",
    price: "$7.900",
    quantity: 0,
  },
  {
    id: 5,
    name: "Anillo King",
    price: "$6.500",
    quantity: 0,
  },
  {
    id: 6,
    name: "Aros Cozy",
    price: "$6.000",
    quantity: 0,
  },
];

const addToCart = (productId) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find((p) => p.id === productId);

  if (product) {
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} agregado al carrito`);
  } else {
    alert("Producto no encontrado");
  }
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload();
};

const listProducts = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartList = document.getElementById("cart-list");

  if (cart.length === 0) {
    let emptyMessage = document.createElement("p");
    emptyMessage.textContent = "El carrito está vacío";
    emptyMessage.className = "empty-cart-message";
    cartList.appendChild(emptyMessage);
    return;
  }

  cart.forEach(function (product, index) {
    let cartCard = document.createElement("div");
    cartCard.className = "cart-card";

    let productImage = document.createElement("img");
    productImage.src = `/assets/img/product-${index + 1}.png`;
    cartCard.appendChild(productImage);

    let cartCardDetails = document.createElement("div");
    cartCardDetails.className = "cart-card-details";

    let productName = document.createElement("h4");
    productName.textContent = product.name;
    cartCardDetails.appendChild(productName);

    let productPrice = document.createElement("p");
    productPrice.className = "cart-card-price";
    productPrice.textContent = product.price;
    cartCardDetails.appendChild(productPrice);

    let productQuantity = document.createElement("p");
    productQuantity.className = "cart-card-quantity";
    productQuantity.textContent = `Cantidad: ${product.quantity}`;
    cartCardDetails.appendChild(productQuantity);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.onclick = function () {
      removeFromCart(index);
    };
    cartCardDetails.appendChild(removeButton);

    cartCard.appendChild(cartCardDetails);
    cartList.appendChild(cartCard);
  });
};

document.addEventListener("DOMContentLoaded", listProducts);

const clearCart = () => {
  localStorage.removeItem("cart");

  location.reload();
};

const buy = () => {
  alert(`Funcionalidad deshabilitada momentáneamente. Por favor, intente más tarde.`);
}

document.addEventListener("DOMContentLoaded", selectNavLink);
