import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password } = form.elements;

    if (!name.value || !email.value || !password.value) return;

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(user));

    form.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>

      <button>Register</button>
    </form>
  );
}
