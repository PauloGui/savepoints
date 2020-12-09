import React from 'react'

import { Container, Span, Input, TextArea, Button } from './styles'

function SideMenu() {
  return(
      <Container>
        <Span>Adicionar Local</Span>
        <Input placeholder='Local' />
        <Input placeholder='Latitude' />
        <Input placeholder='Logintude' />
        <Input placeholder='Imagem' />
        <TextArea />
        <Button>Adicionar</Button>
      </Container>
  )
}

export default SideMenu