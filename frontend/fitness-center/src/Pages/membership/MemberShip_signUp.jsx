import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MemberShip_banner from '../../Components/membership_components/membership_banner/MemberShip_banner'
import MemberShip_join_with_plus from '../../Components/membership_components/memberShip_join_with_plus/MemberShip_join_with_plus'
import MemberShip_passes_List from '../../Components/membership_components/membership_passes_list/MemberShip_passes_List'
import MemberShip_Table_Section from '../../Components/membership_components/membership_table_section/MemberShip_Table_Section'
import "./MemberShip_signUp.css"
const MemberShip_signUp = () => {
  useEffect(() => {
    document.title="Membership"
  }, [])
  
  return (
    <Stack>
    <MemberShip_banner/>
    <MemberShip_join_with_plus/>
    <MemberShip_Table_Section/>
    <MemberShip_passes_List/>
    </Stack>
  )
}

export default MemberShip_signUp