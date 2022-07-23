import React from "react";

import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form id="contact-form" method="post">
      <Input>
        <label>Nome:</label>
        <input type="text" />
      </Input>
      <Input>
        <label>E-mail:</label>
        <input type="email" />
      </Input>
      <Input>
        <label>Mensagem:</label>
        <textarea rows="5" />
      </Input>
      <button type="submit">Enviar</button>
    </Form>
  );
};

const Input = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vh;
  label {
    color: white;
    padding-top: 1rem;
  }
  input{
    border: 2px 0 solid yellow;
    padding: 12px 20px;
    border-radius: 10%
    width: 100%;
    height: 100%;
  }
  input:focus {
    background-color: #16B100;
    color: white;
  }
  textarea {
    width: 100%;
    height: 150%;
    padding: 12px 20px;
    box-align: border-box;
    border: 2px solid #CCC;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
  }
  textarea:focus {
    background-color: #16B100;
    color: white;
  }
`;

const Form = styled.form`
  button{
    margin-top: 1rem;    
  }
`;

export default ContactForm;
