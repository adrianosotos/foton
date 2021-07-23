import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #F2F2F2;
  position: relative;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #54565A;
  margin: 20px;
`

export const Name = styled.span`
  color: rgba(255, 105, 120, 1);
  font-weight: 600;
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  height: 50px;
`

export const LinkButton = styled.button`
  border: none;
  background: transparent;
  color: #4ABDF1;
  font-size: 14px;
`

export const Subtitle = styled.h4`
  font-size: 18px;
  margin: 20px;
  font-weight: 200;
`

export const SearchBarContainer = styled.div`
  max-width: 100%;
  display: block;
  margin: 30px auto;

  svg {
    left: 60px;
    position: relative;
    top: 40px;
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
`

export const DiscoverBooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin: 0px 0 20px 20px;
`

export const WaveContainer = styled.div`
  width: 190px;
  height: 190px;
  position: absolute;
  left: 274px;
  top: 170px;
`