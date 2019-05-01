import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import './index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>My styled page</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
