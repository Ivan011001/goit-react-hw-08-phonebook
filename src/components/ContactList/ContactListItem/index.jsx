import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: 245 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/157834378/photo/tropical-beach.jpg?s=612x612&w=0&k=20&c=Er-KcCG57M1rt1ttcigm0N_p_-sY6Tho0SE63CtZrIo="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number: {contact.number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" size="small">
          Change
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
