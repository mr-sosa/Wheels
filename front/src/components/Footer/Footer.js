import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      />
      <div className="foot">
        <footer>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3 className="titulo">Services</h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text" href="#">
                      Web design
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      Development
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      Hosting
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3 className="titulo">About</h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text" href="#">
                      Company
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      Legacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3 className="titulo">Careers</h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text" href="#">
                      Job openings
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      Employee success
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      Benefits
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <h3 className="titulo">Social</h3>
                <div className="row">
                  <div className="col">
                    <a className="text" href="#">
                      <i className="icon ion-social-facebook blackiconcolor"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="text" href="#">
                      <i className="icon ion-social-twitter"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="text" href="#">
                      <i className="icon ion-social-snapchat"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="text" href="#">
                      <i className="icon ion-social-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot-cpr py-4">
            <div className="container text-center">
              <p className="text mb-0 py-2">
                Wheels App © 2022 All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
};
