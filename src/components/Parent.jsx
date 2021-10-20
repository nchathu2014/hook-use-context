import React from 'react';
import Child from './Child'

const Parent = () => {
 return (
   <React.Fragment>
    <h2>I am Parent</h2>
    <Child/>
   </React.Fragment>
 )
}

export default Parent;