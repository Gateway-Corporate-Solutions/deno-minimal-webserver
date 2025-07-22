const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('referral')) {
  const referral = urlParams.get('referral');
  if (referral) {
    const input = document.querySelector('input[name="referral"]');
    if (input) {
      input.value = referral;
    }
  }
}

// Enhanced Navbar Functionality
class NavbarController {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    this.menuBtn = document.getElementById("menu-btn");
    this.dropdownMenu = document.getElementById("dropdown-menu");
    this.scrollProgress = document.querySelector(
      ".scroll-progress",
    );
    this.lastScrollY = window.scrollY;
    this.isMenuOpen = false;

    this.init();
  }

  init() {
    this.bindEvents();
    this.updateScrollProgress();
  }

  bindEvents() {
    if (this.menuBtn) {
      // Menu toggle
      this.menuBtn.addEventListener(
        "click",
        () => this.toggleMenu(),
      );
    }

    if (this.dropdownMenu) {
      // Close menu when clicking on links
      this.dropdownMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => this.closeMenu());
      });
    }

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isMenuOpen) {
        this.closeMenu();
      }
    });

    // Scroll events
    window.addEventListener("scroll", () => {
      this.handleScroll();
      this.updateScrollProgress();
    }, { passive: true });

    // Resize event
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.isMenuOpen = true;
    this.menuBtn.classList.add("open");
    this.dropdownMenu.style.display = "block";

    // Trigger reflow for animation
    this.dropdownMenu.offsetHeight;

    this.dropdownMenu.classList.add("show");
    document.body.style.overflow = "hidden";

    // Add entrance animation to menu items
    setTimeout(() => {
      this.dropdownMenu.querySelectorAll("li").forEach(
        (item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
          item.classList.add("animate-in");
        },
      );
    }, 100);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menuBtn.classList.remove("open");
    this.dropdownMenu.classList.remove("show");
    document.body.style.overflow = "";

    setTimeout(() => {
      this.dropdownMenu.style.display = "none";
      this.dropdownMenu.querySelectorAll("li").forEach((item) => {
        item.classList.remove("animate-in");
        item.style.animationDelay = "";
      });
    }, 600);
  }

  handleScroll() {
    const currentScrollY = window.scrollY;

    // Add scrolled class for styling
    if (currentScrollY > 100) {
      this.navbar.classList.add("scrolled");
    } else {
      this.navbar.classList.remove("scrolled");
    }

    // Hide/show navbar on scroll
    if (
      currentScrollY > this.lastScrollY && currentScrollY > 100
    ) {
      this.navbar.classList.add("hidden");
    } else {
      this.navbar.classList.remove("hidden");
    }

    this.lastScrollY = currentScrollY;
  }

  updateScrollProgress() {
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    this.scrollProgress.style.width = scrolled + "%";
  }
}

// Initialize navbar when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new NavbarController();
});