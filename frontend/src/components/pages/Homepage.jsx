import styled from "styled-components";

// Styling
const PageDiv = styled.div`
  background-color: #fbfbfb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #B0DB9C;
  font-size: 300%;
`;

const Homepage = () => {
  return (
    <PageDiv>
      <Title>Celery Blind Boxes Homepage</Title>
    </PageDiv>
  );
};

export default Homepage;
