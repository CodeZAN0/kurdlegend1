function toggleMode() {
    var body = document.body;
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
});



let profileDropdownList = document.querySelector(".profile-dropdown-list");
      let btn = document.querySelector(".profile-dropdown-btn");

      let classList = profileDropdownList.classList;

      const toggle = () => classList.toggle("active");

      window.addEventListener("click", function (e) {
        if (!btn.contains(e.target)) classList.remove("active");
      });

    window.addEventListener('resize', function() {
    // Get the width of the window
    let windowWidth = window.innerWidth;

    // Check if the window width is 900
    if (windowWidth <= 1000) {
        // Remove the old class and add the new class to the element with ID "a"
        document.getElementById("anav").classList.remove("nav-link dropdown-toggle text-warning  border border-warning p-2 m-2 rounded-3");
        document.getElementById("anav").classList.add("nav-link dropdown-toggle text-warning  border border-warning p-1 m-1 rounded-3");
    }
});
