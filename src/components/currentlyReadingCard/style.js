import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 40px;

  img {
    width: 91px;
    height: 136px;
    margin: 0 20px;
    position: absolute;
    top: 468px;
    z-index: 1;
  }
`

export const BookBox = styled.div`
  background-color: #EEF5DB;
  width: 331px;
  height: 100px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  padding-top: 10px;
  justify-content: flex-end;
`

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 70px auto 0;
`

export const BookTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #2A2B26;
  font-weight: 700;
`

export const Author = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  color: #74776D;
`

export const ChapterInfo = styled.p`
  margin-top: 20px;
  font-size: 10px;
  padding-top: 10px;

  svg {
    color: #9013FE;
  }

  span {
    color: #EC6374;
    font-weight: 700;
  }
`

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 20px;
  position: absolute;
`

export const LightCircle = styled(Circle)`
  border: 2px solid rgb(69,80,167,0.5);
  bottom: 462px;
  left: 258px;
`

export const DarkCircle = styled(Circle)`
  border: 2px solid #4550A7;
  bottom: 95px;
  left: 258px;
`

export const RedLine = styled.div`
  background-color: #EC6374;
  width: 46px;
  height: 4px;
  position: absolute;
  top: 64px;
  left: 309px;
  transform: rotate(16deg);
`

export const WaveContainer = styled.div`
  width: 69px;
  height: 69px;
  position: absolute;
  z-index: 1;
  bottom: 59px;
  left: 293px;
`