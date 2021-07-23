import { Container, HeaderItem, Icon, HeaderItemLabel } from './style'
import { FiHome, FiUser } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";

function Header () {
    return (
      <Container>
        <HeaderItem>
          <Icon>
            <FiHome />
          </Icon>
          <HeaderItemLabel>Home</HeaderItemLabel>
        </HeaderItem>
        <HeaderItem>
          <Icon>
            <BiBookAlt />
          </Icon>
          <HeaderItemLabel>Libraries</HeaderItemLabel>
        </HeaderItem>
        <HeaderItem>
          <Icon>
            <FiUser />
          </Icon>
          <HeaderItemLabel>Profile</HeaderItemLabel>
        </HeaderItem>
      </Container>
    )
}

export default Header
