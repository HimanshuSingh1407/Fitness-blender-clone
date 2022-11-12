import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Pilot.css"
import {BiShoppingBag} from "react-icons/bi"
import {RiFilter2Line} from "react-icons/ri"
import {IoMdSearch} from "react-icons/io"
import { Link } from "react-router-dom";


const Pilot = () => {

    const [pilot,setPilot]=useState([])
   
    const handleBag=(data)=>
    {
       const initalData={image:data.lazyfade_src,day:(data.week*7),price:data.price}
        let cartData=JSON.parse(localStorage.getItem('cartArray')) || [];
        cartData=[...cartData,initalData]
        localStorage.setItem('cartArray', JSON.stringify(cartData));
    }

    useEffect(async()=>
    {
       let res=await axios.get(`https://backend-server-300e.onrender.com/pilot`)
       setPilot(res.data)
    },[])
 


  return (
    <>
      
   
        
<div style={{width:"100%"}}>
   <div className='headbox'>
          <p className='heading'>Pilot Programs</p>
   </div>
</div>
<div className='productBox'> 

  <div className='boxx'>
   <div className='flex fsh'>
       <div className='flex fs'><RiFilter2Line size={20}/>FILTERS</div>
       <div className='flex fs'><IoMdSearch size={20}/>SEARCH</div>
    </div>
  </div>

   <p className='totalp'>{pilot.length} Results</p>
     <div className='containerbox'>
             
     <div className='newCard'>
                          <div><span className='fbnew'>FB</span>
                           <span className='plusnew'>Store</span></div>
                           
                           <span class="sub-heading ">eGIFT CARDS</span>
                       
                          <p className='-gift-card'> New eGift Cards available!</p>
                        
      
                         
                      </div>
        
              {
                  pilot.map((ele)=>
                    <div key={ele._id} className="card">
                     
                      <img src={ele.lazyfade_src}/>
                       <div className='workoutTxt'>
                           <div className='textBox'>
                         <p className='duration'>{ele.week} WEEK PROGRAM </p> 
                          <h4>{ele.x_small}</h4> 
                          </div>
                          <div className='price-btn'><p className='price'>${ele.price}</p> 
                           <button className='btn' onClick={()=>handleBag(ele)}><BiShoppingBag color='white' size={25}/>
                           <Link to='/cart'>ADD TO BAG</Link></button>
                          </div>
                       </div>  
                       
                    </div>
                    )
               }
              
     </div>
     
</div>








    
    
    
    </>
  )
}

export default Pilot