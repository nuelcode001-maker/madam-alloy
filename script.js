// ========================================
// MADAM ALLOY - REAL PRODUCT GALLERY
// ========================================

const BUSINESS_WHATSAPP = "2347017152949";

// Product photographs
const products = [
  {
    name: "Coca-Cola",
    category: "SOFT DRINKS",
    description: "Coca-Cola bottles in different available sizes.",
    image:
      "https://sparnigeria.com/wp-content/uploads/2024/07/COCA-COLA-50CL-PET-e1722869809140.png",
  },
  {
    name: "Pepsi",
    category: "SOFT DRINKS",
    description: "Pepsi beverages for wholesale enquiries.",
    image:
      "https://sparnigeria.com/wp-content/uploads/2024/07/PEPSI-PET-BOTTLE-50CL1.png",
  },
  {
    name: "Fanta Orange",
    category: "SOFT DRINKS",
    description: "Fanta Orange and other available varieties.",
    image:
      "https://sparnigeria.com/wp-content/uploads/2024/07/FANTA-ORANGE-PET-50CL.png",
  },
  {
    name: "Sprite",
    category: "SOFT DRINKS",
    description: "Refreshing Sprite in available bottle sizes.",
    image:
      "https://ng.coca-colahellenic.com/en/our-24-7-portfolio/explore-our-brands-and-products/_jcr_content/root/teaser_417793428_cop_1684718902.coreimg.png/1624953522631/1l-sprite-no-sugar.png",
  },
  {
    name: "5Alive Pulpy Orange",
    category: "JUICES & FRUIT DRINKS",
    description: "5Alive Pulpy Orange fruit drink.",
    image:
      "https://sparnigeria.com/wp-content/uploads/2024/07/5-ALIVE-PULPY-ORANGE-FRUIT-DRINK-85CL.png",
  },
  {
    name: "5Alive Assorted Range",
    category: "JUICES & FRUIT DRINKS",
    description: "Ask about available 5Alive flavours and sizes.",
    image:
      "https://ng.coca-colahellenic.com/en/our-24-7-portfolio/explore-our-brands-and-products/_jcr_content/root/teaser_417793428_cop_1793896395.coreimg.jpeg/1651276568374/new-5alive-range.jpeg",
  },
  {
    name: "Monster Original Green",
    category: "ENERGY DRINKS",
    description: "Monster Energy Original Green can.",
    image:
      "https://cdn.shopify.com/s/files/1/0773/4037/7385/files/1487248472097_spar3479_monster_energy_can_drink_44_cl__green__300x300_69efe69c-12c6-4269-801e-f30dfe4fd5af.jpg?v=1688820941",
  },
  {
    name: "Monster Ultra White",
    category: "ENERGY DRINKS",
    description: "Monster Energy Ultra White can.",
    image:
      "https://cdn.shopify.com/s/files/1/0773/4037/7385/files/aspar2198.jpg?v=1688820894",
  },
  {
    name: "Schweppes Assorted",
    category: "CANNED & MIXER DRINKS",
    description: "Ask about available Schweppes flavours and varieties.",
    image:
      "https://ng.coca-colahellenic.com/en/our-24-7-portfolio/explore-our-brands-and-products/_jcr_content/root/teaser_417793428_cop_93769707.coreimg.jpeg/1598384593433/schweppes.jpeg",
  },
  {
    name: "Assorted Beverages",
    category: "MORE DRINKS",
    description: "Ask us about other available bottled and canned drinks.",
    image:
      "https://ng.coca-colahellenic.com/en/about-us/nigerian-bottling-company-at-a-glance/_jcr_content/root/teaser_417793428_cop_1689024.coreimg.png/1598384495435/product-portfolio.png",
  },
];

// ========================================
// DISPLAY PRODUCT CARDS
// ========================================

const productGrid = document.getElementById("productGrid");

function displayProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = products
    .map(
      (product, index) => ` <article class="product-card">


  <div class="product-image">
    <img
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
      onerror="this.style.display='none'; this.parentElement.classList.add('image-missing'); this.parentElement.innerHTML='<div class=&quot;image-fallback&quot;><strong>MADAM ALLOY</strong><small>Product photo temporarily unavailable</small></div>';"
    >
  </div>

  <div class="product-info">
    <span class="product-category">${product.category}</span>

    <h3>${product.name}</h3>

    <p>${product.description}</p>

    <a
      href="#"
      class="product-enquiry"
      data-product="${product.name}">
      Enquire About This Drink →
    </a>
  </div>

</article>


`,
    )
    .join("");
}

// ========================================
// WHATSAPP ENQUIRIES
// ========================================

function openWhatsApp(message) {
  if (!BUSINESS_WHATSAPP) {
    alert("The business WhatsApp number will be connected before launch.");
    return;
  }

  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

// Individual product enquiries

document.addEventListener("click", function (event) {
  const button = event.target.closest(".product-enquiry");

  if (!button) return;

  event.preventDefault();

  const productName = button.dataset.product;

  openWhatsApp(
    `Hello MADAM ALLOY, I would like to enquire about ${productName}. Please share your wholesale prices and available quantities.`,
  );
});

// Main WhatsApp button

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
  whatsappButton.addEventListener("click", function (event) {
    event.preventDefault();

    openWhatsApp(
      "Hello MADAM ALLOY, I would like to make a wholesale beverage enquiry. Please share your available products and prices.",
    );
  });
}
// CUSTOMER LOCATION SHARING

const shareLocationButton = document.getElementById("shareLocationButton");

if (shareLocationButton) {
  shareLocationButton.addEventListener("click", function () {
    if (!navigator.geolocation) {
      alert("Your browser does not support location sharing.");
      return;
    }

    shareLocationButton.textContent = "Getting your location...";

    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        const message = `Hello MADAM ALLOY, I would like to arrange a delivery. My location is: ${mapLink}`;

        shareLocationButton.textContent = "📍 SHARE MY LOCATION";

        openWhatsApp(message);
      },

      function () {
        shareLocationButton.textContent = "📍 SHARE MY LOCATION";
        alert(
          "Location access was not granted. Please allow location permission and try again.",
        );
      },
    );
  });
}
// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// ========================================
// FOOTER YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========================================
// START WEBSITE
// ========================================

displayProducts();

console.log("MADAM ALLOY website loaded successfully.");
