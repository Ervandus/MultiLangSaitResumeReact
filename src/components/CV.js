import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CV.css';
import '../css/Header.css';
import '../css/Certificates.css';
import { injectIntl } from 'react-intl';
import Footer from './Footer';
import TextCV from './TextCV';

function CV ({intl}){
  return (
      <div>
        <header className="header">          
          <div className="header-content">
          <div className="home"><Link to="/">{intl.formatMessage({id: 'home'})}</Link></div>
          <div className="resume">
          <TextCV />
                        
          </div>
          
        </div>
        </header> 
        <Footer />
      </div>
            
            
  )
    
}
export default injectIntl(CV);