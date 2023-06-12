import AboutComponent from "../../components/AboutComponent";
import ContactComponent from "../../components/ContactComponent";
import FooterComponent from "../../components/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import HeroComponent from "../../components/HeroComponent";
import PortfolioComponent from "../../components/PortfolioComponent";
import ServicesComponent from "../../components/ServicesComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent";

const HomePage = () => {
  return `
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <!-- ======= Header ======= -->
  ${HeaderComponent()}
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
  ${HeroComponent()}
  <!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    ${AboutComponent()}
    <!-- End About Section -->

    <!-- ======= Portfolio Section ======= -->
    ${PortfolioComponent()}
    <!-- End Portfolio Section -->

    <!-- ======= Services Section ======= -->
    ${ServicesComponent()}
    <!-- End Services Section -->

    <!-- ======= Testimonials Section ======= -->
    ${TestimonialsComponent()}
    <!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    ${ContactComponent()}
    <!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  ${FooterComponent()}
  <!-- End  Footer -->
       `;
};

export default HomePage;
