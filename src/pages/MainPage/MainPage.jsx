import React from 'react'

const MainPage = () => {
    return (
        <div>

        {/* <!-- Header Area wrapper Starts --> */}
        <header id="header-wrap">
          {/* <!-- Navbar Start --> */}
          <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
            <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  <span className="icon-menu"></span>
                  <span className="icon-menu"></span>
                  <span className="icon-menu"></span>
                </button>
                <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt=""/></a>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                  <li className="nav-item active">
                    <a className="nav-link" href="#hero-area">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolios">
                      Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    
            {/* <!-- Mobile Menu Start --> */}
            <ul className="onepage-nev mobile-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#portfolio">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* <!-- Mobile Menu End --> */}
          </nav>
          {/* <!-- Navbar End --> */}
    
          {/* <!-- Hero Area Start --> */}
          <div id="hero-area" className="hero-area-bg">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                  <div className="contents">
                    <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">Hi This is</h5>
                    <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">Tom Saulnier</h2>
                    <p className="script-font wow fadeInUp" data-wow-delay="0.6s">Front-end Web Developer and Graphic Designer</p>
                    <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                      <li>
                        <a className="facebook" href="#"><i className="icon-social-facebook"></i></a>
                      </li>
                      <li>
                        <a className="twitter" href="#"><i className="icon-social-twitter"></i></a>
                      </li>
                      <li>
                        <a className="instagram" href="#"><i className="icon-social-instagram"></i></a>
                      </li>
                      <li>
                        <a className="linkedin" href="#"><i className="icon-social-linkedin"></i></a>
                      </li>
                      <li>
                        <a className="google" href="#"><i className="icon-social-google"></i></a>
                      </li>
                    </ul>
                    <div className="header-button wow fadeInUp" data-wow-delay="1s">
                      <a href="#" className="btn btn-common">Get a Free Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Hero Area End --> */}
    
        </header>
        {/* <!-- Header Area wrapper End --> */}
    
        {/* <!-- About Section Start --> */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                  <img className="img-fluid" src="assets/img/about/about-1.jpg" alt=""/>
                </div>
              </div> 
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
                  <h3>Hi Guys!</h3>
                  <p>Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut sollicitudin. Et est a nam dolores eget itaque sagittis et parturient duis est eleifend sociis rutrum odio viverra integer.</p>
                  <div className="about-profile">
                    <ul className="admin-profile">
                      <li><span className="pro-title"> Name </span> <span className="pro-detail">Tom Saulnier</span></li>
                      <li><span className="pro-title"> Age </span> <span className="pro-detail">25 Years</span></li>
                      <li><span className="pro-title"> Experience </span> <span className="pro-detail">4 Years</span></li>
                      <li><span className="pro-title"> Country </span> <span className="pro-detail">USA</span></li>
                      <li><span className="pro-title"> Location </span> <span className="pro-detail">San Francisco, CA</span></li>
                      <li><span className="pro-title"> e-mail </span> <span className="pro-detail">email@example.com</span></li>
                      <li><span className="pro-title"> Phone </span> <span className="pro-detail">+ (00) 123 456 789</span></li>
                      <li><span className="pro-title"> Freelance </span> <span className="pro-detail">Available</span></li>
                    </ul>
                  </div>
                  <a href="#" className="btn btn-common"><i className="icon-paper-clip"></i> Download Resume</a>
                  <a href="#" className="btn btn-danger"><i className="icon-speech"></i> Contact Me</a>
                </div>
              </div>   
            </div>
          </div>
        </section>
        {/* <!-- About Section End --> */}
    
        {/* <!-- Services Section Start --> */}
        <section id="services" className="services section-padding">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">What I do</h2>
          <div className="container">
            <div className="row">
              {/* <!-- Services item --> */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
                  <div className="icon">
                    <i className="icon-grid"></i>
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Front-end Development</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Services item --> */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                  <div className="icon">
                    <i className="icon-layers"></i>
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Graphic Design</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Services item --> */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Business Branding</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Services item --> */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
                  <div className="icon">
                    <i className="icon-bubbles"></i>
                  </div>
                  <div className="services-content">
                    <h3><a href="#">Consultancy</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services Section End --> */}
    
        {/* <!-- Resume Section Start --> */}
        <div id="resume" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="education wow fadeInRight" data-wow-delay="0.3s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-graduation"></i>
                      <h2 className="timelin-title">Education</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Bsc In CSE - Yale University</h3>
                        <span>2012 - 2016</span>
                        <p className="line-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Higher Secondary School - San Francisco College</h3>
                        <span>2010 - 2012</span>
                        <p className="line-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Secondary School - Labratory High School</h3>
                        <span>2005 - 2010</span>
                        <p className="line-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="experience wow fadeInRight" data-wow-delay="0.6s">
                  <ul className="timeline">
                    <li>
                      <i className="icon-briefcase"></i>
                      <h2 className="timelin-title">Experience</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Art Director - Tesla Inc.</h3>
                        <span>Jan 2018 - Present</span>
                        <p className="line-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">UX/UI Designer - Samsung</h3>
                        <span>Nov 2016 - Dec 2017</span>
                        <p className="line-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">Intern UI Designer - UIdeck</h3>
                        <span>Mar 2015 - Oct 2016</span>
                        <p className="line-text">Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Resume Section End --> */}
    
        {/* <!-- Portfolio Section --> */}
        <section id="portfolios" className="section-padding">
          {/* <!-- Container Starts --> */}
          <div className="container">        
            <h2 className="section-title wow flipInX" data-wow-delay="0.4s">My Remarkable Works</h2>
            <div className="row">          
              <div className="col-md-12">
                {/* <!-- Portfolio Controller/Buttons --> */}
                <div className="controls text-center">
                  <a className="filter active btn btn-common" data-filter="all">
                    All 
                  </a>
                  <a className="filter btn btn-common" data-filter=".design">
                    Design 
                  </a>
                  <a className="filter btn btn-common" data-filter=".development">
                    Development
                  </a>
                  <a className="filter btn btn-common" data-filter=".print">
                    Print 
                  </a>
                </div>
                {/* <!-- Portfolio Controller/Buttons Ends--> */}
              </div>
    
              {/* <!-- Portfolio Recent Projects --> */}
              <div id="portfolio" className="row wow fadeInDown" data-wow-delay="0.4s">
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="assets/img/gallery/img-1.jpg" alt="" />  
                      <div className="overlay">
                        <div className="icons">
                          <a className="lightbox preview" href="assets/img/gallery/img-1.jpg">
                            <i className="icon-eye"></i>
                          </a>
                          <a className="link" href="#">
                            <i className="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="assets/img/gallery/img-2.jpg" alt=""/> 
                      <div className="overlay">
                        <div className="icons">
                          <a className="lightbox preview" href="assets/img/gallery/img-2.jpg">
                            <i className="icon-eye"></i>
                          </a>
                          <a className="link" href="#">
                            <i className="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="assets/img/gallery/img-3.jpg" alt=""/> 
                      <div className="overlay">
                        <div className="icons">
                          <a className="lightbox preview" href="assets/img/gallery/img-3.jpg">
                            <i className="icon-eye"></i>
                          </a>
                          <a className="link" href="#">
                            <i className="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="assets/img/gallery/img-4.jpg" alt="" /> 
                      <div className="overlay">
                        <div className="icons">
                          <a className="lightbox preview" href="assets/img/gallery/img-4.jpg">
                            <i className="icon-eye"></i>
                          </a>
                          <a className="link" href="#">
                            <i className="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="assets/img/gallery/img-5.jpg" alt="" /> 
                      <div className="overlay">
                        <div className="icons">
                          <a className="lightbox preview" href="assets/img/gallery/img-5.jpg">
                            <i className="icon-eye"></i>
                          </a>
                          <a className="link" href="#">
                            <i className="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design">
                  <div className="portfolio-item">
                    <div className="shot-item">
                      <img src="assets/img/gallery/img-6.jpg" alt=""/>
                      <div className="overlay">
                        <div className="icons">
                          <a className="lightbox preview" href="assets/img/gallery/img-6.jpg">
                            <i className="icon-eye"></i>
                          </a>
                          <a className="link" href="#">
                            <i className="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>               
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container Ends --> */}
        </section>
        {/* <!-- Portfolio Section Ends -->  */}
    
        {/* <!-- Counter Area Start--> */}
        <section className="counter-section section-padding">
          <div className="container">
            <div className="row">
              {/* <!-- Counter Item --> */}
              <div className="col-md-3 col-sm-6 work-counter-widget text-center">
                <div className="counter wow fadeInDown" data-wow-delay="0.3s">
                  <div className="icon"><i className="icon-briefcase"></i></div>
                  <div className="counterUp">250</div>
                  <p>Project Working</p>
                </div>
              </div>
              {/* <!-- Counter Item --> */}
              <div className="col-md-3 col-sm-6 work-counter-widget text-center">
                <div className="counter wow fadeInDown" data-wow-delay="0.6s">
                  <div className="icon"><i className="icon-check"></i></div>
                  <div className="counterUp">950</div>
                  <p>Project Done</p>
                </div>
              </div>
              {/* <!-- Counter Item --> */}
              <div className="col-md-3 col-sm-6 work-counter-widget text-center">
                <div className="counter wow fadeInDown" data-wow-delay="0.9s">
                  <div className="icon"><i className="icon-diamond"></i></div>
                  <div className="counterUp">150</div>
                  <p>Awards Received</p>
                </div>
              </div>
              {/* <!-- Counter Item --> */}
              <div className="col-md-3 col-sm-6 work-counter-widget text-center">
                <div className="counter wow fadeInDown" data-wow-delay="1.2s">
                  <div className="icon"><i className="icon-heart"></i></div>
                  <div className="counterUp">299</div>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Counter Area End--> */}
    
        {/* <!-- Contact Section Start --> */}
        <section id="contact" className="section-padding">      
          <div className="contact-form">
            <div className="container">
              <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">          
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="contact-block">
                    <h2>Contact Form</h2>
                    <form id="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name"/>
                            <div className="help-block with-errors"></div>
                          </div>                                 
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email"/>
                            <div className="help-block with-errors"></div>
                          </div> 
                        </div>
                         <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject"/>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group"> 
                            <textarea className="form-control" id="message" placeholder="Your Message" rows="5" data-error="Write your message" required></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                          <div className="submit-button">
                            <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div> 
                            <div className="clearfix"></div> 
                          </div>
                        </div>
                      </div>            
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="footer-right-area wow fadeIn">
                    <h2>Contact Address</h2>
                    <div className="footer-right-contact">
                      <div className="single-contact">
                        <div className="contact-icon">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <p>San Francisco, CA</p>
                      </div>
                      <div className="single-contact">
                        <div className="contact-icon">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <p><a href="mailto:hello@tom.com">hello@tom.com</a></p>
                        <p><a href="mailto:tomsaulnier@gmail.com">tomsaulnier@gmail.com</a></p>
                      </div>
                      <div className="single-contact">
                        <div className="contact-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <p><a href="#">+ (00) 123 456 789</a></p>
                        <p><a href="#">+ (00) 123 344 789</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                </div>
              </div>
            </div>
          </div>   
        </section>
        {/* <!-- Contact Section End --> */}
    
        {/* <!-- Footer Section Start --> */}
        <footer className="footer-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
                  <ul className="social-icon">
                    <li>
                      <a className="facebook" href="#"><i className="icon-social-facebook"></i></a>
                    </li>
                    <li>
                      <a className="twitter" href="#"><i className="icon-social-twitter"></i></a>
                    </li>
                    <li>
                      <a className="instagram" href="#"><i className="icon-social-instagram"></i></a>
                    </li>
                    <li>
                      <a className="instagram" href="#"><i className="icon-social-linkedin"></i></a>
                    </li>
                    <li>
                      <a className="instagram" href="#"><i className="icon-social-google"></i></a>
                    </li>
                  </ul>
                  <p>Copyright © 2018 UIdeck All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer Section End --> */}
    
        {/* <!-- Go to Top Link --> */}
        <a href="#" className="back-to-top">
          <i className="icon-arrow-up"></i>
        </a>
    
        {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
        {/* <script src="assets/js/jquery-min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.mixitup.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/jquery.nav.js"></script>
        <script src="assets/js/jquery.easing.min.js"></script>  
        <script src="assets/js/nivo-lightbox.js"></script>
        <script src="assets/js/jquery.slicknav.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/form-validator.min.js"></script>
        <script src="assets/js/contact-form-script.min.js"></script>
        <script src="assets/js/map.js"></script> */}
          
      </div>
    
    )
}

export default MainPage
