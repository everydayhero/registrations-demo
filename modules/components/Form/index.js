import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { title, form, button, error } from './styles.css'
import Field from '../Field'

export const fields = [ 'pagename', 'username', 'phone', 'email' ]

const validate = (values) => {
  const errors = {}
  if (!values.pagename) {
    errors.pagename = 'Required'
  }
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class SimpleRegistrationForm extends Component {
  errorMessage () {
    const { submitting, errorMessage } = this.props
    return !submitting && errorMessage &&
      <div className={error} dangerouslySetInnerHTML={{ __html: errorMessage }}></div>
  }

  render () {
    const { fields: { pagename, username, phone, email }, resetForm, handleSubmit, submitting } = this.props
    return (
      <form className={form} onSubmit={handleSubmit}>
        <h1 className={title}>Registration Demo</h1>
        {this.errorMessage()}
        <Field label='Page name' placeholder='My Demo Page' {...pagename} />
        <Field label='Your name' placeholder='Tom Thumb' {...username} />
        <Field label='Your phone' placeholder='(07) 1234 5678' {...phone} />
        <Field label='Your email' placeholder='your@email.com' {...email} />
        <div>
          <button type='submit' className={button} disabled={submitting}>
            {submitting ? <i /> : <i />} Submit
          </button>
          <button type='button' className={button} disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

SimpleRegistrationForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default reduxForm({
  form: 'synchronousValidation',
  fields,
  validate
})(SimpleRegistrationForm)
