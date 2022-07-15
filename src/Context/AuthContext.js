import { useContext, useState, useEffect, createContext } from "react";

// create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [presentMode, setPresentMode] = useState(false)

  useEffect(() => {}, []);

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    presentMode,
    setPresentMode
  };

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
