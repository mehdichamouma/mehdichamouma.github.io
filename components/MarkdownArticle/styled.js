import styled from 'styled-components';

const SPACINGS = [4, 8, 16, 16, 32, 64];

export const StyledContainer = styled.div`
  background-color: #FFFFFF;
  flex: 1;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: normal;
`;

export const Separator = styled.div`
  width: 139px;
  height: 1px;
  background-color: #AEAEAE;
  align-self: flex-end;
  margin-top: 22px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  
  & > h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin-top: ${SPACINGS[5]}px;
    margin-bottom: ${SPACINGS[1]}px;
  }

  & > h2 {
    font-size: 32px;
  }
`;

export const CenteredImageContainer = styled.div`
  margin: ${SPACINGS[3]}px auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageLegend = styled.div`
  margin-top: ${SPACINGS[2]}px;
  color: rgb(90,90,90);
  width: 70%;
  text-align: center;
  font-size: 14px;
  line-height: 21px;
`;

export const CenteredImage = styled.img`
  width: 800px;
`;

export const StyledParagraph = styled.p`
  margin: ${SPACINGS[3]}px 0;
`;
