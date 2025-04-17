document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Select the imported navbar container
    const navContainer = document.querySelector(".side-nav-buttons");

    // Wait for the external HTML to load
    const observer = new MutationObserver(() => {
        // Select all nav links within the loaded navbar
        const navLinks = navContainer.querySelectorAll("a");

        // Loop through each link and match its path with the current page path
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname; // Extract the path from href
            if (linkPath === currentPath) {
                link.classList.add("active-page"); // Add the active-page class
            }
        });

        // Disconnect the observer once processing is done
        observer.disconnect();
    });

    // Observe changes in the container
    observer.observe(navContainer, { childList: true });
});
