import styled from "styled-components";
import React, { useRef, useState, useCallback, useEffect } from "react";
import linkicon from "../images/linkicon.png";
import { Wrapper } from "./ui/Wrapper";
import "intersection-observer";
import useIntersectionObserver from "./ui/useIntersectionObserver";
const ScrollWrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > div {
    scroll-snap-align: start;
  }
`;
const opacityAnimation = `
@keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`;
const Container = styled.div`
  ${opacityAnimation}
  height: calc(100vh - 100px);
  width: 100vw;
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  @media (max-width: 768px) {
    padding: 20% 0;
  }

  @media (max-width: 480px) {
    padding: 15% 0;
  }
  &.animation {
    animation-name: opacity;
    animation-duration: 2000ms;
    animation-timing-function: ease-in-out;
  }
`;
const BtnContainer = styled.div`
  margin: 30px;
`;
const TitleText = styled.p`
  font-size: 2em;
  font-weight: bold;
`;
const SmallText = styled.p`
  text-align: center;
  font-size: small;
  margin-top: 10px;
`;
const Button = styled.button`
  margin: 10px;
  padding: ${(props) => (props.variant === "blue" ? "10px 30px" : "10px 20px")};
  justify-content: center;
  border: 1px solid #00ace0;
  background-color: ${(props) =>
    props.variant === "blue" ? "#00ace0" : "#fff"};
  color: ${(props) => (props.variant === "blue" ? "#fff" : "#00ace0")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    border: 1px solid #007190;
    background-color: #007190;
    color: #fff;
  }

  img {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    margin-left: 5px;
  }
`;
function Home() {
  const ref = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const isInViewport = useIntersectionObserver(ref);

  const handleAnimation = useCallback(() => {
    if (isInViewport) {
      setAnimationTriggered(true);
    }
  }, [isInViewport]);

  useEffect(() => {
    handleAnimation();
  }, [isInViewport, handleAnimation]);

  return (
    <Wrapper>
      <ScrollWrapper>
        <Container bgColor="#f0f8ff">
          <TitleText>AWAR SUSCTOP TJEMA</TitleText>
          <TitleText>AQUARION MAS TALAR</TitleText>
          <SmallText>동해바다에서 만나는 멋진 경험</SmallText>
          <BtnContainer>
            <Button variant="blue">숙소 둘러보기</Button>
            <Button variant="white">
              예약 바로가기 <img alt="linkicon" src={linkicon}></img>
            </Button>
          </BtnContainer>
        </Container>
        <Container
          bgColor="#fef5e7"
          ref={ref}
          className={animationTriggered ? "animation" : ""}
        >
          <TitleText>실제 사용자의 후기를 들어보세요</TitleText>
          <SmallText>방문자 리뷰</SmallText>
        </Container>
      </ScrollWrapper>
    </Wrapper>
  );
}

export default Home;
