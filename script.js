// ✅ JavaScript clean function showing compact-header clearly on scroll

const compactHeader = document.querySelector(".compact-header");

window.addEventListener("scroll", () => {
    const scrollTrigger = 250; // Scroll threshold to clearly show header
    if (window.scrollY > scrollTrigger) {
        compactHeader.classList.add("show");
    } else {
        compactHeader.classList.remove("show");
    }
});
