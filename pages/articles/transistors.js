import React from 'react';

import MarkdownArticle from '../../components/MarkdownArticle';

const markdown = `
  # Build a cpu from scratch
  In this exercice, we will try to pass on some of the concepts that
  underly today CPUs Computation Processor Units.

  We don’t aim here to fully understand all the concepts.
  One would rather pick some of the concepts presented here and check for
  others resources to get a deeper understanding of the subject.

  ## Creation of the basic building blocks with transistors

  The transistor is a controlled switch. It let the current flows between
  two wires  depending on the voltage of a third one.

  We can then use such devices to build electronical components
  that will be the basic building blocks of our architecture.
The control logic component in the middle that takes an
  ![transitors](
    /static/transistors.png
    "inputs (in red), transitors (in red) and the output (in green)"
  )

  ![transitors](/static/transistors.png "inputs (in red), transitors (in red) and the output (in green)")
  As an example, here you have a adder component that can add two 1-bit-sized numbers.


  We can then chain them together to get a adder of N bits.
`;

function Home() {
  return (
    <MarkdownArticle
      markdown={markdown}
    />
  );
}

export default Home;
