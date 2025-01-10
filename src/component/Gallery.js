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
function Gallery() {
  return (
    <Wrapper>
      <Container>
        <h2>Gallery</h2>
      </Container>
    </Wrapper>
  );
}
export default Gallery;
