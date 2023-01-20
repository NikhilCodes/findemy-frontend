import { Button, Col, Row } from "react-bootstrap";
import './style.css';
import { APP_NAME } from "../../constants";
import { GlobalOutlined } from "@ant-design/icons";
import { isMobile } from "react-device-detect";

export function Footer() {
  return (
    <footer>
      {!isMobile && <div className="border-bottom d-flex justify-content-between align-items-center p-3 pre-footer">
        <div className=""><span>Top companies choose <a
          data-purpose="ufb-link" className="inverted-link"
          href="/udemy-business/?locale=en_US&amp;path=request-demo-in-mx%2F&amp;ref=footer-ad" target="_blank"
          rel="noopener" data-allow-referrer="true">Udemy Business</a> to build in-demand career skills.</span>
        </div>
        <div className="w-50 d-flex justify-content-evenly align-items-center"><img alt="Nasdaq" height="44" width="115"
                                                                                    src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"/><img
          alt="Volkswagen" height="44" width="44"
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"/><img alt="Box" height="44" width="67"
                                                                                   src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"/><img
          alt="NetApp" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"/><img
          alt="Eventbrite" height="44" width="115"
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"/></div>
      </div>}
      <div className='container-fluid p-5'>
        <div className={`d-flex ${isMobile ? 'flex-column' : 'flex-row'} justify-content-between align-content-between`}>
          <Row className={`${isMobile? 'w-100' : 'w-75'} ${isMobile && 'text-center d-flex justify-content-between align-items-center'}`}>
            <Col style={{ textAlign: 'left' }}>
              <Row>
                <a href="/udemy-business/?locale=en_US&amp;mx_pg=home-page&amp;path=%2F&amp;ref=footer"
                   target="_blank" rel="noopener" data-allow-referrer="true"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Udemy Business</span></a>
              </Row>
              <Row>
                <a href="/teaching/?ref=teach_footer"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Teach on Udemy</span></a>
              </Row>
              <Row>
                <a href="/mobile/" target="_blank" rel="noopener noreferrer"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Get the app</span></a>
              </Row>
              <Row>
                <a href="https://about.udemy.com/?locale=en-us"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>About us</span></a>
              </Row>
              <Row>
                <a href="https://about.udemy.com/company?locale=en-us#offices"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Contact us</span></a>
              </Row>
            </Col>
            <Col style={{ textAlign: 'left' }}>
              <Row>
                <a href="https://about.udemy.com/careers?locale=en-us"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Careers</span></a>

              </Row>
              <Row>
                <a href="https://blog.udemy.com/?ref=footer"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Blog</span></a>
              </Row>

              <Row>
                <a href="/support/" className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Help and Support</span></a>
              </Row>
              <Row>
                <a href="/affiliate/"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Affiliate</span></a>
              </Row>
              <Row>
                <a href="https://investors.udemy.com"
                   className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Investors</span></a>
              </Row>
            </Col>
            <Col style={{ textAlign: 'left' }}>
              <Row><a href="/terms/"
                      className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Terms</span></a></Row>
              <Row><a href="/terms/privacy/"
                      className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Privacy policy</span></a>
              </Row>
              <Row>
                <a className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"
                   data-purpose="footer.links.cookie_preferences"><span>Cookie settings</span></a>
              </Row>
              <Row><a href="/sitemap/"
                      className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Sitemap</span></a>
              </Row>
              <Row><a href="https://about.udemy.com/accessibility-statement?locale=en-us"
                      className="ud-btn ud-btn-large ud-btn-link ud-text-sm link white-link"><span>Accessibility statement</span></a>
              </Row>
            </Col>
          </Row>
          <div>
            <Button variant={'outline-light d-flex align-items-center rounded-0'}>
              <GlobalOutlined/>&nbsp;English
            </Button>
          </div>
        </div>
        <br/>
        <br/>
        <div className={`d-flex justify-content-between ${isMobile ? 'flex-column' : 'flex-row'}`}>
          <div>
            <h1 className={'header-app-name'}>{APP_NAME}</h1>
          </div>
          <small>
            © {new Date().getFullYear()} {APP_NAME}, Inc.
          </small>
        </div>
      </div>
    </footer>
  )
}