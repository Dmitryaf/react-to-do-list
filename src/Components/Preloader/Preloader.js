import React from 'react';
import './Preloader.sass';

function Preloader(){
  return (
    <div className="preloader">
      <div className="lds-dual-ring"></div>
    </div>
  )
}

export default Preloader;