let d = document;

export default function menu(btnHaburguer, btnClose, menu) {
  d.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (e.target.matches(btnHaburguer)) {
      d.querySelector(menu).classList.toggle("nav__link--menu");
    }
    if (e.target.matches(btnClose)) {
      d.querySelector(menu).classList.toggle("nav__link--menu");
    }
  });
}
