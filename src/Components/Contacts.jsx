import { useEffect, useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../Consts/inputs.js";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
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

    setContacts((prevContacts) => [...prevContacts, contact]);
    console.log(contacts,'contactsss');
    console.log(contact,'Contacttt')
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: ""
    }); // clear the form
  };

  useEffect(() => {
    // Example for saving in localStorage (optional)
    // localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        {
          inputs.map((input) => (
            <input
              key={input.name}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ))
        }

        <button onClick={addHandler}>Add contact</button>
      </div>

      <ContactsList contacts={contacts} />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}

export default Contacts;
