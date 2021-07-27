import styled from 'styled-components'

export const SearchContainer = styled.div`
  background-color: #F2F2F2;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;
`

export const SearchBarContainer = styled.div`
  max-width: 100%;
  display: block;
  margin: 30px auto;

  svg {
    left: 50px;
    position: relative;
    top: 39px;
    color: #ccc;
    width: 20px;
    height: 20px;
  }
`

export const SearchBar = styled.input`
  width: 230px;
  height: 20px;
  padding: 15px 41px;
  background: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
  border: none;
  display: block;
  margin: 0 auto;
  color: #54565A;
  font-size: 16px;

  ::placeholder {
    color: #54565A;
    font-size: 16px;
  }
`

export const BookGrid = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
` 

export const Book = styled.div`
  margin: 5px;

`

export const BookImage = styled.img`
  width: 105px;
  height: 153px;
`

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 105px;
  margin: 10px 0;
`

export const BookTitle = styled.p`
  margin: 0;
  font-size: 12px;
`

export const Author = styled.p`
  margin: 0;
  font-size: 10px;
`

export const LoadMoreButton = styled.button`
  display: block;
  margin: 40px auto;
  border: none;
  width: 100px;
  height: 45px;
  box-shadow: 0px 0px 11px -2px rgba(0,0,0,0.6);
`