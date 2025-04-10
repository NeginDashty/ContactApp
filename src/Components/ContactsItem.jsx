function ContactItem({ data, deleteHandler }) {
  const { id, name, lastName, email, phone } = data;

  return (
    <li>
      <p>{name} {lastName}</p>
      <p><span>📬</span> {email}</p>
      <p><span>📞</span> {phone}</p>
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
