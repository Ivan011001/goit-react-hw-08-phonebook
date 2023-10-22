import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/actions';
import ContactList from 'components/ContactList';
import ContactFormModal from 'components/ContactFormModal';
import { useSelector } from 'react-redux';
import { selectContactsCount } from 'redux/contacts/selectors';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const contactsCount = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {contactsCount === 0 && !isLoading && (
        <div
          style={{
            textAlign: 'center',
            marginTop: 300,
          }}
        >
          <h1 style={{ marginBottom: 20 }}>You have no contacts yet</h1>
        </div>
      )}
      <ContactFormModal />
      <ContactList />
    </>
  );
}
