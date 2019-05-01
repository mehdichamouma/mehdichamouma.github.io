import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #FFFFFF;
  flex: 1;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

const StyledLink = styled.a`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #141414;
  margin: 10px 0;
  text-decoration-line: underline;
  /* text-decoration-style: dashed; */
  text-decoration-color: #00728e;
  padding: 3px 2px;
  &:hover {
    background-color: #00728e;
    color: white;
    cursor: pointer;
  }
`;

const Separator = styled.div`
  width: 139px;
  height: 1px;
  background-color: #AEAEAE;
  align-self: flex-end;
  margin-top: 22px;
  margin-bottom: 8px;
`;

const Content = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
`;

const BottomLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: normal;
  text-align: right;
  color: #555555;
`;

const HireMe = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: normal;
  text-align: right;
  color: #000000;
`;

function Home() {
  return (
    <StyledContainer>
      <Content>
        <LinksContainer>
          <StyledLink>+ Building a cpu and a os from scratch</StyledLink>
          <StyledLink>+ Development of small react native apps</StyledLink>
          <StyledLink>+ From a monolithic to a Kafka-based architecture</StyledLink>
          <StyledLink>+ A faster method for object recognition</StyledLink>
        </LinksContainer>
        <Separator />
        <BottomLine>
          <Title>Mehdi Chamouma&apos;s Personal Space</Title>
          <HireMe>Hire me</HireMe>
        </BottomLine>
      </Content>
    </StyledContainer>
  );
}

export default Home;
