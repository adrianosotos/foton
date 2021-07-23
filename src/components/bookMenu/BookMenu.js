import { Container, BookMenuItem, Label, BookMenuContent, BookBox } from './style'
import { BsBook } from "react-icons/bs";
import { MdHeadset } from "react-icons/md";
import { FiShare } from "react-icons/fi";

function BookMenu ({ saveBook }) {
  return (
    <Container>
      <BookBox>
        <BookMenuContent>
          <BookMenuItem onClick={saveBook}>
            <BsBook />
            <Label>Read</Label>
          </BookMenuItem>
          <BookMenuItem>
            <MdHeadset />
            <Label>Listen</Label>
          </BookMenuItem>
          <BookMenuItem>
            <FiShare />
            <Label>Share</Label>
          </BookMenuItem>
        </BookMenuContent>
      </BookBox>
    </Container>
  )
}

export default BookMenu