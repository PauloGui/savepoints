import React from 'react'
import Maps from '../../components/Maps'
import SideMenu from '../../components/SideMenu'

import { Container } from './styles'

function Main() {
  return(
      <Container>
          <Maps />
          <SideMenu />
      </Container>
  )
}

export default Main