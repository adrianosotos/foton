import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #ffffff;
  display: flex;
  height: 59px;
  justify-content: space-around;
`

export const HeaderItem = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`

export const HeaderItemLabel = styled.p`
  font-weight: 400;
  font-size: 10px;
`

export const Icon = styled.div`
  margin: auto;

  svg {
    width: 16px;
    height: 18px;
    display: block;
    margin: auto;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #BFBEBF;

  &.active  {
    color: #000000;
  }
`