import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

import { isTokenValid } from "../../helpers/token";

function Access({ children }) {
  // check if token is valid (user logged in) and draw child component
  if (isTokenValid(true)) {
    return (
      <>{ children }</>
    );
  }
  // when token is not valid, redirect to login
  return (
    <Navigate to="/login" replace={true} />
  );
}

Access.propTypes = {
  children: PropTypes.node,
};

export default Access;
