/*import React from 'react'
import Addtext from './addtext'


const itemList = Addtext.map((item , i) => {
  <Addtext value = {item}></Addtext>
})

export default function Plan() {
  return (
    <div>
      {itemList}
    </div>
  )
}
*/

import React from 'react'

//const Delete = {() => {props.sendDelete(props.id)}}
/*Delete = () => {
  props.sendDelete(props.id)
  } 
*/

export default function Plan2(props) {
  return (
    <div className='row px-5 py-3' >
           <div className='shadow p-2 my-2 col-sm-9'>
              {props.value}
           </div>
           <button className='btn btn-danger px-2 fw-bold col-sm-2 offset-1' onClick={
            () => { props.sendData(props.id) }
           }>Delete</button>
    </div>
  )
}
/* <li>

      </li> */