// hamburger btn
document.querySelector(".hamburger").addEventListener("click" , function(){
    document.querySelector(".menu").classList.toggle("show");
})

// document.getElementById("myskills").addEventListener("click", function() {
//     const skillsSection = document.getElementById("skills");
//     if (skillsSection) {
//         skillsSection.scrollIntoView({ behavior: "smooth" });
//     }
// });

// document.getElementById("darkModeToggle").addEventListener("click",function(){
//     document.body.classList.toggle('darkmode');
// })

const toggle = document.getElementById("darkModeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    // Change icon depending on mode
    if (document.body.classList.contains("darkmode")) {
      toggle.textContent = "☀️"; // Light mode icon
    } else {
      toggle.textContent = "🌙"; // Dark mode icon
    }
  });




