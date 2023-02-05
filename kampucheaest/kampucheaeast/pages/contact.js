import react from 'react';
import React, { useState } from 'react'
import styled from 'styled-components';



const Container = styled.div`
padding: 10px;
`;

const Wrapper = styled.div`
width: 1250px;
height: 1000px;
padding: 112px 64px;
gap: 48px;
display: flex;
`;

// const CardWrapper = styled.div`
// display: flex;
// `;
const ContactCard = styled.text`
font-size: 20px;
background-color: red;
height: 20px;
font-family: 'roboto';
`;

const Paragraph = styled.p`
top: 10px;
height: 10px;
padding: 15px;
margin: 10px;
`;

const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  top: 10px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${props => props.invalid ? 'red' : 'black'};

`;

const StyledInputName = styled.input`
width: 100%;
padding: 10px;
border: 1px sold #ccc;
border-radius: 5px;

`;
const StyledInputEmail = styled.input`

width: 100%;
padding: 10px;
padding: 10px sold #ccc;
border-radius: 5px;

`;

const Contact = () => {
  const [userName, setUserName] = react.useState('');
  const [email , setEmail] = react.useState('');
  const [username, setUsername] = React.useState('');
  const [nameInvalid, setNameInvalid] = React.useState(false);

   
    const handleSubmit = () => 
    {
      e.preventDefault();
      if (userName.length < 8) {
        setNameInvalid(true);
      } 
      return setNameInvalid(false);

    }

    const usernameEntered = (e) => {
      setUsername(e.target.value);
      // buttonEnabled(username, password)
  }
   
  return (
    <Container>
    <Wrapper>
    <ContactCard>
        Contact Us 
        <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Paragraph>
      <StyledLabel invalid={setNameInvalid} >Name</StyledLabel>
      <StyledInputName type="text" name="name" value={username} onChange={e => usernameEntered(e)}/>
      <StyledLabel invalid={setNameInvalid} >Name</StyledLabel>
      <StyledInputEmail type="text" name="email"value={email} onChange={e => usernameEntered(e)}/>
    </ContactCard>
    </Wrapper>
    </Container>
  )
}




export default Contact
