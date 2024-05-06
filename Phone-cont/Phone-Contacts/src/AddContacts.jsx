import React from 'react'
import Header from './Header'

function AddContacts() {
  return (
    <div>
        <Header headerName="Add: Phone Contacts"/>
        <button>Add</button>
        <div>
            <span>Name</span>
            <span>Mob No</span>
        </div>
    </div>
  )
}

export default AddContacts