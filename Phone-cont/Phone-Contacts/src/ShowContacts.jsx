import React from 'react'
import Header from './Header'
import './ShowContact.css'

function ShowContacts(props) {
    const deleteHandler = () => {
        alert("Delete buuton is clicked !!")
    }
  return (
    <div>
        <Header headerName="show: Phone Contacts"/>
        <div className="component-body-container">
            <button className="custon-btn add-btn">Add</button>
            <div className="heading-container grid-container">
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Mob No</span>
            </div>
            {
                props.contactList.map(contact => (
                    <div key={contact.id} className="grid-container">
                        <span className="grid-item">{contact.name}</span>
                        <span className="grid-item">{contact.phone}</span>
                        <span className="grid-item">
                            <button className="custon-btn delete-btn" onClick={deleteHandler}>Delete</button>
                        </span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ShowContacts