import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { BookTitle, Author } from './style'
import Axios from 'axios'

function DiscoverBooks ({ bookId }) {
  const [bookInfo, setBookInfo] = useState({})
  const history = useHistory()
  
  useEffect(() => {
    Axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then((res) => {
      setBookInfo(res.data.volumeInfo)
    })
  }, [])

  function redirectToBookPage () {
    history.push(`/book/${bookId}`)
  }

  return (
    <div onClick={redirectToBookPage}>
      <BookTitle>{bookInfo.title}</BookTitle>
      <Author>{bookInfo.authors}</Author>
    </div>
  )
}

export default DiscoverBooks