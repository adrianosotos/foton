import { Title, Name, Subtitle } from './style'
import DiscoverBooks from '../../components/discoverBooks/DiscoverBooks'
import VideoReview from '../../components/videoReview/VideoReview'
import { useHistory } from 'react-router'

function Home () {
  const history = useHistory()  
  const defaultDiscoverBooks = [
      '_vB7tAEACAAJ',
      'R7KuDwAAQBAJ',
      'I1wR6d_HO1AC'
    ]

    function redirectToSearchPage () {
      history.push(`/search`)
    }
  
    return (
      <>
        <input type="text" onFocus={redirectToSearchPage}/>
        <Title>
          Hi, <Name>Mehmed Al Faith</Name>
        </Title>
        <Subtitle>Discover new book</Subtitle>
        {
          defaultDiscoverBooks.map((bookId) => <DiscoverBooks bookId={bookId} />)
        }
        <Subtitle>Currently Reading</Subtitle>
        <Subtitle>Review of The Days</Subtitle>
        <VideoReview videoId='vBzBgewl4ac' />
      </>
    )
  }
  
  export default Home