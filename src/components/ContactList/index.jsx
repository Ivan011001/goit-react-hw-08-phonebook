import ContactListItem from './ContactListItem';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CardLoading from 'components/CardLoading';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <CardLoading />}
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
