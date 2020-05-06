import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5em;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
 export const Wrapper = styled.section`
  padding: 2em;
`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title} </Title>
    </Wrapper>
  );
};

export default Header;
