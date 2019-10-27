import React from 'react';
import styled from 'styled-components'

function App() {
  return (
    <HomeSection>
      <Title>
        RPG SYSTEM HOMEPAGE
      </Title>
    </HomeSection>
  )
}

const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #000;
`

export default App
