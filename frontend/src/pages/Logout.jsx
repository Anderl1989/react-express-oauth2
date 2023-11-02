import { Navigate } from "react-router-dom";

function Logout() {
  // remove access tokens, so we are reall logged out
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');

  // redirect to login
  return (
    <Navigate to="/login" replace={true} />
  );
}

export default Logout;
