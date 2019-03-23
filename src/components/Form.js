import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
background: linear-gradient(to right, #e67e22, #e74c3c);
height: 40vh;
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
border: 0;
border-bottom: solid 5px #f16051;
width: 30%;
padding-bottom: 4px;
font-weight: lighter;
letter-spacing: 2px;
border-radius: 5px;
margin-right: 20px;
font-size: 20px;
`

const Button = styled.button`
margin: 5px;
border: 0;
padding: 8px 20px;
border-radius: 5px;
font-weight: lighter;
letter-spacing: 1px;
font-size: 15px;
cursor: pointer;
background-color: #f16051;
color: #fff;
font-weight: 100;
`

const Form = props => (
    <Wrapper onSubmit={props.getWeather}>
        <Input type="text" name='city' placeholder='City...' />
        <Input type="text" name='country' placeholder='Country...' />
        <Button>Get Weather</Button>
    </Wrapper >
)
export default Form;