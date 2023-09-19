import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>
  {/* Site footer */}
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6 style={{color:'black'}}>About</h6>
          <p className="text-justify">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam laudantium ad provident dolorum ratione? Debitis modi laborum vitae? Aut doloribus veritatis temporibus tempore accusamus nisi magnam velit in nostrum? Quae aliquam ipsa labore deserunt, dolor atque laudantium sequi adipisci impedit quam tempora molestiae commodi dolore aliquid ullam necessitatibus veniam?
          </p>
        </div>
      
        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright © 2017 All Rights Reserved by
       
          </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default Footer
