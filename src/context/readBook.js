import React, { createContext, useState, useContext } from 'react'

const ReadBookContext = createContext()

export default function ReadProvider ({ children }) {
  const [readBook, setReadBook] = useState(null)
  return (
    <ReadBookContext.Provider value={{ readBook, setReadBook }}>
      {children}
    </ReadBookContext.Provider>
  )
}

export function useReadBook () {
  const context = useContext(ReadBookContext)
  const { readBook, setReadBook } = context

  return { readBook, setReadBook }
}
