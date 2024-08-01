/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

// const User = (props) => {
//   return (
//       <div>
//           <h1>{props.Name}</h1>
          

//     </div>
//   )
// }

const User = ({name , Age , Num}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{Age}</h1>
            <h1>{Num}</h1>
      </div>
    )
  }

export default User