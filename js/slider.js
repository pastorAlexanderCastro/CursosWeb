const d = document;

export default function slider(testimonios, rowRigth, rowLet) {
  const $slider = [...d.querySelectorAll(testimonios)],
    $btnRigth = d.querySelector(rowRigth),
    $btnLeft = d.querySelector(rowLet);
  let value;

  const chagenPosition = (add) => {
    const currenTestimony = d.querySelector(".testimony__body--show").dataset
      .id;
    value = Number(currenTestimony);

    console.log((value += add));

    $slider[Number(currenTestimony) - 1].classList.remove(
      "testimony__body--show"
    );
    if (value === $slider.length + 1 || value === 0) {
      value = value === 0 ? $slider.length : 1;
    }
    $slider[value - 1].classList.add("testimony__body--show");
  };

  $btnRigth.addEventListener("click", () => {
    chagenPosition(1);
  });
  $btnLeft.addEventListener("click", () => {
    chagenPosition(-1);
  });
}
