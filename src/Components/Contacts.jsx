import { useEffect, useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../Consts/inputs.js";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
 

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

`;

const Form=styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow:  #304ffe25 0px 7px 29px;

   
`;

const Input=styled.input`
  width: 45%;
  height: 20px;
  padding: 10px;
  margin: 10px;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  color: #304ffe;
  font-size: 1rem;
`;

const Button=styled.button`
  width: calc(90% + 20px);
  height: 40px;
  padding: 10px;
  margin:  10px 0;
  cursor: pointer;
  background-color:#304ffe;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  color: #fff;
  transition: al ease-in-out 0.3s;
  &:hover{
    box-shadow: #0c2ad487 0px 7px 29px 0px;


  }
`;

const Alert=styled.div`
  width: 400px;
  height: 40px;
  margin: 0 auto ;

`;

const AlertMsg=styled.p`
  background-color: #ffebee;
  color: #f44336;
  padding: 10px;
  border-radius: 10px;
  text-align: center;

`;

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
      <Container>

        <Form>
        {inputs.map((input) => (
          <Input 
            key={input.name}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <Button onClick={addHandler}>Add contact</Button>
      </Form>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
      <Alert> {errorMessage && <AlertMsg style={{ color: "red" }}>{errorMessage}</AlertMsg>} </Alert>
      </Container>
    </>
  );
}

export default Contacts;
