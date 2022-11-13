import React, { useState } from "react";
import "./Programs.css";
import { SlArrowDown } from "react-icons/sl";

import { useEffect } from "react";
import axios from "axios";
import { BsCheckCircle, BsChevronUp } from "react-icons/bs";
const Programs = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const [full, setFull] = useState([]);
  const [quick, setQuick] = useState([]);
  const [meal, setMeal] = useState([]);
  const [pilot, setPiolt] = useState([]);

  const fullData = async () => {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/plans?limit=4`
    );
    setFull(res.data);
  };

  const quickData = async () => {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/pilot?limit=4`
    );
    setQuick(res.data);
  };

  const mealData = async () => {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/mealplans?limit=4`
    );
    setMeal(res.data);
  };

  const pioltData = async () => {
    let res = await axios.get(
      `https://backend-server-300e.onrender.com/pilot?limit=4`
    );
    setPiolt(res.data);
  };

  useEffect(() => {
    fullData();
    quickData();
    mealData();
    pioltData();
  }, []);

  return (
    <>
      <div className="topHeading">
        <img
          src="https://d18zdz9g6n5za7.cloudfront.net/workouts_programs/masthead-workouts-xs.jpg"
          id="headImage"
        />

        <div className="container">
          <div className="Pheading">PROGRAMS, CHALLENGES, MEAL PLANS</div>
          <h1 className="headingHug">
            Follow professionally <br /> developed programs for <br /> fitness
            and nutrition.
          </h1>
        </div>

        <div className="downArrow">
          <SlArrowDown size={30} color="" />
        </div>
      </div>

      <div className="programsNav">
        <a href="#programs" onClick={toggleNavList}>
          {" "}
          <div>
            {" "}
            <span className="diplaynone"> WORKOUT</span> PROGRAMS
          </div>
        </a>
        <a href="#challenges" onClick={toggleNavList}>
          <div>
            <span className="diplaynone"> WORKOUT</span> CHALLENGES
          </div>
        </a>
        <a href="#mealPlans" onClick={toggleNavList}>
          <div>MEAL PLANS</div>
        </a>
        <a href="#pilot" onClick={toggleNavList}>
          <div>
            PILOT <span className="diplaynone"> PROGRAMS</span>PROGRAMS
          </div>
        </a>
      </div>

      <div id="programs">
        <div className="programsLab">
          <div>
            {" "}
            <p className="workheading containerbox">
              Full-Length Workout Programs
            </p>{" "}
          </div>
          <a href="">View All</a>
        </div>

        <div className="fullWorkout containerbox">
          {full.map((ele) => (
            <div key={ele._id} className="card">
              <img src={ele.lazyfade_src} />
              <div className="workoutTxt">
                <p className="duration">
                  {ele.week}WEEK PROGRAM - {ele.min} MIN/DAY
                </p>
                <p id="details">{ele.x_small}</p>
                <p className="price">${ele.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="workoutdetial">
        <div className="Pcontainerbox">
          <p className="workheading">Workout Program Features</p>
          <p className="feat">Features</p>

          <div className="detialstxt">
            <p>
              Work out with research-backed programs designed by Certified
              Personal Trainers (CPTs).
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Follow expertly-curated combinations of workouts from our free
              video library.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Focus your exercise time with proper structure for more effective
              results.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Learn to modify individual exercises to accommodate virtually any
              fitness level.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Improve overall health and functional fitness.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Schedule and track progress via the FB Calendar.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Review each day's objectives and workout details.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Complete as many times as you like.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>
              Get additional tips and information with a detailed program and
              nutrition guide.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="fb-perk">
            <div className="fb-perk-ico">
              <div className="fbplus">
                <span className="fb">FB</span>
                <span className="plus">Plus</span>
                <div className="mp">Member Perk</div>
              </div>
            </div>
            <div className="perk-message">
              Programs designated with the FB Plus badge are included with an
              active FB Plus membership. They are also enhanced with more daily
              exercise options from the FB Plus exclusive video library.
            </div>
          </div>

          <div className="center">
            <button className="btn">VIEW FAQS AND NOTES</button>
          </div>

          <div className="center">
            <BsChevronUp size={20} color="#4296cb" />
          </div>
          <div className="center navigatortop">Back to Top</div>
        </div>
      </div>

      <div id="challenges">
        <div className="programsLab">
          <div>
            {" "}
            <p className="workheading containerbox">
              Quick Workout Challenges
            </p>{" "}
          </div>
          <a href="">View All</a>
        </div>

        <div className="fullWorkout Pcontainerbox">
          {quick.map((ele) => (
            <div key={ele._id} className="card">
              <img src={ele.lazyfade_src} />
              <div className="workoutTxt">
                <p className="duration">
                  {ele.week}WEEK PROGRAM - {ele.min} MIN/DAY
                </p>
                <p id="details">{ele.x_small}</p>
                <p className="price">${ele.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="workoutdetial">
        <div className="Pcontainerbox">
          <p className="workheading">Workout Challenge Features</p>

          <div className="detialstxt">
            <p>
              Work out with research-backed programs designed by Certified
              Personal Trainers (CPTs).
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Follow expertly-curated combinations of workouts from our free
              video library.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Focus your exercise time with proper structure for more effective
              results.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Learn to modify individual exercises to accommodate virtually any
              fitness level.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Improve overall health and functional fitness.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Schedule and track progress via the FB Calendar.</p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>Complete as many times as you like.</p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Take the guesswork out of planning routines and picking workouts.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="fb-perk">
            <div className="fb-perk-ico">
              <div className="fbplus">
                <span className="fb">FB</span>
                <span className="plus">Plus</span>
                <div className="mp">Member Perk</div>
              </div>
            </div>
            <div className="perk-message">
              All workout challenges, including new releases, are included with
              an active FB Plus membership. They are also enhanced with workouts
              from the FB Plus exclusive video library.
            </div>
          </div>

          <div className="center">
            <button className="btn">VIEW FAQS AND NOTES</button>
          </div>

          <div className="center">
            <BsChevronUp size={20} color="#4296cb" />
          </div>
          <div className="center navigatortop">Back to Top</div>
        </div>
      </div>

      <div id="mealPlans">
        <div className="programsLab">
          <div>
            {" "}
            <p className="workheading containerbox">Meal Plans</p>{" "}
          </div>
          <a href="">View All</a>
        </div>

        <div className="fullWorkout Pcontainerbox">
          {meal.map((ele) => (
            <div key={ele._id} className="card">
              <img src={ele.lazyfade_src} />
              <div className="workoutTxt">
                <p className="duration">
                  {ele.week}WEEK PROGRAM - {ele.min} MIN/DAY
                </p>
                <p id="details">{ele.x_small}</p>
                <p className="price">${ele.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="workoutdetial">
        <div className="Pcontainerbox">
          <p className="workheading">Meal Plan Features</p>

          <div className="detialstxt">
            <p>
              Follow healthy, research-backed meal plans designed by Registered
              Dietitians (RDs) and crafted by professional chefs.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Make meal planning for the week a breeze with easy-to-follow
              recipes and shopping lists.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>Schedule and track your meals on the FB Calendar.</p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Personalize your meal plans to fit your approach to food and daily
              energy needs.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Build or maintain your healthy eating habits.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>Complete as many times as you like.</p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>
              Mix and match with other meal plans to keep your diet fresh and
              exciting.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>
          <div className="detialstxt">
            <p>
              US Customary and Metric units included with all plans and recipes.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="fb-perk">
            <div className="fb-perk-ico">
              <div className="fbplus">
                <span className="fb">FB</span>
                <span className="plus">Plus</span>
                <div className="mp">Member Perk</div>
              </div>
            </div>
            <div className="perk-message">
              New interactive meal plans are included with an active FB Plus
              membership. They are also enhanced with recipes from the FB Plus
              exclusive library.
            </div>
          </div>

          <div className="center">
            <button className="btn">VIEW FAQS AND NOTES</button>
          </div>

          <div className="center">
            <BsChevronUp size={20} color="#4296cb" />
          </div>
          <div className="center navigatortop">Back to Top</div>
        </div>
      </div>

      <div id="pilot">
        <div className="programsLab">
          <div>
            {" "}
            <p className="workheading Pcontainerbox">Pilot Programs</p>{" "}
          </div>
          <a href="">View All</a>
        </div>

        <div className="fullWorkout containerbox">
          {pilot.map((ele) => (
            <div key={ele._id} className="card">
              <img src={ele.lazyfade_src} />
              <div className="workoutTxt">
                <p className="duration">
                  {ele.week}WEEK PROGRAM - {ele.min} MIN/DAY
                </p>
                <p id="details">{ele.x_small}</p>
                <p className="price">${ele.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="workoutdetial">
        <div className="Pcontainerbox">
          <p className="workheading">Meal Plan Features</p>

          <div className="detialstxt">
            <p>
              New pilot programs to test different types of content, formats, or
              topics.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>Researched backed and designed by experts. </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              May include guided meditations, mental wellness, and other
              specialized topics.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="detialstxt">
            <p>
              Works alongside existing scheduled workout programs and meal
              plans.
            </p>
            <BsCheckCircle color="green" size={20} />
          </div>

          <div className="fb-perk">
            <div className="fb-perk-ico">
              <div className="fbplus">
                <span className="fb">FB</span>
                <span className="plus">Plus</span>
                <div className="mp">Member Perk</div>
              </div>
            </div>
            <div className="perk-message">
              Pilot programs designated with the FB Plus badge are included with
              an active FB Plus membership. They are also enhanced with content
              from the FB Plus exclusive library.
            </div>
          </div>

          <div className="center">
            <button className="btn">VIEW FAQS AND NOTES</button>
          </div>

          <div className="center">
            <BsChevronUp size={20} color="#4296cb" />
          </div>
          <div className="center navigatortop">Back to Top</div>
        </div>
      </div>
    </>
  );
};

export default Programs;
