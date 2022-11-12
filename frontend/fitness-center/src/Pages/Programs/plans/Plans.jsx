import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import "./Plans.css"
import {BiShoppingBag} from "react-icons/bi"
import {RiFilter2Line} from "react-icons/ri"
import {IoMdSearch} from "react-icons/io"

const Plans = () => {

    const [plan,setPlan]=useState([])

    const handleBag=(data)=>
    {
        let cartData=JSON.parse(localStorage.getItem('cart')) || [];  
        cartData=[...cartData,data]
         
        localStorage.setItem('cart', JSON.stringify(cartData));
    }

  


    const getPlan=async()=>
    {
        let res=await axios.get(`https://backend-server-300e.onrender.com/plans?limit=61`)
        setPlan(res.data)
    }

    useEffect(()=>
    {
      getPlan()
    },[])
  return (
    <>
     

        
     <div style={{width:"100%"}}>
   <div className='headbox'>
          <p className='heading'>Workout Programs</p>
   </div>
</div>



         <div className='productBox'> 

           <div className='boxx'>
            <div className='flex fsh'>
                <div className='flex fs'><RiFilter2Line size={20}/>FILTERS</div>
                <div className='flex fs'><IoMdSearch size={20}/>SEARCH</div>
             </div>
           </div>

            <p className='totalp'>{plan.length} Results</p>
              <div className='containerbox'>
                      
                      <div className='newCard'>
                          <div><span className='fbnew'>FB</span>
                           <span className='plusnew'>Store</span></div>
                           
                           <span class="sub-heading ">eGIFT CARDS</span>
                       
                          <p className='-gift-card'> New eGift Cards available!</p>
                        
      
                         
                      </div>
                    
                       {
                           plan.map((ele)=>
                             <div key={ele._id} className="card">
                              
                               <img src={ele.lazyfade_src}/>
                                <div className='workoutTxt'>
                                    <div className='textBox'>
                                  <p className='duration'>{ele.week}WEEK PROGRAM - {ele.min} MIN/DAY</p> 
                                   <h4>{ele.x_small}</h4> 
                                   </div>
                                   <div className='price-btn'><p className='price'>${ele.price}</p> 
                                    <button className='btn' onClick={()=>handleBag(ele)}><BiShoppingBag color='white' size={25}/>ADD TO BAG</button>
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

export default Plans