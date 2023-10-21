import ContactListItem from './ContactListItem';
import Loading from 'components/Loading';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loading />}
      <Box display="flex" flexWrap="wrap" gap={10}>
        {contacts.map(contact => (
          <div key={contact.id}>
            <ContactListItem contact={contact} />
          </div>
        ))}
      </Box>
    </>
  );
}
