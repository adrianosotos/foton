import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import { useReadBook } from '../../context/readBook'

function Details () {
  const { bookId } = useParams()
  const { saveReadBook } = useReadBook()
  const [bookInfo, setBookInfo] = useState({})

  function readBookHandler () {
    saveReadBook({
      id: bookInfo?.id,
      title: bookInfo?.volumeInfo?.title,
      authors: bookInfo?.volumeInfo?.authors,
      image: bookInfo.volumeInfo?.imageLinks?.thumbnail
    })
  }

  useEffect(() => {
    Axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then((res) => {
      setBookInfo(res.data)
    })
  }, [])  
  return (
      <>
        <img src={bookInfo?.volumeInfo?.imageLinks?.thumbnail}/>
        <h2>{bookInfo?.volumeInfo?.title}</h2>
        <p>{bookInfo?.volumeInfo?.authors}</p>
        <p>{bookInfo?.volumeInfo?.description}</p>
        <button onClick={readBookHandler}>Read</button>
      </>
    )
  }
  
  export default Details