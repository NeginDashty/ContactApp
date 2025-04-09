import React from "react";
import Contacts from "./Contacts";

function ContactsList({contacts}) {
    return(
        <>
        <div>
        <h3>Contact List</h3>
        <ul>
          {contacts.map(contact =>
          <li key={contact.id}> {contact.name} </li> )}
        </ul>
        </div>
        </>
    )
};

export default ContactsList; 