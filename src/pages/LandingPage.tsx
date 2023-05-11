import React from 'react'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <Wrapper>
       <Container>
      <Main>
        LandingPage
      </Main>
    </Container>
    </Wrapper>

  )
}

export default LandingPage

const Main = styled.div`

`;

const Container = styled.div`
width: calc(100% - 200px);
height: calc(100vh-122px);
background-color: red;
display: flex;
justify-content: flex-end;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
;

`