import React from 'react'

import { Container, Span, Input, TextArea, Button } from './styles'

function SideMenu() {
  return(
      <Container>
        <Span>Adicionar Local</Span>
        <Input />
        <Input />
        <Input />
        <Input />
        <TextArea />
        <Button>Adicionar</Button>
      </Container>
  )
}

export default SideMenu