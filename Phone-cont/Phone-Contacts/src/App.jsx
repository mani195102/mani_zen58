import AddContacts from './AddContacts'
import './App.css'
import ShowContacts from './ShowContacts'

function App() {
  let PhoneContactList = [
      { 
        id:1,
        name:"Manimuthu",
        phone:"123456789"
    },
    { 
      id:2,
      name:"Arjun",
      phone:"123456790"
  },
  { 
    id:3,
    name:"Jayaram",
    phone:"234567890"
  }
];
 return (
    <div>
      <ShowContacts contactList={PhoneContactList}/>
      <hr/>
      {/* <AddContacts /> */}
      
    </div>
  )
}

export default App
