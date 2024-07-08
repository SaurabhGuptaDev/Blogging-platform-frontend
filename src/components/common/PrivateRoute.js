
// import React from 'react';
// import { Route, Navigate,Routes } from 'react-router-dom';
// import  isAuthenticated from './auth'; // Implement your authentication check function

// const PrivateRoute = ({ element: Element, ...rest }) => (
//   <Routes>
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Element {...props} />
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />
//   </Routes>
// );

// export default PrivateRoute;


import { Navigate } from 'react-router-dom';
import  isAuthenticated from './auth'; // Implement your authentication check function

const PrivateRoute = ({ element: Element, ...rest }) => {
  // return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
  return <Element {...rest}/>
};

export default PrivateRoute;
