import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
  flex: 1;
  background: #000;
  padding: 20px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      border-radius: 50%;
      padding: 10px;
      background: #FFF;
      color: #000;
      object-fit: cover;
      cursor: pointer;

      :hover {
        background: ${shade(0.2, '#fff')}
      }
  }
`

export const ImgLogo = styled.img`
  background: #FFF;
  padding: 3px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`
