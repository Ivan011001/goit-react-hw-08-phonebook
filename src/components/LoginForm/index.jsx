import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form.elements;

    if (!email.value || !password.value) return;

    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(logIn(user));

    form.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        Email
        <input type="password" name="password" />
      </label>
      <button>Login</button>
    </form>
  );
}
