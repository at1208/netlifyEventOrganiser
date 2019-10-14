import React from 'react';
import './home.css';
import {Link} from 'react-router-dom'

const Home = () => {
  return <>
     <h1 className='text-center a1'> Event Organiser</h1>
     <div className='row justify-content-center'>
     <Link to='/allEvent'><button className=' a2 btn shadow'>All Event</button></Link>
      <Link to='/createEvent'><button className=' a2 btn  shadow'>Create Event</button></Link>
      <Link to='/updateEvent'><button className=' a2 btn  shadow'>Update Event</button></Link>
      <Link to='/deleteEvent'><button className='a2 btn shadow'>Delete Event</button></Link>

     </div>

         </>
}
export default Home;
