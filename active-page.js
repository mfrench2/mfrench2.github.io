document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navContainer = document.querySelector(".side-nav-buttons");

    function setActivePage() {
        if (navContainer) {
            const navLinks = navContainer.querySelectorAll("a");
            navLinks.forEach(link => {
                const linkPath = new URL(link.href).pathname;
                if (linkPath === currentPath) {
                    link.classList.add("active-page"); 
                }
            });
        }
    }

    // Run immediately in case navContainer is already loaded
    setActivePage();

    // Observe changes for dynamically loaded navbar
    const observer = new MutationObserver(() => {
        setActivePage();
        observer.disconnect(); // Stop observing after applying changes
    });

    if (navContainer) {
        observer.observe(navContainer, { childList: true });
    }
});
