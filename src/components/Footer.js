import React from 'react';
import '../css/Header.css';
import { injectIntl } from 'react-intl';

function Footer ({intl}){
    return (
        <footer className="main-footer">
          <div className="container">
            <div className="footer-copy">~©~</div>
            <div className="footer-logo">{intl.formatMessage({id: 'name'})}</div>  
            <div>ervandus@yandex.ru</div>
          </div>
        </footer>
    )
}
export default injectIntl(Footer);