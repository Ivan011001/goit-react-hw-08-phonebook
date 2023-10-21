import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/actions';

export default function ContactForm() {
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
    form.reset();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Number
        <input type="text" name="number" />
      </label>
      <button>Add</button>
    </form>
  );
}
