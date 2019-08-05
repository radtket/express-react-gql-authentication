import React from "react";
import PropTypes from "prop-types";

const Home = ({
  history,
  getCurrentCredential: {
    credential: { token },
  },
}) => {
  return (
    <>
      {!token && (
        <button
          type="button"
          onClick={() => {
            history.push("/login");
          }}>
          Login
        </button>
      )}
      {token && (
        <button
          type="button"
          onClick={() => {
            history.push("/logout");
          }}>
          Sign Out
        </button>
      )}
    </>
  );
};

Home.propTypes = {
  getCurrentCredential: PropTypes.shape({
    credential: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
