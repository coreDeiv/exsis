"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach(carousel => {
    insertNumbers(carousel);
    carousel.querySelector(".prev").addEventListener("click", e => {
      minusItem(carousel);
    });
    carousel.querySelector(".next").addEventListener("click", () => {
      plusItem(carousel);
    });
    insertDots(carousel);
    carousel.querySelectorAll(".dot").forEach(dot => {
      dot.addEventListener("click", e => {
        let item = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
        showItems(carousel, item);
      });
    });
    showItems(carousel, 0);
  });
});

function insertNumbers(carousel) {
  const length = carousel.querySelectorAll(".item").length;

  for (let i = 0; i < length; i++) {
    const nmbr = document.createElement("div");
    nmbr.classList.add("sf-carousel_item--counter");
    nmbr.innerText = i + 1 + " / " + length;
    carousel.querySelectorAll(".item")[i].append(nmbr);
  }
}

function insertDots(carousel) {
  const dots = document.createElement("div");
  dots.classList.add("dots");
  carousel.append(dots);
  carousel.querySelectorAll(".item").forEach(elem => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    carousel.querySelector(".dots").append(dot);
  });
}

function plusItem(carousel) {
  let item = currentItem(carousel);
  carousel.querySelectorAll(".item")[item].nextElementSibling.classList.contains("item") ? showItems(carousel, item + 1) : showItems(carousel, 0);
}

function minusItem(carousel) {
  let item = currentItem(carousel);
  carousel.querySelectorAll(".item")[item].previousElementSibling != null ? showItems(carousel, item - 1) : showItems(carousel, carousel.querySelectorAll(".item").length - 1);
}

function currentItem(carousel) {
  return [...carousel.querySelectorAll(".item")].findIndex(item => item.style.display == "block");
}

function showItems(carousel, item) {
  if (carousel.querySelectorAll(".item")[currentItem(carousel)] != undefined) carousel.querySelectorAll(".item")[currentItem(carousel)].style.display = "none";
  carousel.querySelectorAll(".item")[item].style.display = "block";
  if (carousel.querySelector(".dot.active") != null) carousel.querySelector(".dot.active").classList.remove("active");
  carousel.querySelectorAll(".dot")[item].classList.add("active");
}

// Form in Desktop
if (window.matchMedia("(min-width: 1024px)").matches) {
  document.querySelectorAll("#brand-car_item, #model-car_item, #year-car_item").forEach(elem => {
    elem.innerHTML = "";
  });
} else {
  document.querySelector("#brand-car_item").innerHTML = "<option value='0'>Marca del auto</option>";
  document.querySelector("#model-car_item").innerHTML = "<option value='0'>Modelo del auto</option>";
  document.querySelector("#year-car_item").innerHTML = "<option value='0'>Año</option>";
  document.querySelectorAll("#brand-car_item, #model-car_item, #year-car_item").forEach(elem => {
    elem.classList.add("form-control");
  });
}

document.querySelector("#submit").addEventListener("click", e => {
  if (document.querySelector("#brand-car").value == 0) {
    document.querySelector("#brand-car").classList.add("is-invalid");
    e.preventDefault();
  }
});

document.querySelector("#submit").addEventListener("click", e => {
  if (document.querySelector("#model-car").value == 0) {
    document.querySelector("#model-car").classList.add("is-invalid");
    e.preventDefault();
  }
});

document.querySelector("#submit").addEventListener("click", e => {
  if (document.querySelector("#year-car").value == 0) {
    document.querySelector("#year-car").classList.add("is-invalid");
    e.preventDefault();
  }
});

document.querySelector("#user-email").addEventListener("blur", e => {
  if (e.target.value.indexOf("@") == -1) {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
  }
});

document.querySelector("#form-cars").addEventListener("submit", e => {
  if (document.querySelector("#user-email").value == 0) {
    document.querySelector("#user-email").classList.add("is-invalid");
    e.preventDefault();
  }
  if (document.querySelector("#user-phone").value == 0) {
    document.querySelector("#user-phone").classList.add("is-invalid");
    e.preventDefault();
  }
});

document.querySelector("#user-phone").addEventListener("blur", e => {
  if (e.target.value.match(/^(\+57|0057|57)?[ -]*(3)[ -]*([0-9][ -]*){9}$/)) {
    e.target.classList.remove("is-invalid");
  } else {
    e.target.classList.add("is-invalid");
  }
});

document.querySelector("#form-cars").addEventListener("submit", e => {
  e.preventDefault();
  localStorage.setItem("brand", document.querySelector("#brand-car").value);
  localStorage.setItem("model", document.querySelector("#model-car").value);
  localStorage.setItem("year", document.querySelector("#year-car").value);
  localStorage.setItem("email", document.querySelector("#user-email").value);
  localStorage.setItem("phone", document.querySelector("#user-phone").value);
  
  document.querySelector("#brandCar-form").innerText = document.querySelector("#brand-car").value;
  document.querySelector("#modelCar-form").innerText = document.querySelector("#model-car").value;
  document.querySelector("#yearCar-form").innerText = document.querySelector("#year-car").value;
  document.querySelector("#emailUser-form").innerText = document.querySelector("#user-email").value;
  document.querySelector("#phoneUser-form").innerText = document.querySelector("#user-phone").value;

  document.querySelector("#modal-form-home").classList.add("active-modal");

});

/* Menu Header */
document.querySelector("#open-menu").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#open-menu").classList.toggle("active-menu");
  document.querySelector("#nav-menu").classList.toggle("show");
});

document.querySelectorAll(".dropdown").forEach(elem => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("dropdown-show");
  });
});

/* Resize Window */
window.addEventListener("resize", () => {
  window.location.reload();
});

/* Modal */
// Al darle click al boton con id ="close-modal", le quita la clase "active-modal" al id "modal-form-home" y reinicia la pagina
document.querySelector("#close-modal").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#modal-form-home").classList.remove("active-modal");
  window.location.reload();
});
