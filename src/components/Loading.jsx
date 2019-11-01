import React, { Component } from 'react'
import { BounceLoader } from 'react-spinners'
export default class Loading extends Component {
  render() {
    return (
      <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <BounceLoader
          // css={override}
          sizeUnit={'px'}
          size={20}
          color={'#2d8cf0'}
        />
      </div>
    )
  }
}

