import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"


export const Header = () => {
  return (
    <div>
        <Container>
            <Main>
                <Div>1</Div>
                <Logo>Logo</Logo>
                <Text>Browse</Text>
                <Icon />
                <Div>
                    <InputHolder>
                    <Input placeholder="search"/>
                    <Icon2 />
                    </InputHolder>
                </Div>
                <Div>3</Div>
            </Main>
        </Container>
    </div>
  )
}

// const Main = styled.div``
const Icon2 = styled(BiSearch)`
padding: 0 10px;
`
const InputHolder = styled.div`
width: 300px;
height: 30%;
background-color: lightgray;
display: flex;
align-items: center;
`
const Input = styled.input`
flex: 1;
height: 25%;
outline: 1px solid black;
padding-left: 10px;
:focus{
    outline: 2px solid #a10da1;
}

::placeholder{
    padding-left: 0px;
}
`;

const Icon = styled(BsThreeDotsVertical)`
margin-top: 5px;
padding: 4px 6px;
border-radius: 3px;

:hover{
    background-color: #e1e1e1;
    cursor: pointer;
}
`
const Text = styled.div`
margin: 0 10px;
font-weight: 700;
transition: all 0.8s ease-in-out;

:hover{
    color: purple;
    cursor: pointer;
}
`
const Logo = styled.div``
const Div = styled.div`
display: flex;
align-items: center;
height: 100%;

`

const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 80px;
background-color: white;
border-top: 1px solid silver; 
border-width: 1px solid silver;

box-shadow: rgba(0 ,0, 0, 0.5) 0px 6px 24px 0px,
rgba(0, 0, 0, 0.8) 0px 0px 0px 1px;
display: flex;
justify-content: center;

/* border: 1px 0px solid black; */

`

