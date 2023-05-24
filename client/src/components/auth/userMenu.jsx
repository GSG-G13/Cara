import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserMenu = () => {
  // Check if user is logged in based on token presence in cookies
  const token = Cookies.get('token');
  console.log(token);
  const handleLogout = () => {
    // Remove the "token" cookie
    Cookies.remove('token');

    // Perform any additional logout actions if needed

    // Reload the page or redirect to the desired location
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
