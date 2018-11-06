import React from 'react';
import { injectIntl } from 'react-intl';
import '../css/TextCV.css'; 

function TextCV ({intl}){
    return (
        <div className="certif"> 
            <span className='maininfo'>{intl.formatMessage({id: 'my_cv'})} <br/>{intl.formatMessage({id: 'name'})}</span><br/><span className="proff">{intl.formatMessage({id: 'profession'})}</span>
            <br/> 
            <br/> 
            <p>{intl.formatMessage({id: 'birthday'})}<br/>{intl.formatMessage({id: 'adress'})}<br/>
            {intl.formatMessage({id: 'tel'})}: +357 95522492<br/>E-mail: ervandus@yandex.ru<br/>{intl.formatMessage({id: 'sait'})}: www.mycv.ervandsx.beget.tech</p>
            <span className="citisen">{intl.formatMessage({id: 'obrazov'})}:<br/></span>
            <span>{intl.formatMessage({id: 'obrazov1'})}
            <br/>{intl.formatMessage({id: 'obrazov2'})}
            <br/>{intl.formatMessage({id: 'obrazov3'})} 
           </span><br/>
            <span className="citisen">{intl.formatMessage({id: 'opit_raoti'})}:<br/></span>
            <span>{intl.formatMessage({id: 'rabota1'})}
            <br/>{intl.formatMessage({id: 'rabota2'})}
            </span><br/>
            <span className="citisen">{intl.formatMessage({id: 'keysk'})}:<br/></span>
            <span>{intl.formatMessage({id: 'verst'})}
            <br/>{intl.formatMessage({id: 'razrab'})}
            <br/>{intl.formatMessage({id: 'umenie'})}
            <br/>{intl.formatMessage({id: 'primen'})}
            <br/>{intl.formatMessage({id: 'ispolz'})}
            <br/>{intl.formatMessage({id: 'delig'})}
            <br/>{intl.formatMessage({id: 'znan'})}
            <br/>{intl.formatMessage({id: 'ispolzov'})}
            <br/>{intl.formatMessage({id: 'control'})}
            <br/>{intl.formatMessage({id: 'opit'})}
            <br/>{intl.formatMessage({id: 'sozdan'})}
            <br/>{intl.formatMessage({id: 'jquer'})}
            <br/>{intl.formatMessage({id: 'razrabot'})}
            <br/>{intl.formatMessage({id: 'naviki'})} 
            </span><br/>
            <span className="citisen">{intl.formatMessage({id: 'lang'})}: <br/></span><span> {intl.formatMessage({id: 'ruende'})}</span><br/> 
            <span className="citisen">{intl.formatMessage({id: 'citizenship'})}: <br/></span><span>{intl.formatMessage({id: 'country'})}</span>
            <br/> 
            <br/>       
        </div>
      )
} 
  
export default injectIntl(TextCV);