// ==========================================
// PRODUCT DATABASE (SEMBAKO LIST)
// ==========================================
const products = [
  {
    id: 1,
    name: "Beras Pandan Wangi Premium 5kg",
    category: "beras",
    price: 78000,
    stock: 25,
    icon: "fa-solid fa-wheat-awn",
    badge: "Terlaris"
  },
  {
    id: 2,
    name: "Beras Setra Ramos Rajalele 5kg",
    category: "beras",
    price: 68000,
    stock: 40,
    icon: "fa-solid fa-wheat-awn",
    badge: "Hemat"
  },
  {
    id: 3,
    name: "Minyak Goreng Bimoli Spesial 2L",
    category: "minyak",
    price: 36500,
    stock: 30,
    icon: "fa-solid fa-bottle-droplet",
    badge: "Populer"
  },
  {
    id: 4,
    name: "Minyak Goreng SunCo Refill 1L",
    category: "minyak",
    price: 18500,
    stock: 50,
    icon: "fa-solid fa-bottle-droplet",
    badge: ""
  },
  {
    id: 5,
    name: "Gula Pasir Gulaku Premium 1kg",
    category: "bumbu",
    price: 17500,
    stock: 60,
    icon: "fa-solid fa-cubes-stacked",
    badge: ""
  },
  {
    id: 6,
    name: "Telur Ayam Negeri Segar (1kg)",
    category: "telur",
    price: 29000,
    stock: 15,
    icon: "fa-solid fa-egg",
    badge: "Segar Hari Ini"
  },
  {
    id: 7,
    name: "Susu UHT Ultra Milk Full Cream 1L",
    category: "telur",
    price: 19500,
    stock: 24,
    icon: "fa-solid fa-glass-water",
    badge: ""
  },
  {
    id: 8,
    name: "Indomie Goreng Spesial (Per Dus - 40 Pcs)",
    category: "instan",
    price: 115000,
    stock: 10,
    icon: "fa-solid fa-box",
    badge: "Grosir"
  },
  {
    id: 9,
    name: "Indomie Rasa Soto Mie (Pcs)",
    category: "instan",
    price: 31000,
    stock: 120,
    icon: "fa-solid fa-bowl-rice",
    badge: ""
  },
  {
    id: 10,
    name: "Kecap Manis Bango Botol Refill 550ml",
    category: "bumbu",
    price: 24000,
    stock: 20,
    icon: "fa-solid fa-jar",
    badge: ""
  },
  {
    id: 11,
    name: "Mentega Blue Band Serbaguna 200g",
    category: "minyak",
    price: 10500,
    stock: 45,
    icon: "fa-solid fa-cheese",
    badge: ""
  },
  {
    id: 12,
    name: "Sardines Botan Saus Tomat 425g",
    category: "instan",
    price: 22500,
    stock: 18,
    icon: "fa-solid fa-fish",
    badge: ""
  }
];

// WhatsApp Shop Configuration
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp toko Anda (format internasional tanpa +)
const SHIPPING_COST = 5000; // Flat Rp 5.000

// ==========================================
// STATE MANAGEMENT
// ==========================================
let cart = [];

// Load cart from LocalStorage
function initCart() {
  const savedCart = localStorage.getItem("sembako_cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

// Save cart to LocalStorage
function saveCart() {
  localStorage.setItem("sembako_cart", JSON.stringify(cart));
}

// ==========================================
// DOM ELEMENTS & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initCart();
  renderProducts(products);
  setupHeaderScroll();
  setupMobileMenu();
  setupCategoryFilters();
  setupSearch();
  setupFAQ();
  setupCartDrawer();
  setupContactForm();
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
function setupHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ==========================================
// MOBILE MENU NAVIGATION
// ==========================================
function setupMobileMenu() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const icon = mobileToggle.querySelector("i");
    if (navMenu.classList.contains("open")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars-staggered";
    }
  });

  // Close menu when clicking navigation link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      mobileToggle.querySelector("i").className = "fa-solid fa-bars-staggered";
    });
  });
}

// ==========================================
// CATALOG RENDERING, FILTERS, SEARCH
// ==========================================
function renderProducts(productsList) {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";
  
  if (productsList.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-basket-shopping"></i>
        <h3>Produk tidak ditemukan</h3>
        <p>Maaf, coba cari kata kunci atau kategori yang lain.</p>
      </div>
    `;
    return;
  }
  
  productsList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);
    
    // Check if there's a promo badge
    const badgeHTML = product.badge 
      ? `<span class="product-badge">${product.badge}</span>` 
      : "";
      
    card.innerHTML = `
      <div class="product-image-container">
        ${badgeHTML}
        <div class="product-placeholder-graphic">
          <i class="${product.icon}"></i>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-stock">Stok Tersedia (${product.stock})</div>
        <div class="product-footer">
          <span class="product-price">${formatRupiah(product.price)}</span>
          <button class="add-to-cart-btn" aria-label="Tambah ke keranjang">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    
    // Event listener for add to cart button
    const btn = card.querySelector(".add-to-cart-btn");
    btn.addEventListener("click", () => {
      addToCart(product.id);
      
      // Micro-animation on button
      btn.innerHTML = `<i class="fa-solid fa-check"></i>`;
      btn.style.backgroundColor = "var(--primary)";
      btn.style.color = "white";
      
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        btn.style.backgroundColor = "";
        btn.style.color = "";
      }, 1000);
    });
    
    grid.appendChild(card);
  });
}

function setupCategoryFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active states
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      filterCatalog();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", filterCatalog);
}

function filterCatalog() {
  const activeCategory = document.querySelector(".filter-btn.active").getAttribute("data-category");
  const searchQuery = document.getElementById("search-input").value.toLowerCase();
  
  const filtered = products.filter(product => {
    const matchesCategory = (activeCategory === "all" || product.category === activeCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });
  
  renderProducts(filtered);
}

// ==========================================
// FAQ COLLAPSIBLE ACCORDION
// ==========================================
function setupFAQ() {
  const faqHeaders = document.querySelectorAll(".faq-header");
  faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const currentItem = header.parentElement;
      const isActive = currentItem.classList.contains("active");
      
      // Close all other FAQ items
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
      });
      
      // Toggle current item
      if (!isActive) {
        currentItem.classList.add("active");
      }
    });
  });
}

// ==========================================
// CART & CHECKOUT LOGIC
// ==========================================
function setupCartDrawer() {
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartDrawer = document.getElementById("cart-drawer");
  
  const openCart = () => {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden"; // Disable body scroll
  };
  
  const closeCart = () => {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = ""; // Enable body scroll
  };
  
  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  
  // Checkout via WhatsApp
  const checkoutBtn = document.getElementById("checkout-whatsapp-btn");
  checkoutBtn.addEventListener("click", () => {
    processCheckout();
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
    } else {
      alert(`Maaf, stok ${product.name} terbatas.`);
      return;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      icon: product.icon,
      maxStock: product.stock
    });
  }
  
  saveCart();
  updateCartUI();
  
  // Open cart drawer automatically to show added item
  setTimeout(() => {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
  }, 300);
}

function updateCartQuantity(productId, amount) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  } else if (item.quantity > item.maxStock) {
    alert(`Maaf, batas maksimum stok barang yang tersedia adalah ${item.maxStock}.`);
    item.quantity = item.maxStock;
  }
  
  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const cartBadge = document.getElementById("cart-count");
  const container = document.getElementById("cart-items-container");
  const cartFooter = document.getElementById("cart-footer");
  const emptyState = document.getElementById("cart-empty");
  
  // Calculate total items
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartBadge.innerText = totalItemsCount;
  
  if (cart.length === 0) {
    container.innerHTML = "";
    container.appendChild(emptyState);
    cartFooter.style.display = "none";
    return;
  }
  
  // Hide empty state and show footer
  emptyState.remove();
  cartFooter.style.display = "block";
  
  // Clear items except empty state
  container.innerHTML = "";
  
  // Render cart items
  let subtotal = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-image">
        <i class="${item.icon}"></i>
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-title">${item.name}</h3>
        <span class="cart-item-price">${formatRupiah(item.price)}</span>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn dec-qty-btn"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn inc-qty-btn"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="cart-item-remove"><i class="fa-regular fa-trash-can"></i> Hapus</button>
        </div>
      </div>
    `;
    
    // Add quantity adjustment events
    itemEl.querySelector(".dec-qty-btn").addEventListener("click", () => updateCartQuantity(item.id, -1));
    itemEl.querySelector(".inc-qty-btn").addEventListener("click", () => updateCartQuantity(item.id, 1));
    itemEl.querySelector(".cart-item-remove").addEventListener("click", () => removeCartItem(item.id));
    
    container.appendChild(itemEl);
  });
  
  // Update totals
  const totalAmount = subtotal + SHIPPING_COST;
  document.getElementById("cart-subtotal").innerText = formatRupiah(subtotal);
  document.getElementById("cart-shipping").innerText = formatRupiah(SHIPPING_COST);
  document.getElementById("cart-total-amount").innerText = formatRupiah(totalAmount);
}

// Compile WhatsApp message and redirect
function processCheckout() {
  const name = document.getElementById("checkout-name").value.trim();
  const address = document.getElementById("checkout-address").value.trim();
  
  if (!name || !address) {
    alert("Harap isi Nama Penerima dan Alamat Pengiriman lengkap Anda.");
    return;
  }
  
  let subtotal = 0;
  let itemText = "";
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    itemText += `${index + 1}. *${item.name}* (x${item.quantity}) - ${formatRupiah(itemTotal)}\n`;
  });
  
  const grandTotal = subtotal + SHIPPING_COST;
  
  // Format WhatsApp message text
  const message = `Halo *Toko Sembako Berkah*, saya ingin memesan belanjaan berikut:

${itemText}
*Subtotal:* ${formatRupiah(subtotal)}
*Ongkir:* ${formatRupiah(SHIPPING_COST)}
*Total Pembayaran:* *${formatRupiah(grandTotal)}*

*Detail Pengiriman:*
- Nama Penerima: *${name}*
- Alamat Lengkap: *${address}*

Mohon segera diproses ya. Terima kasih!`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Clear cart state
  cart = [];
  saveCart();
  updateCartUI();
  
  // Close drawer
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
  
  // Reset inputs
  document.getElementById("checkout-name").value = "";
  document.getElementById("checkout-address").value = "";
  
  // Redirect to WhatsApp web/app
  window.open(waUrl, "_blank");
}

// ==========================================
// DIRECT CONTACT FORM TO WHATSAPP
// ==========================================
function setupContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    
    const text = `Halo *Toko Sembako Berkah*, ada pesan dari pengunjung website:

*Nama:* ${name}
*No. WhatsApp:* ${phone}
*Subjek:* ${subject}
*Pesan:* ${message}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    // Clear Form
    form.reset();
    
    // Redirect to WhatsApp
    window.open(waUrl, "_blank");
  });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}
