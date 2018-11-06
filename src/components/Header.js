import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import 'animate.css';
import Background from '../img/1.jpg';
import Background2 from '../img/2.jpg';
import Background3 from '../img/3.jpg';
import Background4 from '../img/4.jpg';
import Background5 from '../img/5.jpg';
import Background6 from '../img/6.jpg';
import Background7 from '../img/7.jpg';
import Background8 from '../img/8.jpg';
import Background9 from '../img/9.jpg';
import { injectIntl } from 'react-intl';
import Footer from './Footer';


function Header ({intl}){
  return (
      <div>       
        <header className="main-header grid"> 
          <div className="header-content grid">
          <h2 className="animated bounceInRight delay-10s">{intl.formatMessage({id: 'profession'})}</h2>
          <h1 type="name" className="animated bounceInLeft delay-2s">{intl.formatMessage({id: 'name'})}</h1>
            <div className="header-buttons">
              <div className="button animated bounceInLeft delay-10s"><Link to="/cv">{intl.formatMessage({id: 'resume'})}</Link></div>
              <div className="button button-gray animated bounceInRight delay-10s"><Link to="/portfolio">{intl.formatMessage({id: 'portfolio'})}</Link></div>
            </div>
          </div>
        </header>
        <div>
        <section className="portfolio-section grid">
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background2 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background3 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background4 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background5 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background6 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background7 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background8 + ")"} }></div>
          <div className="portfolio-item grid" style ={ { backgroundImage: "url(" + Background9 + ")"} }></div>
          <div className="buttoncase text-center">
            <div className="button cert"><Link to="/certificates">{intl.formatMessage({id: 'cert'})}</Link></div>
		      </div>
        </section>
        <Footer />
      </div>
      </div>
      )
} 
  
export default injectIntl(Header);