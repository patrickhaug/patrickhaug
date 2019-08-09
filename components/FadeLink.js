import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

export const FadeLink = styled.a`
  opacity: 0;
  color: #000;
  animation: ${fadeIn} 1s linear;
  animation-delay: ${props => props.delay}s;
  animation-fill-mode: forwards;
  margin-right: 3px;
  font-size: 1rem;
  &:hover {
    text-decoration: overline;
  }
`;
