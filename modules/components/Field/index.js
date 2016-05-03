import React from 'react'
import { field, label, input, error } from './styles.css'

export default React.createClass({
  displayName: 'Field',

  propTypes: {
    label: React.PropTypes.string.isRequired,
    touched: React.PropTypes.bool,
    error: React.PropTypes.string
  },

  errorMessage() {
    let props = this.props
    return props.touched && props.error &&
      (<div className={error}>{props.error}</div>)
  },

  render() {
    let props = this.props
    return (
      <div className={field}>
        <label className={label}>{props.label}</label>
        <input type="text" className={input} {...props}/>
        {this.errorMessage()}
      </div>
    )
  }
})

