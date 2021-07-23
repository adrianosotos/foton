import { useReadBook  } from '../../context/readBook'
import { Container, BookInfo, Author, BookTitle, ChapterInfo, DarkCircle, LightCircle, BookBox, RedLine, WaveContainer, BookSpace } from './style'
import { RiBookMarkLine } from "react-icons/ri";
import Waves from '../../images/Waves'

function CurrentlyReadingCard () {
  const { readBook } = useReadBook()
  return (
    <Container>
      <img src={readBook?.image} />
      <LightCircle />
      <BookBox>
        <BookSpace />
        <BookInfo>
          <DarkCircle />
          <RedLine />
          <WaveContainer>
            <Waves />
          </WaveContainer>
          <BookTitle>{readBook?.title}</BookTitle>
          <Author>by {readBook?.authors}</Author>
          <ChapterInfo><RiBookMarkLine />Chapter <span>2</span> From 9</ChapterInfo>
        </BookInfo>
      </BookBox>
    </Container>
  )
}

export default CurrentlyReadingCard