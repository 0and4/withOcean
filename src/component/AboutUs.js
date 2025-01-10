import styled from "styled-components";
const Wrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
`;
function AboutUs() {
  return (
    <Wrapper>
      <Container>
        <h2>About us</h2>
      </Container>
    </Wrapper>
  );
}
export default AboutUs;
