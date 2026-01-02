

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname, event) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


// ----------------------
// let slideIndex = 1;

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   let slides = document.querySelectorAll(".projects");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "grid";
// }
// function myFunction(x) {
//   if (x.matches) {
//     slideIndex += n;
//   } else {
//     console.log("hello");
//   }
// }

// // Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 600px)");

// // Call listener function at run time
// myFunction(x);

// // Attach listener function on state changes
// x.addEventListener("change", function () {
//   myFunction(x);
// });
