import ContactListItem from './ContactListItem';
import { selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}
