import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { login, logout } from '../../store/actions/index'
import { Redirect } from 'react-router-dom'
import classes from './Login.module.css'


export const Login = props => {

  if (props.isAuthenticated) {
    return <Redirect to='/'/>
  }

  let LoginError = null

  if ( props.loginFailed ) {
    LoginError = <p style={{color: 'red'}}>Unable to login</p>
  }

  return (
    <div className={classes.Form}>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          setTimeout(() => {
            props.login(values)
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label
              className={classes.FormLabel}
              htmlFor="username">Username</label>
            <Field
              id="username"
              className={classes.FormField}
              name="username" />
            <ErrorMessage name="username" component="div" />
            <label
              className={classes.FormLabel}
              htmlFor="password">Password</label>
            <Field
              id="password"
              className={classes.FormField}
              type="password"
              name="password" />
            <ErrorMessage name="password" component="div" />
            <Button
              type="submit"
              disabled={props.submitting}
              variant="contained"
              color="secondary">Login</Button>
          </Form>
        )}
      </Formik>
      {LoginError}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null, 
    loginFailed: state.auth.loginFailed, 
    submitting: state.auth.submitting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: values => dispatch(login(values.username, values.password)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)