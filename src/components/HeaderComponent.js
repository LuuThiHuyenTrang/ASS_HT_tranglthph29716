const HeaderComponent = () => {
  return `
      <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="../assets/img/avata.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="/admin/products">Luu Thi Huyen Trang</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://twitter.com/huyen_tran64016" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/huyentrangth0102/" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/accounts/login/?source=auth_switcher" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="https://www.google.com/search?q=google-plus&oq=google-plus&aqs=chrome..69i57j0i512j0i30l8.485j0j4&sourceid=chrome&ie=UTF-8" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="https://www.linkedin.com/uas/login-submit" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="/#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="/#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="/#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i>
              <span>Portfolio</span></a></li>
          <li><a href="/#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="/#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header>`;
};

export default HeaderComponent;
