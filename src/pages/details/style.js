import styled from 'styled-components'
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`

export const ArtContainer = styled.div`
  position: relative;
  background-color: #FFF6E5;import { IconName } from "react-icons/ai";
  width: 100%;
  height: 282px;
  border-radius: 0 0 134px 0;
  margin-bottom: 100px;
  overflow: hidden;
`

export const LeftArrow = styled(AiOutlineArrowLeft)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 65px;
  left: 30px;
`

export const LargerWaveContainer = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 315px;
  bottom: 172px;
`

export const SmallerWaveContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 234px;
  bottom: 21px;
`

export const BlueBall = styled.div`
  width: 60px;
  height: 60px;
  background-color: #00173D;
  border-radius: 35px;
  top: 126px;
  position: absolute;
  left: 96px;
`

export const RedBall = styled.div`
  width: 12px;
  height: 12px;
  background-color: #FF6978;
  border-radius: 35px;
  top: 126px;
  position: absolute;
  left: 82px;
`

export const PurpleCircle = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid #4550A7;
  border-radius: 35px;
  top: 92px;
  position: absolute;
  left: 252px;
`

export const ImageContainer = styled.div`
  position: relative;
  top: 440px;
`

export const BookImage = styled.img`
  position: absolute;
  height: 234px;
  width: 151px;
  bottom: 497px;
  left: 121px;
`

export const BookContent = styled.div`
  margin: 20px;
`

export const BookTitle = styled.h2`
  font-size: 24px;
  font-weight: 400px;
  margin: 5px 0;
`

export const Author = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #FF6978;
`

export const Description = styled.p`
  line-height: 25px;
  padding-bottom: 200px;
`


