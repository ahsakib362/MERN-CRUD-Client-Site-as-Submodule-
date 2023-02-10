import React from 'react'
import loader from "../../Assets/img/loader1.svg";

function FullScreenLoader() {
  return (
    <div>
      <div className='ProcessingDiv'>
        <div className='center-screen'>
            <img className='loader-size' src={loader}/>
        </div>
      </div>
    </div>
  )
}

export default FullScreenLoader;
