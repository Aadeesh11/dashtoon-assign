import React from 'react'
import './Nav.css'

export default function Nav(props) {
    const {edit, setEdit, setShowInfo} = props
  return (
    <div className='Nav'>
        <button className='Edit' onClick={e => setShowInfo(true)}>
            info
        </button>
        <button className='Edit' onClick={e => setEdit(!edit)}>
            {edit ? 'Read': 'Edit'}
        </button>
    </div>
  )
}
