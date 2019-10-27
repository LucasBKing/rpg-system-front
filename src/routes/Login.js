import React, { Fragment, useState } from 'react'
import * as Yup from 'yup'
import { Colors } from '../themes'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Input, Button, Spinner } from '../components'
import { authenticate } from '../services'

const Login = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false)

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  })

  const onSubmit = async values => {
    try {
      setIsLoading(true)
      const { data: { token } } = await authenticate({email: values.email, password: values.password})
      if(token) {
        localStorage.setItem('@rpgAuth:token', token)
        setIsLoading(false)
        history.push('/')
      }
    } catch(error) {
      // TODO: toast error message
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Fragment>
      <LoadingBox isVisible={isLoading ? 'visible' : 'hidden'}>
        <Spinner 
          color={Colors.YellowBase}
          width={70}
          height={70}
        />
      </LoadingBox>
      <LoginSection>
        <LoginBox>
          <Title>FirstBlood App</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, touched, errors, handleChange }) => (
              <Form>
                <Input
                  type='email'
                  name='email'
                  value={values.email}
                  error={touched.email && errors.email}
                  placeholder='Email'
                  onChange={handleChange}
                />
                <Input
                  type='password'
                  name='password'
                  value={values.password}
                  error={touched.password && errors.password}
                  placeholder='Password'
                  onChange={handleChange}
                />

                <ButtonGroup>
                  <Button type='submit' variant='primary'>
                    Entrar
                  </Button>
                  <Button variant='secondary'>Registrar-se</Button>
                </ButtonGroup>
              </Form>
            )}
          </Formik>
        </LoginBox>
      </LoginSection>
    </Fragment>
  )
}
const LoadingBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: ${Colors.IndigoBaseLoading};
  visibility: ${({ isVisible }) => isVisible}; 
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  button {
    width: 40%;
  }
`
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55vw;
  height: 40vh;
  form {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 40vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
  @media only screen and (min-width: 1920px) {
    width: 20vw;
  }
`

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Title = styled.h1`
  color: ${Colors.WhiteBase};
  font-size: 2vw;
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 768px) {
    font-size: 6vw;
  }
  @media (max-width: 425px) {
    font-size: 8vw;
  }
`

export default withRouter(Login)
