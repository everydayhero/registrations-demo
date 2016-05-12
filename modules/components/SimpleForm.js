import React from 'react'
import Title from 'react-title-component'
import Form from './Form'
import store from '../../store'
import { Provider } from 'react-redux'

export default React.createClass({

  onSubmit(data) {
    return new Promise((resolve, reject) => {
      const postData = {
        name: data.pagename,
        campaign_id: 'au-6018',
        expires_at: '2016-10-21',
        target: '500.50',
        charity_id: 'au-2510',
        user_name: data.username,
        user_email: data.email,
        user_phone: data.phone
      }

      fetch('https://everydayhero-staging.com/api/v3/pages?access_token=' + process.env.ACCESS_TOKEN, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(function (res) {
        return res.json()
      })
      .then(function (json) {
        location.href = json.activation_url
        resolve()
      })
      .catch(reject)
    })
  },

  render() {
    return (
      <div>
        <Title render={prev => `${prev} | SimpleForm`}/>

        <Provider store={store}>
          <Form onSubmit={this.onSubmit} />
        </Provider>
      </div>
    )
  }
})

