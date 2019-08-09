import React from "react";
import styled, { keyframes } from "styled-components";

const moveToTopLeft = keyframes`
  to {
    position: absolute;
    top: 30px;
    margin-top: 0;
  }
`;

const Logo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 200px;
  height: 60px;
  border: 5px solid #000;
  font-size: 20px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: monospace;
  animation: ${moveToTopLeft} 1s ease-in;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  @media (max-width: 400px) {
    width: 140px;
    height: 40px;
    font-size: 16px;
    margin-top: -20px;
    margin-left: -70px;
  }
`;

const Patrick = () => <Logo>patrickhaug</Logo>;

export default Patrick;