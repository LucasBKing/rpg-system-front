import React from 'react'
import styled from 'styled-components'
import { Colors } from '../themes'

const Input = ({ placeholder, value, name, error, ...props }) => (

  <Container filled={value && value.length}>
    <Base {...props} value={value} name={name} error={error} />
    {placeholder && (
      <Placeholder error={error} htmlFor={name}>
        {placeholder}
      </Placeholder>
    )}
    {error && <Error>{error}</Error>}
  </Container>
)

const Container = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  background-color: ${Colors.IndigoBase};
  ${({ filled }) =>
    filled &&
    `
    label {
      color: ${({ error }) => (error ? Colors.ErrorBase : Colors.WhiteBase)};
      transform: translateY(-100%);
      font-size: .8em;
    }
  `}
  &:-webkit-autofill {
    label {
      color: ${({ error }) => (error ? Colors.ErrorBase : Colors.WhiteBase)};
      transform: translateY(-100%);
      font-size: 0.8em;
    }
  }
`

const Placeholder = styled.label`
  color: ${({ error }) => (error ? Colors.ErrorBase : Colors.WhiteBase)};
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
`

const Base = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom-color: ${({ error }) =>
    error ? Colors.ErrorBase : Colors.WhiteBase};
  border-bottom-style: solid;
  border-bottom-width: 2px;
  outline: none;
  padding: 5px 0;
  transition: all 0.2s ease-in-out;
  width: 100%;
  color: ${Colors.WhiteBase};
  &:focus {
    border-bottom-color: ${Colors.WhiteBase};
    & + label {
      color: ${Colors.WhiteBase};
      transform: translateY(-100%);
      font-size: 0.8em;
    }
  }
  /* to get ride of the yellow color in chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5500s ease-in-out 0s;
    -webkit-box-shadow: inset 0 0 0 500px transparent;
  }

  /* Materialize fix labels overlapping */
  &:-webkit-autofill + label {
    font-size: 0.8em;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  /* fix clicking label does not activate text input */
  label {
    pointer-events: all;
  }
`

const Error = styled.span`
  color: ${Colors.ErrorBase};
  display: block;
  font-size: 0.8em;
`

export default Input
