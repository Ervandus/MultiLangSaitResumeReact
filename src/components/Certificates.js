import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/Certificates.css';
import { injectIntl } from 'react-intl';
import Footer from './Footer';
import Cert1 from '../img/Cert/102.jpg';
import Cert2 from '../img/Cert/103.jpg';
import Cert3 from '../img/Cert/104.jpg';
import Cert4 from '../img/Cert/105.jpg';
import Cert5 from '../img/Cert/106.jpg';
import Cert6 from '../img/Cert/107.jpg';
import Cert7 from '../img/Cert/108.jpg';
import Cert8 from '../img/Cert/109.jpg';
import Cert9 from '../img/Cert/110.jpg';
import Cert10 from '../img/Cert/111.jpg';
import Cert11 from '../img/Cert/112.jpg';
import Cert12 from '../img/Cert/113.jpg';
import Cert13 from '../img/Cert/114.jpg';
import Cert14 from '../img/Cert/115.jpg';
import Cert15 from '../img/Cert/101.jpg';




function Certificates ({intl}){

    return (
        <div>
          <header className="header ">          
            <div className="header-content">
            <div className="home"><Link to="/">{intl.formatMessage({id: 'home'})}</Link></div>
            <div className="resume">
            <h2 className="certif">{intl.formatMessage({id: 'cert'})}</h2>
            </div>
            </div>
          </header>  
          <div>
          <section className="certificates-section grid">
          
          <a className="certificates-item c1 grid" target="_blank" href={Cert1}>C</a>
          <a className="certificates-item c2 grid" target="_blank" href={Cert2}>C</a>
          <a className="certificates-item c3 grid" target="_blank" href={Cert3}>C</a>
          <a className="certificates-item c4 grid" target="_blank" href={Cert4}>C</a>
          <a className="certificates-item c5 grid" target="_blank" href={Cert5}>C</a>
          <a className="certificates-item c6 grid" target="_blank" href={Cert6}>C</a>
          <a className="certificates-item c7 grid" target="_blank" href={Cert7}>C</a>
          <a className="certificates-item c8 grid" target="_blank" href={Cert8}>C</a>
          <a className="certificates-item c9 grid" target="_blank" href={Cert9}>C</a>
          <a className="certificates-item c10 grid" target="_blank" href={Cert10}>C</a>
          <a className="certificates-item c11 grid" target="_blank" href={Cert11}>C</a>
          <a className="certificates-item c12 grid" target="_blank" href={Cert12}>C</a>
          <a className="certificates-item c13 grid" target="_blank" href={Cert13}>C</a>
          <a className="certificates-item c14 grid" target="_blank" href={Cert14}>C</a>
          <a className="certificates-item c15 grid" target="_blank" href={Cert15}>C</a>
          
          </section>
          <Footer />
        </div>
        </div>           
  )
    
}
export default injectIntl(Certificates);