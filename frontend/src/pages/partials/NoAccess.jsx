import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

import { isTokenValid } from "../../helpers/token";

function NoAccess({ children }) {
  // check if token is NOT valid and render child component
  if (!isTokenValid(true)) {
    return (
      <>{ children }</>
    );
  }
  // otherwise redirect to todos page
  return (
    <Navigate to="/" replace={true} />
  );
}

NoAccess.propTypes = {
  children: PropTypes.node,
};

export default NoAccess;
