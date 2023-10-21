import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/actions';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
}
