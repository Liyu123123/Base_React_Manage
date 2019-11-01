import React, { Component } from 'react'
import { Result, Button } from 'antd'
export default class ServerError extends Component {
  render() {
    return (
      <div>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, the server is wrong."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    )
  }
}
