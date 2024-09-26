// ini untuk navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  console.log(pageYOffset);
  if (window.pageYOffset >= 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// ini untuk read more && read less
function toggleText(divId, btnId) {
  var dots = document.getElementById(divId).querySelector(".dots");
  var moreText = document.getElementById(divId).querySelector(".more-text");
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
    e.preventDefault();
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
    e.preventDefault();
  }
}

// ini untuk swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    810: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    810: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    810: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

// ini untuk remove gambar
function adjustImages() {
  // Dapatkan elemen gambar
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");

  // Reset: Tampilkan semua gambar di desktop
  img1.style.display = "block";
  img2.style.display = "block";
  img3.style.display = "block";

  // Jika lebar layar kurang dari 768px (tablet)
  if (window.innerWidth < 850 && window.innerWidth >= 576) {
    img3.style.display = "none"; // Hapus gambar ketiga di tablet
  }
  // Jika lebar layar kurang dari 576px (mobile)
  else if (window.innerWidth < 400) {
    img2.style.display = "none"; // Hapus gambar kedua di mobile
    img3.style.display = "none"; // Hapus gambar ketiga di mobile
  }
}

// Jalankan fungsi saat halaman dimuat
window.onload = adjustImages;

// Jalankan fungsi saat ukuran layar diubah
window.onresize = adjustImages;

// modal order
document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.getElementById("openModal");
  var orderModalEl = document.getElementById("orderModal");
  var submitOrderBtn = document.getElementById("submitOrder");
  var orderForm = document.getElementById("orderForm");

  var orderModal = new bootstrap.Modal(orderModalEl);

  openModalBtn.addEventListener("click", function (event) {
    event.preventDefault();
    orderModal.show();
  });

  orderModalEl.addEventListener("shown.bs.modal", function () {
    document.getElementById("name").focus();
  });

  submitOrderBtn.addEventListener("click", function () {
    if (orderForm.checkValidity()) {
      // Here you would typically send the form data to a server
      alert("Orderan anda sedang dalam antrian tunggu verifikasi melalui Whatsapp ☺☺");
      orderModal.hide();
      orderForm.reset();
    } else {
      orderForm.reportValidity();
    }
  });

  // Prevent modal from closing when clicking inside
  orderModalEl.addEventListener("click", function (event) {
    if (event.target === orderModalEl) {
      event.stopPropagation();
    }
  });

  // Log any input to verify interactivity
  orderForm.addEventListener("input", function (event) {
    console.log("Input detected:", event.target.id, event.target.value);
  });
});

