import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Success.css"

const Success = () => {

    const [loading,setLoading]=useState(true);
  

    useEffect(()=>
    {
      setTimeout(()=>
      {
       setLoading(false)
      },5000)
        
    },[])

    

  if(loading){

    return <div className='loading'>
          <img src="https://cdn.discordapp.com/attachments/707486765136740384/1013180271715160144/loading-gif.gif" alt=""/>
         <h2>Proccessing</h2>
         
    </div>
  }
  else

  {
  
  return (
    <>
       
      
       <div className="container">
        <h1 id="orderPlaced">Your order has been placed!</h1>
        <p>An email confirmation has been sent to your registered email address</p>
        
       <Link to="/"> <button className='btn'>Continue Shopping</button></Link> 
        </div> 
    </>
  )}


  
}

export default Success