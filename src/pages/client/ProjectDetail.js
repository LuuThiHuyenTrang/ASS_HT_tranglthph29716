import axios from "axios";
import FooterComponent from "../../components/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import { useEffect, useState } from "../../lib";

const ProjectDetail = ({ id }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/project/${id}`)
      .then(({ data }) => setProject(data));
  }, []);

  return `
    ${HeaderComponent()}

    <div style="margin-left: 300px;">
      <section id="breadcrumbs" class="breadcrumbs" >
        <div class="container">

          <div class="d-flex justify-content-between align-items-center">
            <h2>Portfoio Details</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Portfoio Details</li>
            </ol>
          </div>

        </div>
      </section><!-- End Breadcrumbs -->

      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">

          <div class="row gy-4">

            <div class="col-lg-8">
              <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">

                  <div class="swiper-slide">
                    <img src="${project.image}" alt="">
                  </div>

                  <div class="swiper-slide">
                    <img src="${project.image}" alt="">
                  </div>

                  <div class="swiper-slide">
                    <img src="${project.image}" alt="">
                  </div>

                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>${project.name}</h3>
                <ul>
                  <li><strong>Client</strong>: ${project.client}</li>
                  <li><strong>Project date</strong>: ${project.date}</li>
                  <li><strong>Project URL</strong>:
                    <a href="${project.url}">Link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>${project.description}</p>
            </div>
          </div>

        </div>
      </section><!-- End Portfolio Details Section -->
    </div>
    ${FooterComponent()}`;
};

export default ProjectDetail;
