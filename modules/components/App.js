import React from 'react'
import { IndexLink } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div className="wrapper">
        <Title render="Registration Demo"/>
        {this.props.children}
      </div>
    )
  }
})

