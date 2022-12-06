import React from 'react';
import styled, { css } from 'styled-components';

const ReadyButton = ({ children }) => {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default ReadyButton;

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  /* background-color: #f5f5f5; */
  background-color: pink;
  border-radius: 6px;
  color: #ff8217;
  font-weight: 500;
  border: 1px solid #ff8217;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: #ff8217;
    color: #ffffff;
  }
  &:not(:hover) {
    transition: 0.3s ease-out;
  }

  ${(props) =>
    props.doong &&
    css`
      animation: doongdoong 1.5s infinite linear;
     @keyframes doongdoong{
    0%,100%{
        transform:translate(0%,0%);
    }
    50%{
        transform:translate(0%,-10%);
    }
    `}
`;
