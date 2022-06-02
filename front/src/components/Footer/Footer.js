import { FormattedMessage } from 'react-intl';
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
                <h3 className="titulo"><FormattedMessage id='footer_services' /></h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_webDesign' />
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_development' />
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_hosting' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3 className="titulo"><FormattedMessage id='footer_about' /></h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_company' />
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_team' />
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_legacy' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3 className="titulo"><FormattedMessage id='footer_careers' /></h3>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_job' />
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_success' />
                    </a>
                  </li>
                  <li>
                    <a className="text" href="#">
                      <FormattedMessage id='footer_benefits' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <h3 className="titulo"><FormattedMessage id='footer_social' /></h3>
                <div className="row">
                  <div className="col">
                    <a className="text" href="#" aria-label="Facebook"> 
                      <i className="icon ion-social-facebook blackiconcolor"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="text" href="#" aria-label="Twitter"> 
                      <i className="icon ion-social-twitter"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="text" href="#" aria-label="Snapchat"> 
                      <i className="icon ion-social-snapchat"></i>
                    </a>
                  </div>
                  <div className="col">
                    <a className="text" href="#" aria-label="Instagram"> 
                      <i className="icon ion-social-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot-cpr py-4 copyright">
            <div className="container text-center">
              <p className="text mb-0 py-2">
                <FormattedMessage id='footer_cpr' />
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
