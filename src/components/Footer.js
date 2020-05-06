import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './Header';

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #074d63;
`;

const Footer = ({ date }) => {
  return (
    <Wrapper>
      <Title>{date} </Title>
    </Wrapper>
  );
};

export default Footer;
