import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDebouncedEffect } from '../../hooks/useDebounceEffect'

const PAGE_SIZE = 6

function Search () {
  const history = useHistory()
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [pageIndex, setPageIndex] = useState(1)

  useDebouncedEffect(() => {
    if (!query) {
      return setBooks([])
    }
  
    Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${PAGE_SIZE}`).then((res) => {
      setBooks(res.data.items)
    })
  }, [query], 200)
  

  function loadMoreBooks () {
    const newPageIndex = pageIndex + 1
    setPageIndex(newPageIndex)
    
    const pageSize = 6
    
    Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${pageSize}&startIndex=${PAGE_SIZE*newPageIndex}`).then((res) => {
      setBooks([...books, ...res.data.items])
    })
  }

  function redirectToBookPage (bookId) {
    history.push(`/book/${bookId}`)
  }

  return (
    <div>
      <input 
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      {
        books && books.map(book => (
          <img 
            src={book.volumeInfo?.imageLinks?.thumbnail}
            onClick={() => redirectToBookPage(book.id)} 
          />
        ))
      }
      <button onClick={loadMoreBooks}>Load more</button>
    </div>
  )
}

export default Search