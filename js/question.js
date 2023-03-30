const d = document;

export default function question(show, texto, arrow) {
  const $show = [...d.querySelectorAll(show)],
    $texto = [...d.querySelectorAll(texto)],
    $flecha = [...d.querySelectorAll(arrow)];
  console.log($show[0]);

  $texto.forEach((element) => {
    console.log($texto.length);
    element.addEventListener("click", (e) => {
      console.log(Number(e.target.dataset.parrafor));

      if (e.target.dataset.parrafor === "1") {
        $show[0].classList.toggle("question__show--height");
        $flecha[0].classList.toggle("questions__arrow--rotate");
      }
      if (e.target.dataset.parrafor === "2") {
        $show[1].classList.toggle("question__show--height");
        $flecha[1].classList.toggle("questions__arrow--rotate");
      }
      if (e.target.dataset.parrafor === "3") {
        $show[2].classList.toggle("question__show--height");
        $flecha[2].classList.toggle("questions__arrow--rotate");
      }
    });
  });
}
