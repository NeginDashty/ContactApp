import { useEffect, useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../Consts/inputs.js";
import { v4 as uuidv4 } from 'uuid';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  function changeHandler(event) {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  }

  const addHandler = () => {
    const { name, lastName, email, phone } = contact;

    if (!name || !lastName || !email || !phone) {
      setErrorMessage("⚠️ Invalid! Please fill in all inputs");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }

    const newContact = { ...contact, id: uuidv4() };
    setContacts((prevContacts) => [...prevContacts, newContact]);

    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: ""
    });
  };

  useEffect(() => {
    // Optional: Save to localStorage
  }, [contacts]);

  const deleteHandler = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <div>
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add contact</button>
      </div>

      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}

export default Contacts;
