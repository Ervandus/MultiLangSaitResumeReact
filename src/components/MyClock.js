import React from 'react';
import '../css/MyClock.css';
import 'animate.css';
import Moment from 'react-moment';


function MyClock ({intl}){
  return (
        
        <h1 className="clock">
        
        <Moment format="DD/MM/YYYY ['] HH:mm:ss " interval={1000}>
               
                
        </Moment>
        
       </h1>
    );
}



export default MyClock;