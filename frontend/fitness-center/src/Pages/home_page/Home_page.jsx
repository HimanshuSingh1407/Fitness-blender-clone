import { Stack } from '@chakra-ui/react'
import React from 'react'
import Banner_homepage from '../../Components/homepage/banner_homepage/Banner_homepage'
import Intro_fb_plus from '../../Components/homepage/intro_fb_plus/Intro_fb_plus'
import Navbar_main from '../../Components/homepage/navbar_main/Navbar_main'
import Workout_video_section_main_page from '../../Components/homepage/workout_video_section_main_page/Workout_video_section_main_page'

import "./Home_page.css"
const Home_page = () => {
  return (
 <Stack>
  <Navbar_main/>
  <Banner_homepage/>
  <Intro_fb_plus/>
  <Workout_video_section_main_page/>
 </Stack>
  )
}

export default Home_page