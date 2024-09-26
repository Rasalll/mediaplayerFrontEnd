import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='row p-4 mt-5 bg-info'>
    <div className='col-4'>
        <h3>Media Player 2024</h3>
        <p style={{textAlign:'justify'}}> conversations about the potential existence of extraterrestrial life. Emphasising the rapid advancements in human technology, the ISRO chief suggests that the existence of alien civilizations is not just possible but likely across</p>
    </div>
    <div className='col-4  d-flex flex-column'>
        <h3>Links</h3>
        <Link to={'/'} style={{color:'black'}}>Landing</Link>
        <Link to={'/dach'} style={{color:'black'}}>DashBoard</Link>
        <Link to={'/his'} style={{color:'black'}}>Watch History</Link>

    </div>
    <div className='col-4'>
        <h3>Contact US</h3>
        <p className=''>mediaplayer@gmail.com</p>
        <textarea name="" className='form-control mb-3' placeholder='Enter Your Messeage' id=""></textarea>
    <button className='btn btn-success'>Send</button>
    </div>
    <h4 className='mt-5 text-end'>Alright &copy; Reserved</h4>


</div>
  )
}

export default Footer