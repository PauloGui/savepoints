import React from 'react'

import { Container, Header, ImgLogo } from './styles'
import Logo from '../../assets/logo.png'

function Maps() {
    return (
        <Container>
            <Header>
                <ImgLogo src={Logo} />
                <i class="fas fa-plus"></i>
            </Header>
        </Container>
    )
}

export default Maps