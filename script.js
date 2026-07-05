const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  const trigger = item.querySelector(".nav-trigger");

  trigger.addEventListener("mouseenter", () => {
    trigger.setAttribute("aria-expanded", "true");
  });

  item.addEventListener("mouseleave", () => {
    trigger.setAttribute("aria-expanded", "false");
  });
});
