import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the animations
const fall = keyframes`
  to {
    transform: translate3d(-30em, 0, 0);
  }
`;

const tailFade = keyframes`
  0%,
  50% {
    width: var(--star-tail-length);
    opacity: 1;
  }
  70%,
  80% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 0;
    opacity: 0;
  }
`;

const blink = keyframes`
  50% {
    opacity: 0.6;
  }
`;

// Styled components for the container and stars
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #1f2231 100%);
`;

const Stars = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
`;

const Star = styled.div`
  --star-color: white;
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite,
    ${tailFade} var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: ${blink} 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 750px) {
    animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite;
  }
`;

const Backgroung = () => {
  return (
    <Container>
      <Stars>
        {[...Array(50)].map((_, i) => (
          <Star key={i} />
        ))}
      </Stars>
    </Container>
  );
};

export default Backgroung;
