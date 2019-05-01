import React from 'react';

import MarkdownArticle from '../../components/MarkdownArticle';

const markdown = `
  # Build a cpu from scratch
  In this exercice, we will try to understand the components that one can find in a
  typical CPU.

  ## Overview


  ## Control Logic

  The Control Logic reads the current instructions and provides the corresponding signals that the
  would control the others components behavior.

  ![Control logic overview](
    /static/control-logic-overview.png
    "The control logic component in the middle that takes an Operation code (e.g ADD) and output some signals that are read by others components"
  )


  For example, when the current instructions is a ADD or ADDC, the control logic will set the signal ALUFN to
  the add operation, so the ALU will output a the sum of its input. Moreover, the control logic
  will send a signal to a multiplexer to wether use a register as the second input of the ALU or use a constant.

  ![Control logic add operation](
    /static/control-logic-add-operation.png
    "The control logic component in the middle that takes an Operation code (e.g ADD) and output some signals that are read by others components"
  )
  ## Arithemetic and Logical Unit

  The arithemetic and logical unit can perform operations on its two 32-bits inputs. It output a 32 bits results.
  Depending on the ALUFN signal, it performs one, for example, of the following operations: addition, multiplication,
  shift, compare equal, compare greater than, ...

  All operations are executed simultaneously, then one of their output is choosen thanks to a multiplexer driver by the
  alufn signal.

  ![ALU](
    https://scontent.fmex7-2.fna.fbcdn.net/v/t1.15752-9/59152990_1026735410859882_6691363553141587968_n.png?_nc_cat=107&_nc_ht=scontent.fmex7-2.fna&oh=7b45b1ed4af09e8e1b2a5b41f4caf6ea&oe=5D685F21
    "The control logic component in the middle that takes an Operation code (e.g ADD) and output some signals that are read by others components"
  )

  ## Register Files

  The register files store 32 registers, each of them storing a 32-bit word.
  To read register content, we provide two numbers from 1 to 31 that are the registers
  identifiers.
  To write data on a register, we provide one number from 1 to 31 and a the 32-bits data.

  ![ALU](
    /static/register-file.png
    "The control logic component in the middle that takes an Operation code (e.g ADD) and output some signals that are read by others components"
  )

  To write data on a register, we provide one number from 1 to 31 and a the 32-bits data.

  ![ALU](
    /static/register-file-write.png
    "The control logic component in the middle that takes an Operation code (e.g ADD) and output some signals that are read by others components"
  )

  ## Program Counter

  The program counter component has a 32 bits word that it increments at each instruction execution.
  So if the CPU is currently executing the 5th instruction of the program, the program counter value would be 6.
  Some instructions can update the program counter arbitraly, and this operation allows branching.
  One of these instructions is BEQ(*RC*, ra, c). This instruction will check if the content of the *RC* register is 0, and if so,
  it add c to the program counter. This is what happens in a if statement.


`;

function Article() {
  return (
    <MarkdownArticle
      markdown={markdown}
    />
  );
}

export default Article;
