import { Outlet} from "react-router-dom";
import styled from "styled-components";

// Style
const Container = styled.div`
  min-height: 100vh;
  background-color: #fbfbfb;
  padding: 0;
  margin: 0;
`;

const Nav = styled.div`
  background-color: #B0DB9C;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Main = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Title>CELERY BLIND BOXES</Title>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Navbar;
