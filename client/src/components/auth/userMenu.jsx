import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserMenu = () => {
  const token = Cookies.get('token') !== undefined;

  const handleLogout = () => {
    Cookies.remove('token');


    window.location.reload();
  };

  return (
    <>
      {token ? (
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              SignUp
            </NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default UserMenu;
