import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";

const App = ({
  route,
  getStatus: {
    status: { message },
  },
  getCurrentCredential: {
    credential: { token },
  },
}) => {
  return (
    <>
      <h2>
        {`GraphQL Status: ${message}, Is Authenticated: ${
          token && token !== "" ? "Yes" : "No"
        }`}
      </h2>
      <div>{renderRoutes(route.routes)}</div>
    </>
  );
};

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
  getStatus: PropTypes.shape({
    status: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getCurrentCredential: PropTypes.shape({
    credential: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
