import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [, , loggedIn] = useContext(DataContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn.email ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;