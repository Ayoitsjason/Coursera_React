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
              <a href="#second">Flow</a>
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
                  Here at Tippin, we provide a way to streamline your customer
                  engagement. We provide a waiting list for your customers,
                  after their service is complete, they will receive a brief
                  survey to let the business know how they are doing.
                </p>
              </div>
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
                <h3>Waitlist</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Review</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-gem"></span>
                <h3>Reminder</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major"></footer>
          </section>

          {/* <!-- Second Section --> */}
          <section id="second" className="main special">
            <header className="major">
              <h2>Flow</h2>
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
              Having a waitlist for your business keeps more customers engaged.
              They will be more willing to wait while they stay either stay in
              store or be reminded if they decide to come back. Link your social
              Apps to our application. Customers that love your business will be
              navigated to your business review pages to leave 4 and 5 start
              reviews to attract other customers.
            </p>
            <footer className="major"></footer>
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
