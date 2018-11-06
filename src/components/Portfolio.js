import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CV.css';
import '../css/Portfolio.css';
import { injectIntl } from 'react-intl';
import Footer from './Footer';

function Portfolio ({intl}){
  return (
      <div>
        <header className="header">          
          <div className="header-content">
          <div className="home"><Link to="/">{intl.formatMessage({id: 'home'})}</Link></div>
          <div className="resume">
          <h2 className="certif">{intl.formatMessage({id: 'my_portf'})}</h2>          
          </div>
         </div>
        </header> 
        <section className="certificates-section grid">      
          <a className="portfolio4 certificates-item grid" target="_blank" href="https://webprogstudio.com" rel="noopener noreferrer">{intl.formatMessage({id: 'shop'})}</a>
          <a className="portfolio5 certificates-item grid" target="_blank" href="https://liaviolin.com" rel="noopener noreferrer">{intl.formatMessage({id: 'shop'})}</a>
          <a className="portfolio6 certificates-item grid" target="_blank" href="https://aviacy.com" rel="noopener noreferrer">{intl.formatMessage({id: 'shop'})}</a>
          <a className="portfolio1 certificates-item grid" target="_blank" href="https://slavshops.com" rel="noopener noreferrer">{intl.formatMessage({id: 'shop'})}</a>
          <a className="portfolio2 certificates-item grid" target="_blank" href="http://surf.host1702017.hostland.pro/" rel="noopener noreferrer">{intl.formatMessage({id: 'surf'})}</a>
          <a className="portfolio3 certificates-item grid" target="_blank" href="http://host1702017.hostland.pro/" rel="noopener noreferrer">{intl.formatMessage({id: 'tour'})}</a>
        </section>
        <Footer />
      </div>
            
            
  )
    
}
export default injectIntl(Portfolio);