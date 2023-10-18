import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}
