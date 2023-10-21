import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/actions';
import ContactList from 'components/ContactList';
import ContactFormModal from 'components/ContactFormModal';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactFormModal />
      <ContactList />
    </>
  );
}
