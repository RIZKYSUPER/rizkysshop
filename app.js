// app.js
const products = [
  {
    name: "Penjualan Akun DigitalOcean 10 Droplet",
    price: "190000",
    description: "Akun DigitalOcean dengan kredensial.",
    thumbnail: "https://files.catbox.moe/ye9q66.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Penjualan Akun DigitalOcean 3 Droplet",
    price: "140000",
    description: "Akun DigitalOcean dengan kredensial.",
    thumbnail: "https://files.catbox.moe/ye9q66.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "VPS Ram 16 Core 4",
    price: "60000",
    description: "VPS dengan kapasitas tinggi.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "VPS"
  },
  {
    name: "VPS Ram 8 Core 4",
    price: "50000",
    description: "VPS dengan kapasitas tinggi.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "VPS"
  },
  {
      name: "VPS Ram 4 Core 2",
    price: "40000",
    description: "VPS dengan kapasitas tinggi.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "VPS"
  },
  {
      name: "VPS Ram 2 Core 2",
    price: "30000",
    description: "VPS dengan kapasitas tinggi.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "VPS"
  },
  {
      name: "VPS Ram 2 Core 1",
    price: "20000",
    description: "VPS dengan kapasitas tinggi.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "VPS"
  },
  {
    name: "Owner Panel",
    price: "30000",
    description: "Server Private Anti Intip.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Partner Panel",
    price: "20000",
    description: "Server Private Anti Intip.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Admin Panel",
    price: "10000",
    description: "Server Private Anti Intip.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Admin Panel",
    price: "10000",
    description: "Server Private Anti Intip.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel Unlimited",
    price: "11000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 10GB",
    price: "10000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 9GB",
    price: "9000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 8GB",
    price: "8000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 7GB",
    price: "7000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 6GB",
    price: "6000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 5GB",
    price: "5000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 4GB",
    price: "4000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 3GB",
    price: "3000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 2GB",
    price: "2000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Panel 1GB",
    price: "1000",
    description: "Panel Private No Delay.",
    thumbnail: "https://files.catbox.moe/xnko23.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Script Bot WhatsApp Bot MD",
    price: "35000",
    description: "Fitur 960+ No Delay.",
    thumbnail: "https://files.catbox.moe/8tfzfm.jpeg", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    name: "Script Bot WhatsApp Bot MD",
    price: "35000",
    description: "Fitur 960+ No Delay.",
    thumbnail: "https://files.catbox.moe/8tfzfm.jpeg", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    name: "Script Bot WhatsApp Simple V5",
    price: "15000",
    description: "Script Simple V5 Cocok Buat JB"
    thumbnail : "https://files.catbox.moe/ut9qmg.jpg", // URL gambar untuk thumbnail
  },
  {
    name: "Script Bot WhatsApp Backdoor",
    price: "10000",
    description: "Script Backdoor"
    thumbnail : "https://files.catbox.moe/q7z6lm.png", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    category: "Script"
    name: "Script Bot WhatsApp Simple V6",
    price: "15000",
    description: "Script Simple V6 Cocok Buat JB"
    thumbnail : "https://files.catbox.moe/8tfzfm.jpeg", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    name: "Sewa Bot WhatsApp MD",
    price: "5000",
    description: "Sewa Bot WhatsApp Multi Device"
    thumbnail : "https://files.catbox.moe/8tfzfm.jpeg", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    name: "Nomor Kosong WhatsApp Indonesia",
    price: "5000",
    description: "Nomor Kosong Indonesia"
    thumbnail : "https://files.catbox.moe/ch8a7j.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Nomor Kosong WhatsApp Polandia",
    price: "10000",
    description: "Nomor Kosong Polandia"
    thumbnail : "https://files.catbox.moe/oh5qdp.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Nomor Kosong WhatsApp Brazil",
    price: "14000",
    description: "Nomor Kosong Brazil"
    thumbnail : "https://files.catbox.moe/yndimz.jpg", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Jasa Fix Script Bot WhatsApp",
    price: "15000",
    description: "Script Anti Eror"
    thumbnail : "https://files.catbox.moe/ot8sag.jpeg", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    name: "Jasa Tambah Fitur Bot WhatsApp",
    price: "20000",
    description: "Tambah Fitur Biar Tambah Banyak"
    thumbnail : "https://files.catbox.moe/ot8sag.jpeg", // URL gambar untuk thumbnail
    category: "Script"
  },
  {
    name: "Jasa Install Pterodactyl",
    price: "15000",
    description: "Install Pterodactyl Sampai Bisa"
    thumbnail : "https://files.catbox.moe/pie05v.png", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Jasa Install Tema Stellar",
    price: "15000",
    description: "Install Tema Stellar Agar Lebih Cakep"
    thumbnail : "https://files.catbox.moe/pie05v.png", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Jasa Install Tema Enigma",
    price: "15000",
    description: "Install Tema Enigma Agar Lebih Cakep"
    thumbnail : "https://files.catbox.moe/pie05v.png", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Jasa Install Tema Billing",
    price: "15000",
    description: "Install Tema Billing Agar Lebih Cakep"
    thumbnail : "https://files.catbox.moe/pie05v.png", // URL gambar untuk thumbnail
    category: "Akun"
  },
  {
    name: "Jasa Encrypt Script Bot",
    price: "10000",
    description: "Encrypt Script Agar Tidak Di Salahgunakan"
    thumbnail : "https://files.catbox.moe/0v5k1c.jpg", // URL gambar untuk thumbnail
    category: "Script"
  },
  // Tambahkan produk lainnya di sini...
];

document.getElementById('search-bar').addEventListener('input', function(event) {
  const searchQuery = event.target.value.toLowerCase();
  const productList = document.querySelector('.product-list');
  productList.innerHTML = ''; // Kosongkan daftar produk terlebih dahulu

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.name}"> <!-- Gambar produk dengan URL -->
      <h3>${product.name}</h3>
      <p>Harga: Rp ${product.price}</p>
      <button class="buy-now-btn" onclick="buyProduct('${product.name}')">BELI SEKARANG</button>
    `;

    productList.appendChild(productCard);
  });
});

// Inisialisasi tampilan produk saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  const productList = document.querySelector('.product-list');
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.name}"> <!-- Gambar produk dengan URL -->
      <h3>${product.name}</h3>
      <p>Harga: Rp ${product.price}</p>
      <button class="buy-now-btn" onclick="buyProduct('${product.name}')">BELI SEKARANG</button>
    `;

    productList.appendChild(productCard);
  });
});

// Fungsi untuk membeli produk
function buyProduct(productName) {
  alert(`Anda memilih produk: ${productName}. Segera lanjutkan ke pembayaran.`);
}
