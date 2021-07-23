import { HomeContainer, Title, Name, Subtitle, SearchBarContainer, SearchBar, SubtitleContainer, LinkButton, DiscoverBooksContainer, WaveContainer } from './style'
import DiscoverBooks from '../../components/discoverBooks/DiscoverBooks'
import VideoReview from '../../components/videoReview/VideoReview'
import CurrentlyReadingCard from '../../components/currentlyReadingCard/CurrentlyReadingCard'
import { useHistory } from 'react-router'
import { VscCircleOutline } from 'react-icons/vsc'
import Waves from '../../images/Waves'
import { useReadBook } from '../../context/readBook'
import Header from '../../components/header/Header'

function Home () {
  const history = useHistory()
  const { readBook } = useReadBook()
  const defaultDiscoverBooks = [
      'GXWkDwAAQBAJ',
      'iBHWDwAAQBAJ',
      'vZCZxAEACAAJ'
    ]

    function redirectToSearchPage () {
      history.push(`/search`)
    }
  
    return (
      <HomeContainer>
        <SearchBarContainer>
          <VscCircleOutline />
          <SearchBar 
            type="text" 
            onFocus={redirectToSearchPage}
            placeholder={'Search Book'} 
          />
        </SearchBarContainer>
        <Title>
          Hi, <Name>Mehmed Al Faith</Name> {' 👋'}
        </Title>
        <SubtitleContainer>
          <Subtitle>Discover new book</Subtitle>
          <LinkButton>More</LinkButton>
        </SubtitleContainer>
        <WaveContainer>
          <Waves />
        </WaveContainer>
        <DiscoverBooksContainer>
          {
            defaultDiscoverBooks.map((bookId, index) => <DiscoverBooks bookId={bookId} index={index} />)
          }
        </DiscoverBooksContainer>
        {
          readBook && (
            <>
              <SubtitleContainer>
                <Subtitle>Currently Reading</Subtitle>
                <LinkButton>All</LinkButton>
              </SubtitleContainer>
              <CurrentlyReadingCard />
            </>
          )
        }
        <Subtitle>Review of The Days</Subtitle>
        <VideoReview videoId='vBzBgewl4ac' />
        <Header />
      </HomeContainer>
    )
  }
  
  export default Home