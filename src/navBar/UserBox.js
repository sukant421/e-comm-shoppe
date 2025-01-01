import React from 'react'
import {Person} from "react-bootstrap-icons"

export default function UserBox() {
  return (
    <div role='button' className='p-2 user-tab'>
      <Person size={25} />
    </div>
  )
}
