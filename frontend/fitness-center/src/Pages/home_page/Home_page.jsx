import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Banner_homepage from '../../Components/homepage/banner_homepage/Banner_homepage'
import Intro_fb_plus from '../../Components/homepage/intro_fb_plus/Intro_fb_plus'
<<<<<<< HEAD
// import Navbar_main from '../../Components/homepage/navbar_main/Navbar_main'
=======
import Navbar_main from '../../Components/homepage/navbar_main/Navbar_main'
import Not_Sure_where_to_start_section from '../../Components/homepage/not_sure_where_section/Not_Sure_where_to_start_section'
import SupportiveCommunity from '../../Components/homepage/supportive_community/SupportiveCommunity'
>>>>>>> main
import Workout_video_section_main_page from '../../Components/homepage/workout_video_section_main_page/Workout_video_section_main_page'

import "./Home_page.css"
const Home_page = () => {
  useEffect(() => {
    document.title="Fitness Blender"
  }, [])
  
  return (
<<<<<<< HEAD
 <Stack>
=======
 <Stack mb="12px" >
>>>>>>> main
  {/* <Navbar_main/> */}
  <Banner_homepage/>
  <Intro_fb_plus/>
  <Workout_video_section_main_page/>
  <SupportiveCommunity/>
  <Not_Sure_where_to_start_section/>
 </Stack>
  )
}

export default Home_page