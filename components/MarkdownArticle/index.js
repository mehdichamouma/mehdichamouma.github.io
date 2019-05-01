import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  StyledContainer,
  Content,
  CenteredImageContainer,
  CenteredImage,
  ImageLegend,
  StyledParagraph,
} from './styled';

// Custom renderers to display markdown components
const renderers = {
  image(attrs) {
    const { src, alt, title } = attrs;
    return (
      <CenteredImageContainer>
        <CenteredImage width={800} src={src} alt={alt} />
        <ImageLegend>{title}</ImageLegend>
      </CenteredImageContainer>
    );
  },
  paragraph(attrs) {
    const { children } = attrs;
    return (
      <StyledParagraph>{children}</StyledParagraph>
    );
  },
};

function MarkdownArticle({ markdown }) {
  return (
    <StyledContainer>
      <Content>
        <ReactMarkdown
          source={markdown}
          renderers={renderers}
        />
      </Content>
    </StyledContainer>
  );
}

MarkdownArticle.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default MarkdownArticle;
