import React from 'react'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <HomepageSection>
      <h1>HOMEPAGE</h1>
    </HomepageSection>
  )
}

const HomepageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export default Homepage
