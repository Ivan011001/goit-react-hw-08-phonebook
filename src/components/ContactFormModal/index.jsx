import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/actions';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ModalOpenButton } from './ContactFormModal.styled';

export default function ContactForModal() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    handleClose();
    form.reset();
  };

  return (
    <div>
      <ModalOpenButton variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </ModalOpenButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new contact</DialogTitle>
        <DialogContent>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <form onSubmit={onFormSubmit}>
              <Box style={{ display: 'flex', gap: 20 }}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment-name">
                    Contact Name
                  </InputLabel>
                  <Input
                    name="name"
                    id="input-with-icon-adornment-name"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment-number">
                    Contact Number
                  </InputLabel>
                  <Input
                    name="number"
                    id="input-with-icon-adornment-number"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>

              <button style={{ display: 'block' }}>Add</button>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}