import { useEffect } from "../lib";
import Typed from "typed.js";

const HeroComponent = () => {
  useEffect(() => {
    const typedElement = document.querySelector(".typed");
    if (typedElement) {
      const typed = new Typed(typedElement, {
        strings: typedElement.getAttribute("data-typed-items").split(","),
        typeSpeed: 50, // Tốc độ gõ chữ (ms)
        backSpeed: 50, // Tốc độ xoá chữ (ms)
        loop: true, // Lặp lại sau khi đã gõ xong
      });
    }
  }, []);

  return `
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container" data-aos="fade-in">
        <h1>Huyền Trang</h1>
        <p>I'm <span class="typed" style="color: red;font-weight: 900" data-typed-items= Developer, JavaScript Developer">Developer, JavaScript Developer</span></p>
      </div>
    </section>
  `;
};

export default HeroComponent;
