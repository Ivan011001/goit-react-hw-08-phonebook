import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
}
