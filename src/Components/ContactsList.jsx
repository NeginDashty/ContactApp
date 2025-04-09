import React from "react";
import Contacts from "./Contacts";
import ContactItem from "./ContactsItem";
function ContactsList({contacts}) {
    return(
        <>
        <div>
        <h3>Contact List</h3>
        {contacts.length ? (<ul>
          {contacts.map(contact =>
          <ContactItem key={contact.id} data={contact}/>
         )}
        </ul>) :<p>No Caontacts Yet!</p>}
        
        </div>
        </>
    )
};

export default ContactsList; 