import React, { createContext, useState, useContext, useEffect } from 'react'

const ReadBookContext = createContext()

export default function ReadProvider ({ children }) {
  const [readBook, setReadBook] = useState([])

  useEffect(() => {
    const localStorageItem = JSON.parse(localStorage.getItem('read-book'))
    setReadBook(localStorageItem)
  }, [])

  return (
    <ReadBookContext.Provider value={{ readBook, setReadBook }}>
      {children}
    </ReadBookContext.Provider>
  )
}

export function useReadBook () {
  const context = useContext(ReadBookContext)
  const { readBook, setReadBook } = context

  function saveReadBook (readBook) {
    setReadBook(readBook)
    localStorage.setItem('read-book', JSON.stringify(readBook))
  }

  return { readBook, setReadBook, saveReadBook }
}
