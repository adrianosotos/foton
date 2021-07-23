import Axios from 'axios'
import { useState, useRef } from 'react'
import { SearchContainer, SearchBarContainer, SearchBar, Book, BookImage, BookGrid,  BookTitle, Author, BookInfo, LoadMoreButton } from './style'
import { VscCircleOutline } from 'react-icons/vsc'
import { useHistory } from 'react-router'
import { useDebouncedEffect } from '../../hooks/useDebounceEffect'
import Header from '../../components/header/Header'

const PAGE_SIZE = 6

function Search () {
  const history = useHistory()
  const input = useRef(null)
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [pageIndex, setPageIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  useDebouncedEffect(() => {
    input.current.focus()
    if (!query) {
      return setBooks([])
    }
  
    Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${PAGE_SIZE}`).then((res) => {
      setBooks(res.data.items)
    })
  }, [query], 500)
  

  function loadMoreBooks () {
    setLoading(true)
    const newPageIndex = pageIndex + 1
    setPageIndex(newPageIndex)
    
    const pageSize = 6
    
    Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${pageSize}&startIndex=${PAGE_SIZE*newPageIndex}`).then((res) => {
      setBooks([...books, ...res.data.items])
      setLoading(false)
    })
  }

  function redirectToBookPage (bookId) {
    history.push(`/book/${bookId}`)
  }

  return (
    <SearchContainer>
      <SearchBarContainer>
        <VscCircleOutline />
        <SearchBar 
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder={'Search Book'}
          ref={input}
        />
      </SearchBarContainer>
      <BookGrid>
        {
          books && books.map(book => (
            <Book onClick={() => redirectToBookPage(book.id)}>
              <BookImage src={book.volumeInfo?.imageLinks?.thumbnail} />
              <BookInfo>
                <BookTitle>{book.volumeInfo?.title}</BookTitle>
                <Author>by {book.volumeInfo?.authors}</Author>
              </BookInfo>
            </Book>
          ))
        }
      </BookGrid>
      {
        query && (
          <LoadMoreButton onClick={loadMoreBooks}>{loading ? 'Loading...' : 'Load More'}</LoadMoreButton>
        )
      }
      <Header />
    </SearchContainer>
  )
}

export default Search