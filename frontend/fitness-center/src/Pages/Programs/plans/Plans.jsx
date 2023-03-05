import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Plans.css";
import { BiShoppingBag } from "react-icons/bi";
import { RiFilter2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Plans = () => {
  const [plan, setPlan] = useState([]);
  const [totalPlan, setTotalPlan] = useState(null);
  let [page, setPage] = useState(1);
  let [show ,setShow]=useState(false);
  let [showFilter, setShowFilter] = useState(false)

  let arr = new Array(Math.floor(totalPlan/11)).fill(0);
  const handleBag = (data) => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData = [...cartData, data];
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const getPlan = async (page) => {
    let res = await axios.get(
      `https://fitness-center.onrender.com/plans?page=${page}`
    );
    
     setPlan(res.data.plans)
     setTotalPlan(res.data.total)
  };


  useEffect(() => {
    document.title = "Workout Plans";
    getPlan(page);
  }, [page]);


  function handleClick(){
      setShow(!show)
  }

  function handleClose(){
    setShow(!show)
  }

  function handleFilter(){
        setShowFilter(!showFilter);
  }

 async function filterFunc(e){
       console.log(e.target.value)
       if(e.target.value==="all"){
           getPlan();
       }
       try{
    
        let res=await axios.get(`https://fitness-center.onrender.com/plans/filter?page=${page}&minutes=${Number(e.target.value)}`)  
        console.log(res)
        setPlan(res.data.plans)
        setTotalPlan(res.data.total)
       }catch(e){

       }

  }


 async function handleSearch(e){
  if(e.target.value===""){
    getPlan()
  }
      try{
        let res=await axios.get(`https://fitness-center.onrender.com/plans/search?page=${page}&q=${e.target.value}`)  
          setPlan(res.data.plans)
          setTotalPlan(res.data.total)
      }catch(e){
          
      }
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="headbox">
          <p className="heading">Workout Programs</p>
        </div>
      </div>

      <div className="productBox">
        <div className="boxx">
          <div className="flex fsh">
            <div onClick={handleFilter} className="flex fs">
              <RiFilter2Line size={20} />
              FILTERS
            </div>
            {
                showFilter ? <select onChange={filterFunc}>
                      <option value="all">Filter By time</option>
                      <option value="10">Less Than than 10</option>
                      <option value="20">Less Than than 20</option>
                      <option value="30">Less Than than 30</option>
                      <option value="40">Less Than than 40</option>
                      <option value="50">Less Than than 50</option>
                </select> 
                :
                null
            }
            {
              show ?  <div className="show">
              <input onChange={handleSearch} type="text" />
              <span onClick={handleClose} className="close">X</span>
           </div> : <div onClick={handleClick} className="flex fs">
              <IoMdSearch size={20} />
              SEARCH
            </div>
            }
           
          </div>
        </div>

        <p className="totalp">{plan.length} Results</p>
        <div className="containerbox">
          <div className="newCard">
            <div>
              <span className="fbnew">FB</span>
              <span className="plusnew">Store</span>
            </div>

            <span class="sub-heading ">eGIFT CARDS</span>

            <p className="-gift-card"> New eGift Cards available!</p>
          </div>

          {plan.map((ele) => (
            <div key={ele._id} className="card">
              <img src={ele.lazyfade_src} />
              <div className="workoutTxt">
                <div className="textBox">
                  <p className="duration">
                    {ele.week}WEEK PROGRAM - {ele.min} MIN/DAY
                  </p>
                  <h4>{ele.x_small}</h4>
                </div>
                <div className="price-btn">
                  <p className="price">${ele.price}</p>
                  <button className="btnx" onClick={() => handleBag(ele)}>
                    <BiShoppingBag color="white" size={25} />
                    <Link to="/cart">ADD TO BAG</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Box
          pt={"20px"}
          pb={"20px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          {arr.map((el, i) => {
            return (
              <Button
                key={i}
                onClick={() => {
                  setPage(i + 1);
                }}
              >
                {i + 1}
              </Button>
            );
          })}
          <Button disabled={page===arr.length || arr.length===0} onClick={() => setPage(page + 1)}>Next</Button>
        </Box>
    </>
  );
};

export default Plans;
