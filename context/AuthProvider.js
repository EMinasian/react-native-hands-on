import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authUser = null; //authentication logic goes here
    setUser(authUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
