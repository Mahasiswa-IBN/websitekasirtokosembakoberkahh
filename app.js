// ==========================================================================
// DEMO / SIMULATION DATA (DATA SEMBAKO AWAL)
// ==========================================================================
const DEMO_PRODUCTS = [
  { id: "P-1001", code: "8992761001001", name: "Beras Pandan Wangi Premium Berkah 5kg", category: "Beras & Karbohidrat", unit: "Karung", costPrice: 65000, sellingPrice: 78000, stock: 25, minStock: 5, icon: "fa-solid fa-wheat-awn" },
  { id: "P-1002", code: "8992761001002", name: "Beras Setra Ramos Cap Raja 5kg", category: "Beras & Karbohidrat", unit: "Karung", costPrice: 58000, sellingPrice: 68000, stock: 30, minStock: 5, icon: "fa-solid fa-wheat-awn" },
  { id: "P-1003", code: "8991002300221", name: "Minyak Goreng Bimoli Spesial 2 Liter", category: "Minyak & Mentega", unit: "Pcs", costPrice: 31000, sellingPrice: 36500, stock: 40, minStock: 8, icon: "fa-solid fa-bottle-droplet" },
  { id: "P-1004", code: "8991002300222", name: "Minyak Goreng SunCo Pouch 1 Liter", category: "Minyak & Mentega", unit: "Pcs", costPrice: 15500, sellingPrice: 18500, stock: 35, minStock: 8, icon: "fa-solid fa-bottle-droplet" },
  { id: "P-1005", code: "8992828112341", name: "Gula Pasir Putih Gulaku Premium 1kg", category: "Bumbu & Gula", unit: "Pcs", costPrice: 14500, sellingPrice: 17500, stock: 50, minStock: 10, icon: "fa-solid fa-cubes-stacked" },
  { id: "P-1006", code: "TRX-EGG-01", name: "Telur Ayam Negeri Segar Pilihan (1kg)", category: "Telur & Susu", unit: "Kg", costPrice: 24000, sellingPrice: 29000, stock: 4, minStock: 10, icon: "fa-solid fa-egg" },
  { id: "P-1007", code: "8992008101235", name: "Susu UHT Ultra Milk Full Cream 1 Liter", category: "Telur & Susu", unit: "Pcs", costPrice: 16500, sellingPrice: 19500, stock: 18, minStock: 6, icon: "fa-solid fa-glass-water" },
  { id: "P-1008", code: "8998866200210", name: "Indomie Goreng Spesial (Karton - 40 Pcs)", category: "Makanan Instan", unit: "Dus", costPrice: 104000, sellingPrice: 115000, stock: 12, minStock: 3, icon: "fa-solid fa-box" },
  { id: "P-1009", code: "8998866200111", name: "Indomie Goreng Rasa Spesial (Eceran)", category: "Makanan Instan", unit: "Bungkus", costPrice: 2600, sellingPrice: 3100, stock: 120, minStock: 20, icon: "fa-solid fa-bowl-rice" },
  { id: "P-1010", code: "8998866200112", name: "Indomie Kuah Rasa Soto Mie (Eceran)", category: "Makanan Instan", unit: "Bungkus", costPrice: 2550, sellingPrice: 3000, stock: 150, minStock: 20, icon: "fa-solid fa-bowl-rice" },
  { id: "P-1011", code: "8990011200101", name: "Kecap Manis Bango Botol Refill 550ml", category: "Bumbu & Gula", unit: "Pcs", costPrice: 20500, sellingPrice: 24000, stock: 24, minStock: 6, icon: "fa-solid fa-bottle-droplet" },
  { id: "P-1012", code: "8992696500201", name: "Mentega Blue Band Serbaguna Sachet 200g", category: "Minyak & Mentega", unit: "Pcs", costPrice: 8500, sellingPrice: 10500, stock: 45, minStock: 10, icon: "fa-solid fa-cheese" },
  { id: "P-1013", code: "8999999002230", name: "Sardines Botan Saus Tomat Can 425g", category: "Makanan Instan", unit: "Pcs", costPrice: 18000, sellingPrice: 22500, stock: 20, minStock: 5, icon: "fa-solid fa-fish" },
  { id: "P-1014", code: "8991001100230", name: "Teh Celup Sariwangi Asli Box Isi 25", category: "Minuman & Kopi", unit: "Pak", costPrice: 5000, sellingPrice: 6500, stock: 3, minStock: 8, icon: "fa-solid fa-glass-water" },
  { id: "P-1015", code: "8992002100412", name: "Kopi Bubuk Kapal Api Spesial Mix 24g", category: "Minuman & Kopi", unit: "Pak", costPrice: 11000, sellingPrice: 13500, stock: 15, minStock: 5, icon: "fa-solid fa-mug-hot" }
];

const DEFAULT_SETTINGS = {
  shopName: "Toko Sembako Berkah",
  shopAddress: "Jl. Raya Berkah No. 88, RT.02/RW.05, Kelapa Gading, Jakarta Utara",
  shopPhone: "0812-3456-7890",
  defaultTax: 11,
  receiptHeader: "Terima Kasih Telah Belanja!",
  receiptFooter: "Barang yang sudah dibeli tidak dapat ditukar/dikembalikan.",
  cashierName: "Admin Berkah"
};

// Generate initial dummy sales to look premium on first view
const generateDemoSales = (productsList) => {
  const sales = [];
  const currentDate = new Date();
  const paymentMethods = ["Tunai", "QRIS", "Transfer"];

  // Create sales for last 7 days
  for (let i = 6; i >= 0; i--) {
    const saleDate = new Date();
    saleDate.setDate(currentDate.getDate() - i);
    
    // 2-4 transactions per day
    const transactionsCount = Math.floor(Math.random() * 3) + 2;
    
    for (let t = 0; t < transactionsCount; t++) {
      const transDate = new Date(saleDate);
      transDate.setHours(9 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 60), 0);
      
      const itemsCount = Math.floor(Math.random() * 3) + 1; // 1-3 items
      const selectedProducts = [];
      const tempProds = [...productsList];
      
      for (let k = 0; k < itemsCount; k++) {
        if (tempProds.length === 0) break;
        const index = Math.floor(Math.random() * tempProds.length);
        const prod = tempProds.splice(index, 1)[0];
        const qty = Math.floor(Math.random() * 2) + 1; // 1-2 items
        selectedProducts.push({
          id: prod.id,
          code: prod.code,
          name: prod.name,
          category: prod.category,
          unit: prod.unit,
          costPrice: prod.costPrice,
          sellingPrice: prod.sellingPrice,
          quantity: qty,
          icon: prod.icon
        });
      }

      // Calculate financials
      let subtotal = 0;
      let costTotal = 0;
      selectedProducts.forEach(item => {
        subtotal += item.sellingPrice * item.quantity;
        costTotal += item.costPrice * item.quantity;
      });

      const discPct = Math.random() > 0.7 ? 5 : 0; // 30% chance for a 5% discount
      const discountNom = Math.round((subtotal * (discPct / 100)) / 500) * 500; // Round to nearest 500
      const taxable = subtotal - discountNom;
      const tax = Math.round(taxable * 0.11);
      const grandTotal = taxable + tax;
      const profit = grandTotal - tax - costTotal;

      const randomSec = String(Math.floor(Math.random() * 900) + 100);
      const invoiceId = `TRX-${transDate.getFullYear()}${String(transDate.getMonth()+1).padStart(2,'0')}${String(transDate.getDate()).padStart(2,'0')}-${randomSec}`;

      sales.push({
        id: invoiceId,
        timestamp: transDate.toISOString(),
        items: selectedProducts,
        subtotal: subtotal,
        discount: discountNom,
        tax: tax,
        total: grandTotal,
        profit: profit,
        paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
        cashReceived: grandTotal,
        cashChange: 0
      });
    }
  }
  return sales;
};

// ==========================================================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
let products = [];
let sales = [];
let settings = {};
let cart = [];

// Pagination configurations
let inventoryCurrentPage = 1;
const inventoryItemsPerPage = 10;
let historyCurrentPage = 1;
const historyItemsPerPage = 10;

// Chart instance reference
let salesChart = null;

// Initialize app data from LocalStorage
function loadDatabase() {
  const localProducts = localStorage.getItem("berkah_pos_products");
  const localSales = localStorage.getItem("berkah_pos_sales");
  const localSettings = localStorage.getItem("berkah_pos_settings");

  // Load settings
  if (localSettings) {
    settings = JSON.parse(localSettings);
  } else {
    settings = { ...DEFAULT_SETTINGS };
    localStorage.setItem("berkah_pos_settings", JSON.stringify(settings));
  }

  // Load products (if empty, load demo)
  if (localProducts) {
    products = JSON.parse(localProducts);
  } else {
    products = JSON.parse(JSON.stringify(DEMO_PRODUCTS)); // Deep copy
    localStorage.setItem("berkah_pos_products", JSON.stringify(products));
  }

  // Load sales (if empty, generate historical demo sales based on products)
  if (localSales) {
    sales = JSON.parse(localSales);
  } else {
    sales = generateDemoSales(products);
    localStorage.setItem("berkah_pos_sales", JSON.stringify(sales));
  }
}

// Synchronize entities
function saveProducts() {
  localStorage.setItem("berkah_pos_products", JSON.stringify(products));
}

function saveSales() {
  localStorage.setItem("berkah_pos_sales", JSON.stringify(sales));
}

function saveSettings() {
  localStorage.setItem("berkah_pos_settings", JSON.stringify(settings));
}

// ==========================================================================
// INITIAL SETUP & ROUTING
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadDatabase();
  initializeClock();
  setupSidebarNavigation();
  initDashboard();
  initPOS();
  initInventory();
  initHistory();
  initSettings();
  
  // Set Cashier Active name from settings
  document.getElementById("sidebar-cashier-name").innerText = settings.cashierName;
  
  // Handle quick POS button in header
  document.getElementById("quick-pos-btn").addEventListener("click", () => {
    switchView("kasir");
  });
});

// Sidebar Clock
function initializeClock() {
  const clockEl = document.getElementById("current-time");
  const updateTime = () => {
    const now = new Date();
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockEl.innerText = `${dayName}, ${date} ${monthName} | ${hours}:${minutes}:${seconds} WIB`;
  };
  updateTime();
  setInterval(updateTime, 1000);
}

// Single Page View routing
function setupSidebarNavigation() {
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const viewId = item.getAttribute("data-view");
      
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      
      switchView(viewId);
    });
  });
}

function switchView(viewId) {
  // Hide all panels
  const panels = document.querySelectorAll(".view-panel");
  panels.forEach(p => p.classList.remove("active"));
  
  // Show target panel
  const activePanel = document.getElementById(`view-${viewId}`);
  if (activePanel) {
    activePanel.classList.add("active");
  }

  // Update header text based on page
  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  
  switch(viewId) {
    case "dashboard":
      titleEl.innerText = "Dashboard Analitik";
      subtitleEl.innerText = "Ringkasan aktivitas toko dan performa penjualan hari ini.";
      initDashboard();
      break;
    case "kasir":
      titleEl.innerText = "Terminal Kasir POS";
      subtitleEl.innerText = "Pencarian produk, keranjang belanja, kalkulator pembayaran, dan cetak struk.";
      document.getElementById("pos-search-input").focus();
      renderPOSCatalog();
      break;
    case "produk":
      titleEl.innerText = "Kelola Inventaris Produk";
      subtitleEl.innerText = "Tambah, ubah, dan hapus katalog produk sembako serta pantau jumlah stok.";
      inventoryCurrentPage = 1;
      renderInventoryTable();
      break;
    case "transaksi":
      titleEl.innerText = "Riwayat Transaksi Penjualan";
      subtitleEl.innerText = "Daftar log struk penjualan belanja pelanggan beserta kalkulasi profit.";
      historyCurrentPage = 1;
      renderHistoryTable();
      break;
    case "pengaturan":
      titleEl.innerText = "Pengaturan Toko & Backup";
      subtitleEl.innerText = "Ubah profil toko, default struk, backup data, restore database, dan data demo.";
      loadSettingsFormValues();
      break;
  }
  
  // Highlight active menu in sidebar in case of external view changes
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("data-view") === viewId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconHTML = `<i class="fa-solid fa-circle-check toast-icon"></i>`;
  if (type === "danger") {
    iconHTML = `<i class="fa-solid fa-circle-xmark toast-icon"></i>`;
  } else if (type === "warning") {
    iconHTML = `<i class="fa-solid fa-triangle-exclamation toast-icon"></i>`;
  }
  
  toast.innerHTML = `
    ${iconHTML}
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Fade out and remove
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

// ==========================================================================
// DASHBOARD PANEL LOGIC
// ==========================================================================
function initDashboard() {
  calculateDashboardStats();
  renderDashboardLowStock();
  renderDashboardBestSellers();
  renderSalesTrendChart();
}

function calculateDashboardStats() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // Filter sales completed today
  const todaySales = sales.filter(sale => {
    const saleDate = new Date(sale.timestamp);
    return saleDate >= today;
  });

  let todayRevenue = 0;
  let todayProfit = 0;
  
  todaySales.forEach(sale => {
    todayRevenue += sale.total;
    todayProfit += sale.profit;
  });

  document.getElementById("stat-revenue").innerText = formatRupiah(todayRevenue);
  document.getElementById("stat-profit").innerText = formatRupiah(todayProfit);
  document.getElementById("stat-sales-count").innerText = todaySales.length;

  // Calculate low stock items count
  const lowStockProducts = products.filter(p => p.stock <= p.minStock);
  const count = lowStockProducts.length;
  document.getElementById("stat-low-stock-count").innerText = count;
  
  const lowStockCard = document.getElementById("stat-low-stock-card");
  const lowStockAction = document.getElementById("stat-low-stock-action");
  
  if (count > 0) {
    lowStockCard.classList.add("border-danger");
    lowStockAction.innerText = `${count} Produk menipis!`;
    lowStockAction.className = "stat-indicator text-red";
  } else {
    lowStockCard.classList.remove("border-danger");
    lowStockAction.innerText = "Stok aman tercukupi";
    lowStockAction.className = "stat-indicator text-success";
  }
}

function renderDashboardLowStock() {
  const tableBody = document.getElementById("dashboard-low-stock-table");
  const tableBadge = document.getElementById("low-stock-table-badge");
  tableBody.innerHTML = "";

  const lowStockProducts = products.filter(p => p.stock <= p.minStock);
  tableBadge.innerText = `${lowStockProducts.length} Produk`;

  if (lowStockProducts.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-muted">Semua stok produk aman dan tercukupi.</td>
      </tr>
    `;
    return;
  }

  // Show top 5 low stock products in widget
  lowStockProducts.slice(0, 5).forEach(prod => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><code>${prod.code}</code></td>
      <td><strong>${prod.name}</strong></td>
      <td><span class="badge badge-primary">${prod.category}</span></td>
      <td class="text-right text-red font-bold">${prod.stock}</td>
      <td class="text-right">${prod.minStock}</td>
      <td class="text-right font-bold">${formatRupiah(prod.sellingPrice)}</td>
      <td>${prod.unit}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function renderDashboardBestSellers() {
  const container = document.getElementById("dashboard-best-sellers");
  container.innerHTML = "";

  // Group all sold items across all sales
  const salesMap = {};
  
  sales.forEach(sale => {
    sale.items.forEach(item => {
      if (!salesMap[item.id]) {
        salesMap[item.id] = {
          name: item.name,
          quantity: 0,
          revenue: 0
        };
      }
      salesMap[item.id].quantity += item.quantity;
      salesMap[item.id].revenue += item.sellingPrice * item.quantity;
    });
  });

  const bestSellers = Object.values(salesMap)
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);

  if (bestSellers.length === 0) {
    container.innerHTML = `<li class="empty-list-item">Belum ada data penjualan.</li>`;
    return;
  }

  bestSellers.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div style="display:flex; align-items:center;">
        <span class="seller-rank">${index + 1}</span>
        <div class="seller-info">
          <span class="seller-name">${item.name}</span>
          <span class="seller-sales">${item.quantity} Terjual</span>
        </div>
      </div>
      <span class="seller-revenue">${formatRupiah(item.revenue)}</span>
    `;
    container.appendChild(li);
  });
}

function renderSalesTrendChart() {
  const ctx = document.getElementById("salesTrendChart").getContext("2d");
  
  // Calculate daily sales for last 7 days
  const daysRange = [];
  const salesData = [];
  const profitData = [];
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    daysRange.push(date.toLocaleDateString("id-ID", { weekday: "long", day: "numeric" }));
    
    // Calculate total for this day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    const daySales = sales.filter(sale => {
      const saleDate = new Date(sale.timestamp);
      return saleDate >= startOfDay && saleDate <= endOfDay;
    });
    
    let totalRevenue = 0;
    let totalProfit = 0;
    daySales.forEach(sale => {
      totalRevenue += sale.total;
      totalProfit += sale.profit;
    });
    
    salesData.push(totalRevenue);
    profitData.push(totalProfit);
  }

  // Destroy existing chart if it exists to prevent overlap
  if (salesChart) {
    salesChart.destroy();
  }

  // Custom Chart.js setup with beautiful design system
  salesChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: daysRange,
      datasets: [
        {
          label: "Pendapatan Kotor",
          data: salesData,
          borderColor: "#14532D", // Emerald Green
          backgroundColor: "rgba(20, 83, 45, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointBackgroundColor: "#14532D",
          pointHoverRadius: 7
        },
        {
          label: "Keuntungan Bersih",
          data: profitData,
          borderColor: "#D97706", // Amber Gold
          backgroundColor: "rgba(217, 119, 6, 0.05)",
          fill: false,
          tension: 0.35,
          borderWidth: 2,
          borderDash: [5, 5],
          pointBackgroundColor: "#D97706",
          pointHoverRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: { family: "'Outfit', sans-serif", weight: "600" },
            color: "#1e293b"
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || "";
              if (label) label += ": ";
              if (context.parsed.y !== null) {
                label += formatRupiah(context.parsed.y);
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value >= 1000000 
                ? "Rp " + (value / 1000000).toFixed(1) + "M"
                : "Rp " + (value / 1000).toFixed(0) + "rb";
            },
            font: { family: "'Plus Jakarta Sans', sans-serif" }
          },
          grid: { color: "#f1f5f9" }
        },
        x: {
          ticks: { font: { family: "'Plus Jakarta Sans', sans-serif" } },
          grid: { display: false }
        }
      }
    }
  });
}

// ==========================================================================
// TERMINAL KASIR (POS) LOGIC
// ==========================================================================
let posSelectedCategory = "all";
let posSearchQuery = "";

function initPOS() {
  setupPOSInputHandlers();
  renderPOSCategories();
  renderPOSCatalog();
  updatePOSCartUI();
}

function setupPOSInputHandlers() {
  const searchInput = document.getElementById("pos-search-input");
  
  // Real-time catalog filtering
  searchInput.addEventListener("input", (e) => {
    posSearchQuery = e.target.value.toLowerCase();
    renderPOSCatalog();
  });
  
  // Barcode scanner trigger handler (when it sends "Enter" after reading code)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const code = searchInput.value.trim();
      if (code) {
        // Attempt to find product matching code or barcode exactly
        const found = products.find(p => p.code === code || p.code.toLowerCase() === code.toLowerCase());
        if (found) {
          addToCart(found.id);
          searchInput.value = "";
          posSearchQuery = "";
          renderPOSCatalog();
        } else {
          showToast(`Produk dengan kode "${code}" tidak terdaftar`, "warning");
        }
      }
    }
  });

  // Clear search button
  document.getElementById("pos-clear-search-btn").addEventListener("click", () => {
    searchInput.value = "";
    posSearchQuery = "";
    renderPOSCatalog();
    searchInput.focus();
  });

  // Category filter tabs clicks
  document.getElementById("pos-category-tabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".pos-tab");
    if (!tab) return;

    document.querySelectorAll(".pos-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    posSelectedCategory = tab.getAttribute("data-category");
    renderPOSCatalog();
  });

  // Discount percentages inputs
  const pctInput = document.getElementById("pos-discount-pct");
  const nomInput = document.getElementById("pos-discount-nom");
  const taxInput = document.getElementById("pos-tax-pct");
  
  pctInput.addEventListener("input", () => {
    nomInput.value = ""; // Clear nominal when percentage changes
    calculateCartTotals();
  });
  
  nomInput.addEventListener("input", () => {
    pctInput.value = ""; // Clear percentage when nominal changes
    calculateCartTotals();
  });
  
  taxInput.addEventListener("input", () => {
    calculateCartTotals();
  });

  // Payment method radio selection handler
  const methodRadios = document.querySelectorAll('input[name="payment_method"]');
  methodRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      // Manage layout card active highlight styles
      document.querySelectorAll(".payment-method-card").forEach(c => c.classList.remove("active"));
      e.target.closest(".payment-method-card").classList.add("active");
      
      const tunaiPanel = document.getElementById("tunai-payment-details");
      const cashReceivedInput = document.getElementById("pos-cash-received");

      if (e.target.value === "Tunai") {
        tunaiPanel.style.display = "block";
        cashReceivedInput.value = "";
        cashReceivedInput.required = true;
      } else {
        // For non-cash (QRIS, Transfer), set received amount to exact total
        tunaiPanel.style.display = "none";
        cashReceivedInput.required = false;
      }
      calculateCartTotals();
    });
  });

  // Cash received event calculation
  const cashInput = document.getElementById("pos-cash-received");
  cashInput.addEventListener("input", () => {
    calculateCartTotals();
  });

  // Quick cash buttons
  document.querySelector(".quick-cash-grid").addEventListener("click", (e) => {
    const btn = e.target.closest(".quick-cash-btn");
    if (!btn) return;
    
    const valueType = btn.getAttribute("data-val");
    const subtotalVal = getCartSubtotal();
    const discountVal = getCartDiscount(subtotalVal);
    const taxPct = parseFloat(document.getElementById("pos-tax-pct").value) || 0;
    const grandTotal = Math.round((subtotalVal - discountVal) * (1 + taxPct / 100));
    
    if (valueType === "pas") {
      cashInput.value = grandTotal;
    } else {
      cashInput.value = parseFloat(valueType);
    }
    calculateCartTotals();
  });

  // Checkout button submit
  document.getElementById("pos-submit-btn").addEventListener("click", () => {
    processPOSCheckout();
  });

  // Clear cart button
  document.getElementById("pos-clear-cart-btn").addEventListener("click", () => {
    if (cart.length > 0) {
      if (confirm("Apakah Anda yakin ingin membatalkan semua item di keranjang?")) {
        cart = [];
        updatePOSCartUI();
        showToast("Keranjang dibersihkan");
      }
    }
  });
}

function renderPOSCategories() {
  const tabsContainer = document.getElementById("pos-category-tabs");
  tabsContainer.innerHTML = `<button class="pos-tab active" data-category="all">Semua Sembako</button>`;
  
  // Extract unique categories in products list
  const categories = [...new Set(products.map(p => p.category))].filter(Boolean);
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "pos-tab";
    btn.setAttribute("data-category", cat);
    btn.innerText = cat;
    tabsContainer.appendChild(btn);
  });
}

function renderPOSCatalog() {
  const grid = document.getElementById("pos-products-grid");
  grid.innerHTML = "";
  
  const filtered = products.filter(prod => {
    const matchesCategory = posSelectedCategory === "all" || prod.category === posSelectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(posSearchQuery) || 
                          prod.code.toLowerCase().includes(posSearchQuery) ||
                          prod.id.toLowerCase().includes(posSearchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-muted);">
        <i class="fa-solid fa-boxes-open" style="font-size: 2.5rem; opacity: 0.3; margin-bottom: 12px;"></i>
        <p style="font-weight: 700;">Produk tidak ditemukan</p>
        <small>Coba gunakan kata kunci pencarian yang lain.</small>
      </div>
    `;
    return;
  }

  filtered.forEach(prod => {
    const card = document.createElement("div");
    card.className = "pos-product-card";
    card.setAttribute("data-id", prod.id);
    
    // Identify low stock levels
    const isLow = prod.stock <= prod.minStock;
    const stockClass = isLow ? "pos-prod-stock low" : "pos-prod-stock";
    const stockIcon = isLow ? '<i class="fa-solid fa-triangle-exclamation"></i> ' : '';

    card.innerHTML = `
      <div class="pos-prod-graphic">
        <i class="${prod.icon || 'fa-solid fa-circle'}"></i>
      </div>
      <div class="pos-prod-code">${prod.code}</div>
      <h4 class="pos-prod-name">${prod.name}</h4>
      <div class="${stockClass}">${stockIcon}Stok: ${prod.stock} ${prod.unit}</div>
      <div class="pos-prod-footer">
        <span class="pos-prod-price">${formatRupiah(prod.sellingPrice)}</span>
        <div class="pos-add-indicator"><i class="fa-solid fa-plus"></i></div>
      </div>
    `;

    card.addEventListener("click", () => {
      addToCart(prod.id);
    });

    grid.appendChild(card);
  });
}

function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.stock <= 0) {
    showToast(`Stok "${prod.name}" sudah habis!`, "danger");
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.quantity < prod.stock) {
      existing.quantity++;
    } else {
      showToast(`Batas maksimal kuantitas sama dengan sisa stok (${prod.stock})`, "warning");
      return;
    }
  } else {
    cart.push({
      id: prod.id,
      code: prod.code,
      name: prod.name,
      category: prod.category,
      unit: prod.unit,
      costPrice: prod.costPrice,
      sellingPrice: prod.sellingPrice,
      quantity: 1,
      icon: prod.icon
    });
  }

  updatePOSCartUI();
  
  // Play minor audio or visually bounce item addition
  const cartElement = document.getElementById("pos-cart-items");
  cartElement.scrollTop = cartElement.scrollHeight;
}

function adjustCartQuantity(productId, amount) {
  const item = cart.find(item => item.id === productId);
  const prod = products.find(p => p.id === productId);
  if (!item || !prod) return;

  item.quantity += amount;
  
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.id !== productId);
  } else if (item.quantity > prod.stock) {
    showToast(`Batas stok tidak mencukupi (${prod.stock})`, "warning");
    item.quantity = prod.stock;
  }

  updatePOSCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updatePOSCartUI();
}

function updatePOSCartUI() {
  const container = document.getElementById("pos-cart-items");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cash-register"></i>
        <p>Keranjang kosong</p>
        <small class="text-muted">Klik produk di sebelah kiri atau ketik pencarian untuk memulai transaksi.</small>
      </div>
    `;
    
    // Disable submit
    document.getElementById("pos-submit-btn").disabled = true;
    document.getElementById("pos-subtotal").innerText = "Rp 0";
    document.getElementById("pos-grand-total").innerText = "Rp 0";
    document.getElementById("pos-cash-change").innerText = "Rp 0";
    return;
  }

  cart.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-icon">
        <i class="${item.icon || 'fa-solid fa-circle'}"></i>
      </div>
      <div class="cart-item-info">
        <span class="cart-item-title">${item.name}</span>
        <span class="cart-item-price-unit">${formatRupiah(item.sellingPrice)} / ${item.unit}</span>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="adjustCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="adjustCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <span class="cart-item-remove" onclick="removeFromCart('${item.id}')"><i class="fa-solid fa-trash-can"></i> Hapus</span>
        </div>
      </div>
      <div class="cart-item-total">
        <span class="cart-item-sum-price">${formatRupiah(item.sellingPrice * item.quantity)}</span>
      </div>
    `;
    container.appendChild(itemEl);
  });

  calculateCartTotals();
}

function getCartSubtotal() {
  return cart.reduce((acc, item) => acc + (item.sellingPrice * item.quantity), 0);
}

function getCartDiscount(subtotal) {
  const pctVal = parseFloat(document.getElementById("pos-discount-pct").value) || 0;
  const nomVal = parseFloat(document.getElementById("pos-discount-nom").value) || 0;
  
  if (pctVal > 0) {
    return Math.round(subtotal * (pctVal / 100));
  } else if (nomVal > 0) {
    return Math.min(nomVal, subtotal); // Cannot be greater than subtotal
  }
  return 0;
}

function calculateCartTotals() {
  if (cart.length === 0) return;

  const subtotal = getCartSubtotal();
  const discount = getCartDiscount(subtotal);
  const taxPct = parseFloat(document.getElementById("pos-tax-pct").value) || 0;
  
  const taxableTotal = Math.max(0, subtotal - discount);
  const tax = Math.round(taxableTotal * (taxPct / 100));
  const grandTotal = taxableTotal + tax;

  document.getElementById("pos-subtotal").innerText = formatRupiah(subtotal);
  document.getElementById("pos-grand-total").innerText = formatRupiah(grandTotal);

  // Check payment method selected
  const method = document.querySelector('input[name="payment_method"]:checked').value;
  const submitBtn = document.getElementById("pos-submit-btn");
  const changeEl = document.getElementById("pos-cash-change");
  
  if (method === "Tunai") {
    const cashReceived = parseFloat(document.getElementById("pos-cash-received").value) || 0;
    const change = cashReceived - grandTotal;
    
    changeEl.innerText = formatRupiah(Math.max(0, change));
    
    if (cashReceived >= grandTotal) {
      submitBtn.disabled = false;
      changeEl.className = "change-value text-success font-bold";
    } else {
      submitBtn.disabled = true;
      changeEl.innerText = "Uang kurang " + formatRupiah(Math.abs(change));
      changeEl.className = "change-value text-red font-bold";
    }
  } else {
    // For QRIS or Bank Transfer, we assume payment is approved immediately (or on mock receipt check)
    document.getElementById("pos-cash-received").value = grandTotal;
    changeEl.innerText = "Rp 0";
    changeEl.className = "change-value text-success font-bold";
    submitBtn.disabled = false;
  }
}

function processPOSCheckout() {
  if (cart.length === 0) return;

  const subtotal = getCartSubtotal();
  const discount = getCartDiscount(subtotal);
  const taxPct = parseFloat(document.getElementById("pos-tax-pct").value) || 0;
  const taxableTotal = Math.max(0, subtotal - discount);
  const tax = Math.round(taxableTotal * (taxPct / 100));
  const grandTotal = taxableTotal + tax;
  
  const method = document.querySelector('input[name="payment_method"]:checked').value;
  const cashReceived = parseFloat(document.getElementById("pos-cash-received").value) || 0;
  const change = Math.max(0, cashReceived - grandTotal);
  
  // Calculate exact net cost of goods (COGS) to calculate real net profit
  let costTotal = 0;
  cart.forEach(item => {
    costTotal += item.costPrice * item.quantity;
  });
  // Profit = Grand Total - Tax - Cost Price of items
  const profit = grandTotal - tax - costTotal;

  // Invoice ID format: TRX-YYYYMMDD-RandomDigit
  const now = new Date();
  const dateStr = now.getFullYear() + 
                  String(now.getMonth() + 1).padStart(2, '0') + 
                  String(now.getDate()).padStart(2, '0');
  const randomSec = String(Math.floor(Math.random() * 900) + 100);
  const transId = `TRX-${dateStr}-${randomSec}`;

  // Assemble transaction object
  const sale = {
    id: transId,
    timestamp: now.toISOString(),
    items: [...cart],
    subtotal: subtotal,
    discount: discount,
    tax: tax,
    total: grandTotal,
    profit: profit,
    paymentMethod: method,
    cashReceived: cashReceived,
    cashChange: change
  };

  // 1. Deduct Product Inventory Stock
  cart.forEach(item => {
    const originalProd = products.find(p => p.id === item.id);
    if (originalProd) {
      originalProd.stock = Math.max(0, originalProd.stock - item.quantity);
    }
  });

  // Save stock deductions
  saveProducts();

  // 2. Add Sale to database list
  sales.push(sale);
  saveSales();

  // 3. Render Receipt Details & Show modal
  openReceiptModal(sale);

  // 4. Reset checkout terminal cart
  cart = [];
  document.getElementById("pos-discount-pct").value = "";
  document.getElementById("pos-discount-nom").value = "";
  document.getElementById("pos-cash-received").value = "";
  updatePOSCartUI();
  
  showToast("Transaksi Berhasil Dicatat!");
}

// ==========================================================================
// RECEIPT PREVIEW & PRINT LOGIC
// ==========================================================================
function openReceiptModal(sale) {
  const modal = document.getElementById("receipt-modal");
  
  // Apply shop identities
  document.getElementById("rec-shop-name").innerText = settings.shopName.toUpperCase();
  document.getElementById("rec-shop-address").innerText = settings.shopAddress;
  document.getElementById("rec-shop-phone").innerText = "Telp: " + settings.shopPhone;
  
  // Apply sale attributes
  document.getElementById("rec-trans-id").innerText = sale.id;
  
  const saleDate = new Date(sale.timestamp);
  const dateFormatted = String(saleDate.getDate()).padStart(2, '0') + '/' + 
                        String(saleDate.getMonth() + 1).padStart(2, '0') + '/' + 
                        saleDate.getFullYear() + ' ' + 
                        String(saleDate.getHours()).padStart(2, '0') + ':' + 
                        String(saleDate.getMinutes()).padStart(2, '0');
  
  document.getElementById("rec-date").innerText = dateFormatted;
  document.getElementById("rec-cashier").innerText = settings.cashierName;
  document.getElementById("rec-payment").innerText = sale.paymentMethod;

  // Render items rows
  const listContainer = document.getElementById("rec-items-list");
  listContainer.innerHTML = "";
  
  sale.items.forEach(item => {
    const tr1 = document.createElement("tr");
    tr1.innerHTML = `
      <td colspan="4"><strong>${item.name}</strong></td>
    `;
    const tr2 = document.createElement("tr");
    tr2.style.borderBottom = "1px solid #eee";
    tr2.innerHTML = `
      <td><code>${item.code}</code></td>
      <td class="text-center">${item.quantity}</td>
      <td class="text-right">${formatRupiah(item.sellingPrice)}</td>
      <td class="text-right">${formatRupiah(item.sellingPrice * item.quantity)}</td>
    `;
    listContainer.appendChild(tr1);
    listContainer.appendChild(tr2);
  });

  // Calculate totals rows
  document.getElementById("rec-subtotal").innerText = formatRupiah(sale.subtotal);
  
  const discRow = document.getElementById("rec-row-discount");
  if (sale.discount > 0) {
    discRow.style.display = "flex";
    document.getElementById("rec-discount").innerText = "-" + formatRupiah(sale.discount);
  } else {
    discRow.style.display = "none";
  }

  document.getElementById("rec-tax").innerText = formatRupiah(sale.tax);
  document.getElementById("rec-grand-total").innerText = formatRupiah(sale.total);

  // Manage cash details visibility (Tunai vs non-cash)
  const cashDetailsBlock = document.getElementById("rec-cash-details");
  if (sale.paymentMethod === "Tunai") {
    cashDetailsBlock.style.display = "block";
    document.getElementById("rec-cash-received").innerText = formatRupiah(sale.cashReceived);
    document.getElementById("rec-cash-change").innerText = formatRupiah(sale.cashChange);
  } else {
    cashDetailsBlock.style.display = "none";
  }

  // Footer notes
  document.getElementById("rec-header-msg").innerText = settings.receiptHeader;
  document.getElementById("rec-footer-msg").innerText = settings.receiptFooter;

  // Set action handlers
  const printBtn = document.getElementById("receipt-modal-print-btn");
  
  // Clone button to remove previous listeners
  const newPrintBtn = printBtn.cloneNode(true);
  printBtn.parentNode.replaceChild(newPrintBtn, printBtn);
  
  newPrintBtn.addEventListener("click", () => {
    window.print();
  });

  // Show receipt modal container
  modal.classList.add("open");
  
  const closeModal = () => {
    modal.classList.remove("open");
  };
  
  document.getElementById("receipt-modal-close").onclick = closeModal;
  document.getElementById("receipt-modal-cancel").onclick = closeModal;
}

// ==========================================================================
// INVENTORY MANAGEMENT (CRUD)
// ==========================================================================
let inventorySearchQuery = "";
let inventorySelectedCategory = "all";
let inventorySelectedStock = "all";

function initInventory() {
  setupInventoryControls();
  renderInventoryTable();
}

function setupInventoryControls() {
  // Search inventory
  document.getElementById("inventory-search").addEventListener("input", (e) => {
    inventorySearchQuery = e.target.value.toLowerCase();
    inventoryCurrentPage = 1;
    renderInventoryTable();
  });

  // Category filter dropdown
  const categoryFilter = document.getElementById("inventory-filter-category");
  categoryFilter.addEventListener("change", (e) => {
    inventorySelectedCategory = e.target.value;
    inventoryCurrentPage = 1;
    renderInventoryTable();
  });

  // Stock status filter dropdown
  const stockFilter = document.getElementById("inventory-filter-stock");
  stockFilter.addEventListener("change", (e) => {
    inventorySelectedStock = e.target.value;
    inventoryCurrentPage = 1;
    renderInventoryTable();
  });

  // "Add Product" button trigger opening modal
  document.getElementById("inventory-add-btn").addEventListener("click", () => {
    openProductFormModal();
  });

  // Generate random product code button inside form
  document.getElementById("prod-gen-code-btn").addEventListener("click", () => {
    // Generate a typical EAN-13 style random number
    let code = "899";
    for(let i=0; i<10; i++) {
      code += Math.floor(Math.random() * 10);
    }
    document.getElementById("prod-code").value = code;
  });

  // Modal Cancel Actions
  document.getElementById("product-modal-close").addEventListener("click", closeProductModal);
  document.getElementById("product-modal-cancel").addEventListener("click", closeProductModal);

  // Form submission handler
  document.getElementById("product-form").addEventListener("submit", (e) => {
    e.preventDefault();
    submitProductForm();
  });
}

function updateCategoryDropdowns() {
  const filterDropdown = document.getElementById("inventory-filter-category");
  
  // Extract categories
  const categories = [...new Set(products.map(p => p.category))].filter(Boolean);
  
  // Preserve default options
  filterDropdown.innerHTML = '<option value="all">Semua Kategori</option>';
  
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.innerText = cat;
    filterDropdown.appendChild(opt);
  });
}

function renderInventoryTable() {
  const tableBody = document.getElementById("inventory-table-body");
  tableBody.innerHTML = "";

  updateCategoryDropdowns();

  // Filter products list
  const filtered = products.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(inventorySearchQuery) || 
                          prod.code.toLowerCase().includes(inventorySearchQuery) ||
                          prod.id.toLowerCase().includes(inventorySearchQuery);
                          
    const matchesCategory = inventorySelectedCategory === "all" || prod.category === inventorySelectedCategory;
    
    let matchesStock = true;
    if (inventorySelectedStock === "out") {
      matchesStock = prod.stock <= 0;
    } else if (inventorySelectedStock === "low") {
      matchesStock = prod.stock > 0 && prod.stock <= prod.minStock;
    } else if (inventorySelectedStock === "ok") {
      matchesStock = prod.stock > prod.minStock;
    }

    return matchesSearch && matchesCategory && matchesStock;
  });

  // Pagination calculation
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / inventoryItemsPerPage));
  
  if (inventoryCurrentPage > totalPages) inventoryCurrentPage = totalPages;
  
  const startIndex = (inventoryCurrentPage - 1) * inventoryItemsPerPage;
  const endIndex = Math.min(startIndex + inventoryItemsPerPage, totalItems);
  const paginated = filtered.slice(startIndex, endIndex);

  // Render rows
  if (paginated.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="9" class="text-center text-muted">Belum ada data produk terdaftar.</td>
      </tr>
    `;
    renderInventoryPagination(1, 1, 0, 0, 0);
    return;
  }

  paginated.forEach(prod => {
    const tr = document.createElement("tr");
    
    // Profit margin calculation: (sellingPrice - costPrice) / sellingPrice * 100
    const profitMargin = prod.sellingPrice > 0 
      ? Math.round(((prod.sellingPrice - prod.costPrice) / prod.sellingPrice) * 100)
      : 0;

    // Stock level styling
    let stockBadgeHTML = "";
    if (prod.stock <= 0) {
      stockBadgeHTML = `<span class="stock-status-pill out"><i class="fa-solid fa-circle-xmark"></i> Habis (0)</span>`;
    } else if (prod.stock <= prod.minStock) {
      stockBadgeHTML = `<span class="stock-status-pill low"><i class="fa-solid fa-circle-exclamation"></i> Tipis (${prod.stock})</span>`;
    } else {
      stockBadgeHTML = `<span class="stock-status-pill ok"><i class="fa-solid fa-circle-check"></i> ${prod.stock}</span>`;
    }

    tr.innerHTML = `
      <td><code>${prod.code}</code></td>
      <td>
        <span class="table-prod-icon"><i class="${prod.icon || 'fa-solid fa-circle'}"></i></span>
        <strong>${prod.name}</strong>
      </td>
      <td><span class="badge badge-primary">${prod.category}</span></td>
      <td>${prod.unit}</td>
      <td class="text-right">${formatRupiah(prod.costPrice)}</td>
      <td class="text-right font-bold text-success">${formatRupiah(prod.sellingPrice)}</td>
      <td class="text-right text-muted">${profitMargin}%</td>
      <td class="text-center">${stockBadgeHTML}</td>
      <td class="text-center">
        <div class="table-actions">
          <button class="action-btn action-btn-edit" onclick="editProduct('${prod.id}')" title="Edit Produk"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="action-btn action-btn-delete" onclick="deleteProduct('${prod.id}')" title="Hapus Produk"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  renderInventoryPagination(inventoryCurrentPage, totalPages, startIndex + 1, endIndex, totalItems);
}

function renderInventoryPagination(currentPage, totalPages, itemStart, itemEnd, totalItems) {
  const container = document.getElementById("inventory-pagination");
  container.innerHTML = "";

  if (totalItems === 0) {
    container.innerText = "Menampilkan 0 data";
    return;
  }

  container.innerHTML = `
    <div>Menampilkan ${itemStart}-${itemEnd} dari ${totalItems} Produk</div>
    <div class="pagination-controls">
      <button class="pagination-btn" id="inv-prev-btn" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>
      <span style="font-weight:700; font-size:0.85rem; padding:0 8px;">Hal ${currentPage} / ${totalPages}</span>
      <button class="pagination-btn" id="inv-next-btn" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  `;

  document.getElementById("inv-prev-btn").onclick = () => {
    inventoryCurrentPage--;
    renderInventoryTable();
  };
  document.getElementById("inv-next-btn").onclick = () => {
    inventoryCurrentPage++;
    renderInventoryTable();
  };
}

// Open modal form for creating or modifying product
function openProductFormModal(productObj = null) {
  const modal = document.getElementById("product-modal");
  const title = document.getElementById("product-modal-title");
  
  // Clear inputs
  document.getElementById("product-form").reset();
  document.getElementById("prod-id").value = "";
  
  if (productObj) {
    title.innerText = "Edit Detail Produk";
    document.getElementById("prod-id").value = productObj.id;
    document.getElementById("prod-code").value = productObj.code;
    document.getElementById("prod-category").value = productObj.category;
    document.getElementById("prod-name").value = productObj.name;
    document.getElementById("prod-unit").value = productObj.unit;
    document.getElementById("prod-icon").value = productObj.icon || "fa-solid fa-circle";
    document.getElementById("prod-cost-price").value = productObj.costPrice;
    document.getElementById("prod-selling-price").value = productObj.sellingPrice;
    document.getElementById("prod-stock").value = productObj.stock;
    document.getElementById("prod-min-stock").value = productObj.minStock;
  } else {
    title.innerText = "Tambah Produk Baru";
  }

  modal.classList.add("open");
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("open");
}

function submitProductForm() {
  const id = document.getElementById("prod-id").value;
  const code = document.getElementById("prod-code").value.trim();
  const category = document.getElementById("prod-category").value;
  const name = document.getElementById("prod-name").value.trim();
  const unit = document.getElementById("prod-unit").value;
  const icon = document.getElementById("prod-icon").value;
  const costPrice = parseFloat(document.getElementById("prod-cost-price").value) || 0;
  const sellingPrice = parseFloat(document.getElementById("prod-selling-price").value) || 0;
  const stock = parseFloat(document.getElementById("prod-stock").value) || 0;
  const minStock = parseFloat(document.getElementById("prod-min-stock").value) || 0;

  // Validate prices
  if (sellingPrice < costPrice) {
    if (!confirm("Harga jual lebih murah dibanding harga modal (rugi). Tetap simpan?")) {
      return;
    }
  }

  // Validate product barcode uniqueness
  const codeDuplicate = products.find(p => p.code === code && p.id !== id);
  if (codeDuplicate) {
    showToast(`Gagal: Kode/Barcode "${code}" sudah terpakai oleh "${codeDuplicate.name}"`, "danger");
    return;
  }

  if (id) {
    // Edit existing product
    const prod = products.find(p => p.id === id);
    if (prod) {
      prod.code = code;
      prod.category = category;
      prod.name = name;
      prod.unit = unit;
      prod.icon = icon;
      prod.costPrice = costPrice;
      prod.sellingPrice = sellingPrice;
      prod.stock = stock;
      prod.minStock = minStock;
      
      showToast(`Detail produk "${name}" berhasil diupdate!`);
    }
  } else {
    // Add new product
    // ID Generator
    const newId = "P-" + Date.now();
    products.push({
      id: newId,
      code,
      category,
      name,
      unit,
      icon,
      costPrice,
      sellingPrice,
      stock,
      minStock
    });
    
    showToast(`Produk baru "${name}" berhasil ditambahkan!`);
  }

  saveProducts();
  closeProductModal();
  renderInventoryTable();
  
  // Update categories and inventory listing catalog on active terminal
  renderPOSCategories();
  renderPOSCatalog();
}

// Exposed global callbacks for inline buttons triggers
window.editProduct = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (prod) {
    openProductFormModal(prod);
  }
};

window.deleteProduct = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (confirm(`Apakah Anda yakin ingin menghapus produk "${prod.name}" dari sistem?`)) {
    products = products.filter(p => p.id !== productId);
    saveProducts();
    renderInventoryTable();
    
    renderPOSCategories();
    renderPOSCatalog();
    showToast(`Produk "${prod.name}" dihapus`, "warning");
  }
};

// ==========================================================================
// RIWAYAT TRANSAKSI (SALES LOG) LOGIC
// ==========================================================================
let historySearchQuery = "";
let historyFilterPayment = "all";

function initHistory() {
  setupHistoryControls();
  renderHistoryTable();
}

function setupHistoryControls() {
  // Search trigger
  document.getElementById("history-search").addEventListener("input", (e) => {
    historySearchQuery = e.target.value.toLowerCase();
    historyCurrentPage = 1;
    renderHistoryTable();
  });

  // Date range filters changes
  document.getElementById("history-date-start").addEventListener("change", () => {
    historyCurrentPage = 1;
    renderHistoryTable();
  });
  document.getElementById("history-date-end").addEventListener("change", () => {
    historyCurrentPage = 1;
    renderHistoryTable();
  });

  // Payment method filter dropdown
  document.getElementById("history-filter-payment").addEventListener("change", (e) => {
    historyFilterPayment = e.target.value;
    historyCurrentPage = 1;
    renderHistoryTable();
  });
}

function renderHistoryTable() {
  const tableBody = document.getElementById("history-table-body");
  tableBody.innerHTML = "";

  const dateStartVal = document.getElementById("history-date-start").value;
  const dateEndVal = document.getElementById("history-date-end").value;

  let startLimit = null;
  let endLimit = null;

  if (dateStartVal) {
    startLimit = new Date(dateStartVal);
    startLimit.setHours(0, 0, 0, 0);
  }
  if (dateEndVal) {
    endLimit = new Date(dateEndVal);
    endLimit.setHours(23, 59, 59, 999);
  }

  // Filter sales list
  const filtered = sales.filter(sale => {
    const matchesSearch = sale.id.toLowerCase().includes(historySearchQuery);
    const matchesPayment = historyFilterPayment === "all" || sale.paymentMethod === historyFilterPayment;
    
    // Date limits
    const saleDate = new Date(sale.timestamp);
    const matchesDateStart = !startLimit || saleDate >= startLimit;
    const matchesDateEnd = !endLimit || saleDate <= endLimit;

    return matchesSearch && matchesPayment && matchesDateStart && matchesDateEnd;
  }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Latest transactions first

  // Pagination calculations
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / historyItemsPerPage));
  
  if (historyCurrentPage > totalPages) historyCurrentPage = totalPages;
  
  const startIndex = (historyCurrentPage - 1) * historyItemsPerPage;
  const endIndex = Math.min(startIndex + historyItemsPerPage, totalItems);
  const paginated = filtered.slice(startIndex, endIndex);

  if (paginated.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-muted">Tidak ada riwayat transaksi penjualan terdaftar.</td>
      </tr>
    `;
    renderHistoryPagination(1, 1, 0, 0, 0);
    return;
  }

  paginated.forEach(sale => {
    const tr = document.createElement("tr");
    
    // Parse timestamp to human readable format
    const sDate = new Date(sale.timestamp);
    const dateFormatted = String(sDate.getDate()).padStart(2, '0') + '/' + 
                          String(sDate.getMonth() + 1).padStart(2, '0') + '/' + 
                          sDate.getFullYear() + ' ' + 
                          String(sDate.getHours()).padStart(2, '0') + ':' + 
                          String(sDate.getMinutes()).padStart(2, '0');

    // Group items preview (like Beras (x1), Minyak (x2)...)
    const itemsPreviewCount = sale.items.reduce((acc, i) => acc + i.quantity, 0);

    // Payment badge styling
    let paymentBadge = `<span class="badge badge-primary">${sale.paymentMethod}</span>`;
    if (sale.paymentMethod === "QRIS") {
      paymentBadge = `<span class="badge badge-accent">${sale.paymentMethod}</span>`;
    } else if (sale.paymentMethod === "Transfer") {
      paymentBadge = `<span class="badge" style="background-color:var(--blue-light); color:var(--blue)">${sale.paymentMethod}</span>`;
    }

    tr.innerHTML = `
      <td><code>${sale.id}</code></td>
      <td>${dateFormatted}</td>
      <td class="text-center"><strong>${itemsPreviewCount} Item</strong></td>
      <td class="text-right font-bold text-success">${formatRupiah(sale.total)}</td>
      <td class="text-right text-muted">${formatRupiah(sale.profit)}</td>
      <td class="text-center">${paymentBadge}</td>
      <td class="text-center">
        <div class="table-actions">
          <button class="action-btn action-btn-edit" onclick="viewOldReceipt('${sale.id}')" title="Buka Detail Struk"><i class="fa-solid fa-receipt"></i></button>
          <button class="action-btn action-btn-delete" onclick="refundTransaction('${sale.id}')" title="Refund / Batalkan Transaksi"><i class="fa-solid fa-arrow-rotate-left"></i></button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  renderHistoryPagination(historyCurrentPage, totalPages, startIndex + 1, endIndex, totalItems);
}

function renderHistoryPagination(currentPage, totalPages, itemStart, itemEnd, totalItems) {
  const container = document.getElementById("history-pagination");
  container.innerHTML = "";

  if (totalItems === 0) {
    container.innerText = "Menampilkan 0 data";
    return;
  }

  container.innerHTML = `
    <div>Menampilkan ${itemStart}-${itemEnd} dari ${totalItems} Transaksi</div>
    <div class="pagination-controls">
      <button class="pagination-btn" id="hist-prev-btn" ${currentPage === 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>
      <span style="font-weight:700; font-size:0.85rem; padding:0 8px;">Hal ${currentPage} / ${totalPages}</span>
      <button class="pagination-btn" id="hist-next-btn" ${currentPage === totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  `;

  document.getElementById("hist-prev-btn").onclick = () => {
    historyCurrentPage--;
    renderHistoryTable();
  };
  document.getElementById("hist-next-btn").onclick = () => {
    historyCurrentPage++;
    renderHistoryTable();
  };
}

// Reprint receipt action trigger
window.viewOldReceipt = function(saleId) {
  const sale = sales.find(s => s.id === saleId);
  if (sale) {
    openReceiptModal(sale);
  }
};

// Reverts stock levels back and deletes transaction
window.refundTransaction = function(saleId) {
  const sale = sales.find(s => s.id === saleId);
  if (!sale) return;

  if (confirm(`Apakah Anda yakin ingin membatalkan transaksi "${sale.id}"?\nSeluruh sisa kuantitas item yang dibeli akan otomatis dikembalikan ke stok produk.`)) {
    
    // Return items to inventory stock levels
    sale.items.forEach(item => {
      const originalProd = products.find(p => p.id === item.id);
      if (originalProd) {
        originalProd.stock += item.quantity;
      }
    });

    // Save stock changes
    saveProducts();

    // Delete transaction from sales log
    sales = sales.filter(s => s.id !== saleId);
    saveSales();

    // Reload tables
    renderHistoryTable();
    showToast(`Transaksi "${sale.id}" berhasil direfund`, "warning");
    
    // Update POS terminal catalog displays
    renderPOSCatalog();
  }
};

// ==========================================================================
// CONFIGURATIONS & UTILITIES PAGE LOGIC
// ==========================================================================
function initSettings() {
  setupSettingsForm();
  setupDatabaseUtilityTriggers();
}

function loadSettingsFormValues() {
  document.getElementById("set-shop-name").value = settings.shopName;
  document.getElementById("set-shop-address").value = settings.shopAddress;
  document.getElementById("set-shop-phone").value = settings.shopPhone;
  document.getElementById("set-default-tax").value = settings.defaultTax;
  document.getElementById("set-receipt-header").value = settings.receiptHeader;
  document.getElementById("set-receipt-footer").value = settings.receiptFooter;
  document.getElementById("set-cashier-name").value = settings.cashierName;
}

function setupSettingsForm() {
  document.getElementById("settings-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    settings.shopName = document.getElementById("set-shop-name").value.trim();
    settings.shopAddress = document.getElementById("set-shop-address").value.trim();
    settings.shopPhone = document.getElementById("set-shop-phone").value.trim();
    settings.defaultTax = parseFloat(document.getElementById("set-default-tax").value) || 0;
    settings.receiptHeader = document.getElementById("set-receipt-header").value.trim();
    settings.receiptFooter = document.getElementById("set-receipt-footer").value.trim();
    settings.cashierName = document.getElementById("set-cashier-name").value.trim();
    
    saveSettings();
    
    // Apply changes instantly to headers or cashier labels
    document.getElementById("sidebar-cashier-name").innerText = settings.cashierName;
    document.getElementById("pos-tax-pct").value = settings.defaultTax;
    
    showToast("Preferensi pengaturan berhasil disimpan!");
  });
}

function setupDatabaseUtilityTriggers() {
  // Download database backup
  document.getElementById("db-export-btn").addEventListener("click", () => {
    const backupData = {
      version: "1.0",
      createdAt: new Date().toISOString(),
      products: products,
      sales: sales,
      settings: settings
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement("a");
    
    const formattedDate = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `berkah_pos_backup_${formattedDate}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    showToast("File backup berhasil diekspor");
  });

  // Import Database triggers file chooser dialog
  const fileInput = document.getElementById("db-import-file");
  const triggerBtn = document.getElementById("db-import-trigger");
  const fileNameSpan = document.getElementById("import-file-name");

  triggerBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    fileNameSpan.innerText = file.name;

    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        
        // Simple file validation
        if (imported.products && imported.sales && imported.settings) {
          if (confirm("Perhatian! Tindakan ini akan menimpa seluruh produk, riwayat penjualan, dan pengaturan Anda saat ini. Lanjutkan?")) {
            products = imported.products;
            sales = imported.sales;
            settings = imported.settings;
            
            saveProducts();
            saveSales();
            saveSettings();
            
            showToast("Database berhasil dipulihkan!");
            
            // Reload window to apply changes fully
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        } else {
          showToast("Format file tidak valid. Pastikan file backup bersumber dari aplikasi POS ini.", "danger");
          fileNameSpan.innerText = "Gagal memproses file";
        }
      } catch (err) {
        showToast("Error membaca file backup. Format JSON bermasalah.", "danger");
        fileNameSpan.innerText = "Error membaca file";
      }
    };
    reader.readAsText(file);
  });

  // Demo products data loading
  document.getElementById("db-demo-btn").addEventListener("click", () => {
    if (confirm("Muat Ulang Data Simulasi Sembako Lengkap?\nTindakan ini akan mengosongkan riwayat penjualan Anda sebelumnya.")) {
      products = JSON.parse(JSON.stringify(DEMO_PRODUCTS));
      saveProducts();

      // Regenerate dummy sales for graphics
      sales = generateDemoSales(products);
      saveSales();

      settings = { ...DEFAULT_SETTINGS };
      saveSettings();

      showToast("Data Simulasi Berhasil Dimuat!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });

  // Resets entire local storage database
  document.getElementById("db-reset-btn").addEventListener("click", () => {
    if (confirm("CAUTION: Apakah Anda yakin ingin MENGHAPUS SELURUH database?\nSeluruh data produk, riwayat penjualan, dan pengaturan toko akan dikosongkan permanen.")) {
      localStorage.clear();
      showToast("Database dibersihkan!", "danger");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });
}

// ==========================================================================
// UTILITY FINANCIAL FORMATTERS
// ==========================================================================
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}
