export default function About(props) {
  return (
    <>
      <div className={`bg-${props.mode === "dark" ? "dark" : "light"}`}>
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Who are we?</h1>
              <p
                className={`lead text-${
                  props.mode === "dark" ? "white" : "muted"
                } mb-0`}
              >
                We are group of people working on the various features of
                text-analyzer.
              </p>
              <p
                className={`lead text-${
                  props.mode === "dark" ? "white" : "muted"
                }`}
              >
                Contributed by{" "}
                <a
                  href="https://bootstrapious.com/snippets"
                  className={`text-${
                    props.mode === "dark" ? "white" : "muted"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  Code_Initiator
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-${props.mode === "dark" ? "black" : "white"} py-5`}>
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2
                className={`font-weight-${
                  props.mode === "dark" ? "dark" : "light"
                }`}
              >
                Lorem ipsum dolor sit amet
              </h2>
              <p
                className={`font-italic text-${
                  props.mode === "dark" ? "white" : "muted"
                } mb-4`}
              >
                Much appreciation to parth
              </p>
              <a
                href="/"
                className={`btn btn-${
                  props.mode === "dark" ? "dark" : "light"
                } px-5 rounded-pill shadow-sm`}
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2
                className={`font-weight-${
                  props.mode === "dark" ? "dark" : "light"
                }`}
              >
                Lorem ipsum dolor sit amet
              </h2>
              <p
                className={`font-italic text-${
                  props.mode === "dark" ? "white" : "muted"
                } mb-4`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="/"
                className={`btn btn-${
                  props.mode === "dark" ? "dark" : "light"
                } px-5 rounded-pill shadow-sm`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-${props.mode === "dark" ? "black" : "white"} py-5`}>
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2
                className={`display-4 font-weight-${
                  props.mode === "dark" ? "dark" : "light"
                }`}
              >
                Our team
              </h2>
              <p
                className={`font-italic text-${
                  props.mode === "dark" ? "white" : "muted"
                }`}
              >
                Our Team is talented and can develop any type of webApp.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className={`bg-${
                  props.mode === "dark" ? "black" : "white"
                } rounded shadow-sm py-5 px-4`}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ash nikolson</h5>
                <span
                  className={`small text-uppercase text-${
                    props.mode === "dark" ? "white" : "muted"
                  }`}
                >
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className={`bg-${
                  props.mode === "dark" ? "black" : "white"
                } rounded shadow-sm py-5 px-4`}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Samuel Hardy</h5>
                <span
                  className={`small text-uppercase text-${
                    props.mode === "dark" ? "white" : "muted"
                  }`}
                >
                  DevOps-Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className={`bg-${
                  props.mode === "dark" ? "black" : "white"
                } rounded shadow-sm py-5 px-4`}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Raj Sunderland</h5>
                <span
                  className={`small text-uppercase text-${
                    props.mode === "dark" ? "white" : "muted"
                  }`}
                >
                  Frontend-Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className={`bg-${
                  props.mode === "dark" ? "black" : "white"
                } rounded shadow-sm py-5 px-4`}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0 ">John Tarly</h5>
                <span
                  className={`small text-uppercase text-${
                    props.mode === "dark" ? "white" : "muted"
                  }`}
                >
                  Backend Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/"
                      className="social-link"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook-f" target="_blank"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.twitter.com/"
                      className="social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/"
                      className="social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/"
                      className="social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className={`bg-${props.mode === "dark" ? "black" : "white"} pb-5`}
      >
        <div className="container text-center">
          <p
            className={`font-italic text-${
              props.mode === "dark" ? "white" : "muted"
            } mb-0`}
          >
            &copy; Copyrights TextEdit.com All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
