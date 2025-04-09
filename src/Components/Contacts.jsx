import { useEffect, useState } from "react";
import ContactsList from "./ContactsList";


function Contacts(params) {
    const [contacts,setContacts]=useState([]);
    const [contact,setContact]=useState({
        name:"",
        lastName:"",
        email:"",
        phone:""
    })

    const [errorMessage, setErrorMessage]=useState('');

    function changeHandler(event) {
        const value=event.target.value;
        const name=event.target.name;
        setContact((prev)=>({...prev, [name]:value}))
    };

    const addHandler = () => {
        const { name, lastName, email, phone } = contact;

     if (!name || !lastName || !email || !phone) {
        setErrorMessage("⚠️ Invalid! Please fill in all inputs");
        };
        setTimeout(() => {
            setErrorMessage("");
            return;
        }, 1000);

        setContacts((prevContacts) => [...prevContacts, contact]);
        setContact({
          name: "",
          lastName: "",
          email: "",
          phone: ""
        }); // فرم رو بعد از افزودن خالی می‌کنیم
      };
    
      // useEffect برای مانیتور کردن تغییرات contacts
      useEffect(() => {
       
        // اینجا می‌تونی ذخیره‌سازی در localStorage هم انجام بدی مثلاً:
        // localStorage.setItem("contacts", JSON.stringify(contacts));
      }, [contacts]);
    return(
        <>
        <div>
            <div>
                <input type="text"
                placeholder="Name"
                name="name"
                value={contact.name}
                onChange={changeHandler} />

                <input type="text"
                placeholder="LastName"
                name="lastName"
                value={contact.lastName}
                onChange={changeHandler}  />

                <input type="email"
                placeholder="Email"
                name="email"
                value={contact.email}
                onChange={changeHandler} />

                <input type="number"
                placeholder="Phone Number"
                name="phone"
                value={contact.phone}
                onChange={changeHandler} />

                <button onClick={addHandler}>Add contact</button>
            </div>
            <ContactsList contacts={contacts}/>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
        </>
    )
};


export default Contacts;