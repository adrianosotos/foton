import { Container, HeaderItem, Icon, HeaderItemLabel, StyledLink } from './style'
import { FiHome, FiUser } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";

function Header () {
    return (
      <Container>
        <HeaderItem>
          <StyledLink className="active" to="/">
            <Icon>
              <FiHome />
            </Icon>
            <HeaderItemLabel>Home</HeaderItemLabel>
          </StyledLink>
        </HeaderItem>
        <HeaderItem>
        <StyledLink to="/">
          <Icon>
            <BiBookAlt />
          </Icon>
          <HeaderItemLabel>Libraries</HeaderItemLabel>
        </StyledLink>
        </HeaderItem>
        <HeaderItem>
          <StyledLink to="/">
          <Icon>
            <FiUser />
          </Icon>
          <HeaderItemLabel>Profile</HeaderItemLabel>
          </StyledLink>
        </HeaderItem>
      </Container>
    )
}

export default Header
