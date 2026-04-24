/* =============================================
   KEDAI-KANG-HAJI — app.js
   ============================================= */

// ── CONFIG ──────────────────────────────────────
const WA_NUMBER = '6281234567890'; // ← Ganti dengan nomor WA asli

// ── MENU DATA ───────────────────────────────────
const menuData = [
  {
    id: 'mie',
    label: 'Aneka Mie',
    items: [
      { id: 'mie1', name: 'Mie Bakar Sambal Slebew',   price: 12000 },
      { id: 'mie2', name: 'Mie Bakar Sambal Insecure',  price: 12000 },
      { id: 'mie3', name: 'Mie Bakar Sambal Netizen',   price: 12000 },
      { id: 'mie4', name: 'Mie Bakar Sambal FYP',       price: 12000 },
      { id: 'mie5', name: 'Mie Bakar Sambal Duarr',     price: 12000 },
    ]
  },
  {
    id: 'makberat',
    label: 'Makanan Berat',
    items: [
      { id: 'mb1',  name: 'Nasi Putih',               price: 4000  },
      { id: 'mb2',  name: 'Nasi Lengko',              price: 13000 },
      { id: 'mb3',  name: 'Nasi Goreng Baso Sosis',   price: 14000 },
      { id: 'mb4',  name: 'Nasi Goreng Telor',        price: 17000 },
      { id: 'mb5',  name: 'Nasi Ayam Penyet',         price: 15000 },
      { id: 'mb6',  name: 'Nasi Ayam Serundeng',      price: 15000 },
      { id: 'mb7',  name: 'Nasi Telor',               price: 7000  },
      { id: 'mb8',  name: 'Nasi Telor Tahu Tempe',    price: 10000 },
      { id: 'mb9',  name: 'Indomie',                  price: 7000  },
      { id: 'mb10', name: 'Indomie Telor',            price: 10000 },
    ]
  },
  {
    id: 'cemilan',
    label: 'Cemilan',
    items: [
      { id: 'cem1', name: 'Basreng (Kecil)',     price: 5000  },
      { id: 'cem2', name: 'Basreng (Besar)',     price: 10000 },
      { id: 'cem3', name: 'Otak Otak (Kecil)',  price: 5000  },
      { id: 'cem4', name: 'Otak Otak (Besar)',  price: 10000 },
      { id: 'cem5', name: 'Kentang Goreng',      price: 10000 },
      { id: 'cem6', name: 'Mix B+O',             price: 10000 },
      { id: 'cem7', name: 'Mix All',             price: 10000 },
      { id: 'cem8', name: 'Tahu Walik',          price: 10000 },
      { id: 'cem9', name: 'Pangsit Goreng',      price: 10000 },
    ]
  },
  {
    id: 'anekaminuman',
    label: 'Aneka Minuman',
    items: [
      { id: 'am1',  name: 'Teh Tarik Panas',       price: 5000 },
      { id: 'am2',  name: 'Teh Tarik Dingin',      price: 6000 },
      { id: 'am3',  name: 'Susu Putih',            price: 4000 },
      { id: 'am4',  name: 'Susu Coklat',           price: 4000 },
      { id: 'am5',  name: 'Kopi ABC Susu',         price: 4000 },
      { id: 'am6',  name: 'Kopi ABC Mocca',        price: 4000 },
      { id: 'am7',  name: 'Kopi Hitam Panas',      price: 4000 },
      { id: 'am8',  name: 'Kopi Hitam Dingin',     price: 5000 },
      { id: 'am9',  name: 'Indocafe Panas',        price: 4000 },
      { id: 'am10', name: 'Indocafe Dingin',       price: 5000 },
      { id: 'am11', name: 'Chocolatos Panas',      price: 5000 },
      { id: 'am12', name: 'Chocolatos Dingin',     price: 6000 },
      { id: 'am13', name: 'Drink Beng Beng Panas', price: 5000 },
      { id: 'am14', name: 'Drink Beng Beng Dingin',price: 6000 },
      { id: 'am15', name: 'Energen Panas',         price: 4000 },
      { id: 'am16', name: 'Energen Dingin',        price: 6000 },
      { id: 'am17', name: 'Good Day Panas',        price: 4000 },
      { id: 'am18', name: 'Good Day Dingin',       price: 5000 },
      { id: 'am19', name: 'Good Day Cappucino Panas',  price: 5000 },
      { id: 'am20', name: 'Good Day Cappucino Dingin', price: 6000 },
      { id: 'am21', name: 'Susu Jahe',             price: 4000 },
      { id: 'am22', name: 'Teh Manis Panas',       price: 3000 },
      { id: 'am23', name: 'Teh Manis Dingin',      price: 4000 },
      { id: 'am24', name: 'Luwak White Coffee',    price: 4000 },
    ]
  },
  {
    id: 'minuman',
    label: 'Minuman Spesial',
    items: [
      { id: 'mn1',  name: 'Good Day Freeze',    price: 6000  },
      { id: 'mn2',  name: 'Pop Ice + Topping',  price: 6000  },
      { id: 'mn3',  name: 'Tea Jus',            price: 3000  },
      { id: 'mn4',  name: 'Nutrisari',          price: 5000  },
      { id: 'mn5',  name: 'Extrajoss',          price: 5000  },
      { id: 'mn6',  name: 'Kukubima',           price: 5000  },
      { id: 'mn7',  name: 'Matcha Susu',        price: 10000 },
      { id: 'mn8',  name: 'Teh Tarik Susu',    price: 10000 },
      { id: 'mn9',  name: 'Nutrisari Yakult',   price: 10000 },
      { id: 'mn10', name: 'Kukubima Susu',      price: 8000  },
      { id: 'mn11', name: 'Extrajoss Susu',     price: 8000  },
      { id: 'mn12', name: 'Taro Susu',          price: 10000 },
      { id: 'mn13', name: 'Mojito Strawberry',  price: 10000 },
      { id: 'mn14', name: 'Mojito Melon',       price: 10000 },
      { id: 'mn15', name: 'Mojito Lemon',       price: 10000 },
      { id: 'mn16', name: 'Teh Kampul',         price: 8000  },
      { id: 'mn17', name: 'Kopi Gula Aren',     price: 10000 },
      { id: 'mn18', name: 'Kopi Caramel',       price: 10000 },
      { id: 'mn19', name: 'Kopi Mocca',         price: 10000 },
      { id: 'mn20', name: 'Kopi Spanish Latte', price: 10000 },
    ]
  },
  {
    id: 'rotibakar',
    label: 'Roti Bakar',
    items: [
      { id: 'rb1', name: 'Roti Bakar Coklat',      price: 8000  },
      { id: 'rb2', name: 'Roti Bakar Strawberry',  price: 8000  },
      { id: 'rb3', name: 'Roti Bakar Coklat Keju', price: 10000 },
      { id: 'rb4', name: 'Roti Bakar Susu Keju',   price: 10000 },
    ]
  },
  {
    id: 'spaghetti',
    label: 'Spaghetti',
    items: [
      { id: 'sp1', name: 'Spaghetti Carbonara',  price: 10000 },
      { id: 'sp2', name: 'Spaghetti Bolognese',  price: 10000 },
      { id: 'sp3', name: 'Spaghetti Aglio Olio', price: 10000 },
    ]
  },
  {
    id: 'babakaran',
    label: 'Aneka Babakaran',
    items: [
      { id: 'bb1', name: 'Sosis Merah Bakar',    price: 2500  },
      { id: 'bb2', name: 'Sosis Orange Sedang',  price: 5000  },
      { id: 'bb3', name: 'Sosis Orange Besar',   price: 10000 },
      { id: 'bb4', name: 'Dumpling Bakar',       price: 5000  },
      { id: 'bb5', name: 'Cikua Bakar',          price: 2500  },
      { id: 'bb6', name: 'Twistter Bakar',       price: 2500  },
      { id: 'bb7', name: 'Love Bakar',           price: 2500  },
      { id: 'bb8', name: 'Fishroll Bakar',       price: 2500  },
    ]
  },
];

// ── CART STATE ──────────────────────────────────
let cart = {}; // { itemId: { name, price, qty } }
let currentTab = 'semua';

// ── HELPERS ─────────────────────────────────────
function formatRp(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── NAVBAR ──────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // Tutup navbar mobile
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navToggle').classList.remove('open');
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('navToggle').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── CART SIDEBAR ────────────────────────────────
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

// ── CART LOGIC ──────────────────────────────────
function addToCart(id, name, price, delta = 1) {
  if (!cart[id]) {
    cart[id] = { name, price, qty: 0 };
  }
  cart[id].qty = Math.max(0, cart[id].qty + delta);

  if (cart[id].qty === 0) {
    delete cart[id];
  }

  renderCart();
  updateMenuCardState(id);
}

function setQty(id, name, price, qty) {
  qty = Math.max(0, qty);
  if (qty === 0) {
    delete cart[id];
  } else {
    cart[id] = { name, price, qty };
  }
  renderCart();
  updateMenuCardState(id);
}

function removeFromCart(id) {
  delete cart[id];
  renderCart();
  updateMenuCardState(id);
  showToast('Item dihapus dari keranjang');
}

function clearCart() {
  if (!Object.keys(cart).length) return;
  if (!confirm('Kosongkan semua keranjang?')) return;
  cart = {};
  renderCart();
  // Reset all menu card states
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.textContent = '+ Keranjang';
    btn.classList.remove('in-cart');
  });
  document.querySelectorAll('.qty-display').forEach(el => el.textContent = '0');
  showToast('Keranjang dikosongkan');
}

function getCartTotal() {
  return Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

// ── RENDER CART ─────────────────────────────────
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  const badgeEl = document.getElementById('cartBadge');

  const keys = Object.keys(cart);
  const count = getCartCount();

  // Badge
  badgeEl.textContent = count;
  badgeEl.classList.add('pop');
  setTimeout(() => badgeEl.classList.remove('pop'), 300);

  if (keys.length === 0) {
    emptyEl.style.display = 'block';
    footerEl.style.display = 'none';
    // Clear rendered items
    Array.from(itemsEl.children).forEach(ch => {
      if (!ch.classList.contains('cart-empty')) ch.remove();
    });
    return;
  }

  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';

  // Rebuild items
  Array.from(itemsEl.children).forEach(ch => {
    if (!ch.classList.contains('cart-empty')) ch.remove();
  });

  keys.forEach(id => {
    const { name, price, qty } = cart[id];
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.id = `cart-row-${id}`;
    div.innerHTML = `
      <div>
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-price">${formatRp(price)} × ${qty}</div>
        <div class="cart-item-controls">
          <button class="btn-qty" onclick="cartDelta('${id}', -1)">−</button>
          <span class="qty-display">${qty}</span>
          <button class="btn-qty" onclick="cartDelta('${id}', 1)">+</button>
          <button class="cart-item-delete" onclick="removeFromCart('${id}')" title="Hapus">🗑</button>
        </div>
      </div>
      <div class="cart-item-subtotal">${formatRp(price * qty)}</div>
    `;
    itemsEl.appendChild(div);
  });

  totalEl.textContent = formatRp(getCartTotal());
}

function cartDelta(id, delta) {
  if (!cart[id]) return;
  const { name, price } = cart[id];
  addToCart(id, name, price, delta);
}

// ── UPDATE MENU CARD STATE ───────────────────────
function updateMenuCardState(id) {
  const qty = cart[id] ? cart[id].qty : 0;

  // Update qty-display in all rendered cards
  document.querySelectorAll(`[data-item-id="${id}"] .qty-display`).forEach(el => {
    el.textContent = qty;
  });

  // Update add button text
  document.querySelectorAll(`[data-item-id="${id}"] .btn-add-cart`).forEach(btn => {
    if (qty > 0) {
      btn.textContent = `✓ ${qty} di keranjang`;
      btn.classList.add('in-cart');
    } else {
      btn.textContent = '+ Keranjang';
      btn.classList.remove('in-cart');
    }
  });
}

// ── BUILD MENU CARD HTML ─────────────────────────
function buildMenuCard(item) {
  const qty = cart[item.id] ? cart[item.id].qty : 0;
  const inCart = qty > 0;
  return `
    <div class="menu-card" data-item-id="${item.id}">
      <div class="menu-card-info">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-price">${formatRp(item.price)}</div>
      </div>
      <div class="menu-card-controls">
        <button class="btn-qty" onclick="menuDelta('${item.id}','${escHtml(item.name)}',${item.price},-1)">−</button>
        <span class="qty-display">${qty}</span>
        <button class="btn-qty" onclick="menuDelta('${item.id}','${escHtml(item.name)}',${item.price},1)">+</button>
        <button class="btn-add-cart ${inCart ? 'in-cart' : ''}"
          onclick="addItemToCart('${item.id}','${escHtml(item.name)}',${item.price})">
          ${inCart ? `✓ ${qty} di keranjang` : '+ Keranjang'}
        </button>
      </div>
    </div>
  `;
}

function escHtml(s) {
  return s.replace(/'/g, "\\'");
}

function menuDelta(id, name, price, delta) {
  const current = cart[id] ? cart[id].qty : 0;
  const newQty = Math.max(0, current + delta);
  if (newQty > 0) {
    cart[id] = { name, price, qty: newQty };
  } else {
    delete cart[id];
  }
  renderCart();
  updateMenuCardState(id);
  if (delta > 0 && newQty === 1) showToast(`${name} ditambahkan!`);
}

function addItemToCart(id, name, price) {
  const current = cart[id] ? cart[id].qty : 0;
  if (current === 0) {
    cart[id] = { name, price, qty: 1 };
    showToast(`${name} ditambahkan ke keranjang!`);
  }
  renderCart();
  updateMenuCardState(id);
  // Briefly open cart to show feedback
  openCart();
}

// ── RENDER TABS & MENU ───────────────────────────
function buildTabs() {
  const bar = document.getElementById('tabBar');
  bar.innerHTML = '';

  // "Semua" tab
  const allBtn = document.createElement('button');
  allBtn.className = 'tab-btn active';
  allBtn.textContent = 'Semua Menu';
  allBtn.onclick = () => showTab('semua', allBtn);
  bar.appendChild(allBtn);

  menuData.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.textContent = cat.label;
    btn.onclick = () => showTab(cat.id, btn);
    bar.appendChild(btn);
  });
}

function buildMenuContent() {
  const container = document.getElementById('menuContent');
  container.innerHTML = '';

  // ── Semua section ──
  const allSection = document.createElement('div');
  allSection.className = 'menu-cat-section active';
  allSection.id = 'cat-semua';

  const allGrid = document.createElement('div');
  allGrid.className = 'all-grid';

  menuData.forEach(cat => {
    const block = document.createElement('div');
    block.className = 'all-cat-block';
    block.innerHTML = `
      <div class="menu-cat-header">
        <h3>${cat.label}</h3>
        <div class="menu-cat-header-line"></div>
      </div>
      ${cat.items.map(buildMenuCard).join('')}
    `;
    allGrid.appendChild(block);
  });

  allSection.appendChild(allGrid);
  container.appendChild(allSection);

  // ── Per-category sections ──
  menuData.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'menu-cat-section';
    section.id = `cat-${cat.id}`;
    section.innerHTML = `
      <div class="menu-cat-header">
        <h3>${cat.label}</h3>
        <div class="menu-cat-header-line"></div>
      </div>
      <div class="single-grid">
        ${cat.items.map(buildMenuCard).join('')}
      </div>
    `;
    container.appendChild(section);
  });
}

function showTab(id, btn) {
  // Hide all sections
  document.querySelectorAll('.menu-cat-section').forEach(s => s.classList.remove('active'));
  // Show target
  const target = document.getElementById(`cat-${id}`);
  if (target) target.classList.add('active');

  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  currentTab = id;
}

// ── ORDER VIA WA ────────────────────────────────
function orderViaWA() {
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    showToast('Keranjang masih kosong! Pilih menu dulu 😊');
    openCart();
    return;
  }

  const note = document.getElementById('cartNote') ? document.getElementById('cartNote').value.trim() : '';

  let msg = '🍜 *Halo Kang Haji, saya mau pesan:*\n\n';

  keys.forEach((id, i) => {
    const { name, price, qty } = cart[id];
    msg += `${i + 1}. ${name}\n   ${qty} × ${formatRp(price)} = *${formatRp(price * qty)}*\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━\n`;
  msg += `*Total: ${formatRp(getCartTotal())}*\n`;

  if (note) {
    msg += `\n📝 *Catatan:* ${note}\n`;
  }

  msg += `\nTerima kasih! 🙏`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
}

// ── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildTabs();
  buildMenuContent();
  renderCart();
});