function ContactItem({ data }) {
    const { name, lastName, email, phone } = data;
  
    return (
      <div>
        <li>
          <p>{name} {lastName}</p>
          <p><span>📬</span> {email}</p>
          <p><span>📞</span> {phone}</p>
          <button>🗑</button>
        </li>
      </div>
    );
  };
 
export default ContactItem;
  