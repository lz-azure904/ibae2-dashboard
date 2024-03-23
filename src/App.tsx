// App.tsx
// import React, { useEffect } from 'react';
import React from 'react';
import IBAE2DashBoard from './Dashboard';
import { GlobalStyle } from './GlobalStyle';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from './authConfig';

const App: React.FC = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // const USER_TIMEOUT = 1000 * 60 * 5; // 15 minutes of inactivity

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

//  const handleLogout = () => {
  
//     const logoutRequest = {
//       postLogoutRedirectUri: "/", // Specifies where to redirect the user after logout. Adjust as needed.
//       // Optionally, you can specify more properties here.
//     };
  
//     instance.logoutRedirect(logoutRequest); // For redirect-based logout
//     // Or use instance.logoutPopup(logoutRequest) for popup-based logout
//   };

  // const SessionTimeoutHandler = () => {
  //   // const { instance } = useMsal();
  
  //   useEffect(() => {
  //     let timeoutId: any;
  
  //     const resetTimeout = () => {
  //       clearTimeout(timeoutId);
  //       timeoutId = setTimeout(() => {
  //         // Force logout or require re-authentication
  //         console.log('Session timed out');
  //         // instance.logoutRedirect(); // Or instance.loginRedirect() for re-authentication
  //         instance.logoutRedirect({ postLogoutRedirectUri: "/" })
  //         // handleLogout();
  //       }, USER_TIMEOUT);
  //     };
  
  //     // Reset the timeout on various user activities
  //     window.addEventListener('mousemove', resetTimeout);
  //     window.addEventListener('keydown', resetTimeout);
  //     window.addEventListener('scroll', resetTimeout);
  
  //     // Set initial timeout
  //     resetTimeout();
  
  //     // Cleanup on component unmount
  //     return () => {
  //       clearTimeout(timeoutId);
  //       window.removeEventListener('mousemove', resetTimeout);
  //       window.removeEventListener('keydown', resetTimeout);
  //       window.removeEventListener('scroll', resetTimeout);
  //     };
  //   }, [instance]);
  
  //   return null; // This component does not render anything
  // };



  return (
    <>
      <div>
        {isAuthenticated ? (
         
          <>
            <p>User is authenticated</p>
            <GlobalStyle />
            <div className="App">
              <IBAE2DashBoard />
            </div>
          </>
        ) : (
          // <button onClick={handleLogin}>Login</button>
          <section className="grid h-screen place-items-center">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome To iBAE2</h2><br />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">You currently not logged in. Click the button to log in!</p>
              <button
                type="button"
                onClick={handleLogin}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Login
              </button>
            </div>
      
          </section>
        )}
      </div>
      
    </>
  );
};

export default App;


