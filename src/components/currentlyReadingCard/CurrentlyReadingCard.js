import { useReadBook } from '../../context/readBook'

function CurrentlyReadingCard () {
  const { readBook } = useReadBook()
  return (
    <div>
      <img src={readBook?.image} />
      <h3>{readBook?.title}</h3>
      <p>by {readBook?.authors}</p>
    </div>
  )
}

export default CurrentlyReadingCard