import React from 'react'
import { Form } from 'semantic-ui-react'


const LoginForm = ({ onSubmit, username, password, handleChange }) => {
  return (
    <div>
      <h2>Kirjaudu</h2>

      <Form onSubmit={onSubmit}>
        <Form.Input label="käyttäjätunnus">
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Input>
        <Form.Input label="salasana">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Input>
        <Form.Button type='submit'>kirjaudu</Form.Button>
      </Form>
    </div>
  )
}

export default LoginForm
