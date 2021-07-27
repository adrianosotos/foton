import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { BookTitle, Author, BookBox, BookInfo, BookPagesInfo, WaveContainer, Content, RedLine, Circle, Triangle } from './style'
import Axios from 'axios'
import { VscLibrary } from 'react-icons/vsc'
import Waves from '../../images/Waves'

function DiscoverBooks ({ bookId, index }) {
  const [bookInfo, setBookInfo] = useState({})
  const history = useHistory()
  
  useEffect(() => {
    Axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then((res) => {
      setBookInfo(res.data.volumeInfo)
    })
  }, [bookId])

  function redirectToBookPage () {
    history.push(`/book/${bookId}`)
  }

  return (
    <BookBox onClick={redirectToBookPage}>
      <BookInfo>
        {
          index !== 1 && (
            <WaveContainer>
              <Waves />
            </WaveContainer>
          )
        }
        <Content>
          <BookTitle>{bookInfo.title}</BookTitle>
          <Author>{bookInfo.authors}</Author>
          <BookPagesInfo>
            <VscLibrary/>120+ <span>Read Now</span>
          </BookPagesInfo>
        </Content>
      </BookInfo>
      {
        index !== 1 && (
          <>
            <RedLine />
            <Triangle />
            <Circle />
          </>
        )
      }

      <img alt="book" src={bookInfo.imageLinks?.smallThumbnail} />
    </BookBox>
  )
}

export default DiscoverBooks