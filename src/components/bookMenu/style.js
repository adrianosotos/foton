import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  height: 56px;
  bottom: 50px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const BookBox = styled.div`
  width: 335px;
  background-color: #ffffff;
`

export const BookMenuContent = styled.div`
  margin: auto;
  width: 335px;
  display: flex;
  justify-content: space-around;
  box-shadow: 5px 5px 80px rgba(107, 103, 70, 0.1259);
  height: 100%;
  align-items: center;
`

export const BookMenuItem = styled.button`
  display: flex;
  flex-direction: row;
  height: 17px;
  width: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  border: none;
  border-right: 1px solid rgba(151, 151, 151, 0.2);
  background: #ffffff;

  p {
    margin-left: 4px;
  }

  &:last-child {
    border: none;
  }

  &:active {
    transform: scale(0.8);
  }
`

export const Label = styled.p`
  margin: 0;
  font-weight: bold;
`