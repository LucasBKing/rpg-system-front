import React from 'react'
import styled from 'styled-components'
import { Colors } from '../themes'

const Button = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'primary':
      return <Primary {...props}>{children}</Primary>
    case 'secondary':
      return <Secondary {...props}>{children}</Secondary>
    default:
      return <Base {...props}>{children}</Base>
  }
}


const Base = styled.button`
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &:hover {
    transform: translateY(-0.25em);
  }
`

const Primary = styled(Base)`
  background-color: ${Colors.YellowBase};
  border-color: ${Colors.YellowBase};
  color: ${Colors.BlackBase};
  &:hover {
    background-color: ${Colors.YellowLight};
    border-color: ${Colors.YellowLight};
  }
`

const Secondary = styled(Base)`
  background-color: ${Colors.WhiteBase};
  border-color: ${Colors.WhiteBase};
  color: ${Colors.BlackBase};
  &:hover {
    color: ${Colors.IndigoBase};
  }
`

export default Button