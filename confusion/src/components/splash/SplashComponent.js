import React from "react";
import "./SplashComponent.css";

const SplashComponent = () => {
  return (
    <div id="splash">
      {/* <!-- Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Header --> */}
        <header id="header" className="alt">
          <span className="logo">
            <img src="images/logo.svg" alt="" />
          </span>
          <h1>Tippin</h1>
          <p>Provide a waitlist for your customers today</p>
        </header>

        {/* <!-- Nav --> */}
        <nav id="nav">
          <ul>
            <li>
              <a href="#intro" className="active">
                Introduction
              </a>
            </li>
            <li>
              <a href="#first">Features</a>
            </li>
            <li>
              <a href="#second">Analytics</a>
            </li>
            <li>
              <a href="#cta">Get Started</a>
            </li>
          </ul>
        </nav>

        {/* <!-- Main --> */}
        <div id="main">
          {/* <!-- Introduction --> */}
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>What we provide</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <a href="generic.html" className="button">
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src="images/pic01.jpg" alt="" />
              </span>
            </div>
          </section>

          {/* <!-- First Section --> */}
          <section id="first" className="main special">
            <header className="major">
              <h2>Features</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon solid major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-gem"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <a href="generic.html" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          {/* <!-- Second Section --> */}
          <section id="second" className="main special">
            <header className="major">
              <h2>Analytics</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon solid fa-code-branch"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon solid fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon solid fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-gem"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <a href="generic.html" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          {/* <!-- Get Started --> */}
          <section id="cta" className="main special">
            <header className="major">
              <h2>Get started today</h2>
            </header>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <a href="generic.html" className="button primary">
                    Get Started
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>

        {/* <!-- Footer --> */}
        <footer id="footer">
          <section>
            <h2>Contact Us</h2>
            <dl className="alt">
              {/* <dt>Address</dt>
              <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
              <dt>Phone</dt>
              <dd>(000) 000-0000 x 0000</dd> */}
              <dt>Email</dt>
              <dd>
                <a href="#">Tippinllc@gmail.com</a>
              </dd>
            </dl>
            {/* <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-twitter alt">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-facebook-f alt">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-instagram alt">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-github alt">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-dribbble alt">
                  <span className="label">Dribbble</span>
                </a>
              </li>
            </ul> */}
          </section>
          <p className="copyright">
            &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SplashComponent;
