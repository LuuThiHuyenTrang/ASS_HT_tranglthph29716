import axios from "axios";
import { useEffect, useState } from "../lib";

const PortfolioComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://6520f811a4199548356cac79.mockapi.io/api/projects/projects_trang/`
      )
      .then(({ data }) => setProjects(data));
  }, []);

  return /*html*/ `    
  <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>It takes a lot of work to get the benefits. His need is the result of something that really drives him away. Let them be what they want. Anyone that anyone desires. And no one gets in the way of getting others. Because he should take refuge in this comfortable office, right here.</p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">HTML5</li>
              <li data-filter=".filter-card">PHP</li>
              <li data-filter=".filter-web">ES6</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        ${projects.map((item) => {
          return /*html*/ `
          <div class="col-lg-4 col-md-6 portfolio-item filter-web" style="width: 390px; height: 200px;">
            <div class="portfolio-wrap">
              <img src="${item.image}" class="img-fluid" alt="">
              <div class="portfolio-links">
                <a href="${item.image}" data-gallery="portfolioGallery"
                  class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="/projects/${item.id}" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>`;
        })}

        </div>

      </div>
    </section>`;
};

export default PortfolioComponent;
