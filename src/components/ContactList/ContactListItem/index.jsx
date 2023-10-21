import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'lightblue',
}));

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <DemoPaper elevation={4}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </DemoPaper>
  );
}
