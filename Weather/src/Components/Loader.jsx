import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
function Loader() {
  return (
    <div><ThreeDots
    visible={true}
    height="80"
    width="80"
    ariaLabel="vortex-loading"
    wrapperStyle={{}}
    wrapperClass="vortex-wrapper"
    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    /></div>
  )
}

export default Loader