import styled from 'styled-components'

export const BookBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #00173D;
  min-width: 252px;
  height: 129px;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  p {
    color:#ffffff;
  }

  img {
    width: 72px;
    height: 111px;
    margin: auto 0;
  }

  &:first-child {
    margin-left: 0px;
  }

  &:nth-child(2) {
    background-color: rgb(69,20,117,0.8);
    height: 115px;
    min-width: 252px;
    margin: auto 5px;
    padding: 10px;
  }
`

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const BookTitle = styled.h4`
  font-size: 18px;
  color: #ffffff;
  margin: 0;
  font-family: 'Playfair Display';
  font-size: 27px;
  font-weight: 700;
`

export const Author = styled.i`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`

export const BookPagesInfo = styled.p`
  font-size: 12px;
  margin-top: 10px;

  span {
    font-style: italic;
  }
`

export const WaveContainer = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  z-index: 1;
  top: 36px;
  right: 158px;
`

export const Content = styled.div`
  z-index: 2;
  margin: 20px;
  height: 100%;
`

export const RedLine = styled.div`
  background-color: #EC6374;
  width: 46px;
  height: 4px;
  position: relative;
  top: 89px;
  left: 25px;
  transform: rotate(16deg);
`

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 20px;
  border: 2px solid #4550A7;
  position: absolute;
  top: 20px;
  left: 150px;
`

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 21px solid #FCBC48;
  position: absolute;
  top: 9px;
  left: 165px;
  transform: rotate(314deg);
`