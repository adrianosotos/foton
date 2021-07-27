import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import { useReadBook } from '../../context/readBook'
import { ArtContainer, BookImage } from './style'
import { BookContent, Container, BookTitle, Author, Description, LargerWaveContainer, SmallerWaveContainer, BlueBall, RedBall, PurpleCircle, ImageContainer, LeftArrow} from './style';
import { useHistory } from 'react-router'
import Waves from '../../images/Waves'
import BookMenu from '../../components/bookMenu/BookMenu'

function Details () {
  const history = useHistory() 
  const { bookId } = useParams()
  const { saveReadBook } = useReadBook()
  const [bookInfo, setBookInfo] = useState({})

  function redirectToHomePage () {
    history.push(`/`)
  }

  function readBookHandler () {
    saveReadBook({
      id: bookInfo?.id,
      title: bookInfo?.volumeInfo?.title,
      authors: bookInfo?.volumeInfo?.authors,
      image: bookInfo.volumeInfo?.imageLinks?.smallThumbnail
    })
  }

  useEffect(() => {
    Axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then((res) => {
      setBookInfo(res.data)
    })
  }, [bookId])  
  return (
      <Container>
        <ArtContainer>
          <LeftArrow onClick={redirectToHomePage} />
          <PurpleCircle />
          <LargerWaveContainer>
            <Waves />
          </LargerWaveContainer>
          <SmallerWaveContainer>
            <Waves />
          </SmallerWaveContainer>
          <BlueBall />
          <RedBall />
        </ArtContainer>
        <ImageContainer>
          <BookImage src={bookInfo?.volumeInfo?.imageLinks?.thumbnail}/>
        </ImageContainer>
        <BookContent>
          <BookTitle>{bookInfo?.volumeInfo?.title}</BookTitle>
          <Author>{bookInfo?.volumeInfo?.authors}</Author>
          <Description dangerouslySetInnerHTML={{__html: bookInfo?.volumeInfo?.description}} />
        </BookContent>
        <BookMenu saveBook={readBookHandler} />
      </Container>
    )
  }
  
  export default Details