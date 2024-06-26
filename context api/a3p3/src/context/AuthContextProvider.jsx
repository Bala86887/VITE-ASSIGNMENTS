import { createContext, useState } from "react";
import App from "../App";
// Step 1: Create Context
export const AuthContext = createContext();

// Step 2.A : Provide Context
 exporfunction AuthContextProvider() {

  // State to manage loggedin status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in

  const login = () => setIsLoggedIn(true);
 

  const logout = () => setIsLoggedIn(false);



  return (
    <AuthContext.Provider
      // Providing authentication state and functions to children components
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {/* {prop.children} */}
      <App/>
    </AuthContext.Provider>
  );
}
export default AuthContextProvider