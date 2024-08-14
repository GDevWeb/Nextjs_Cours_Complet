import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
export const AuthenticatedContext = createContext();

export function AuthenticatedProvider({ children }) {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticated = () => {
    setIsAuthenticated((prev) => !prev);
  };

  useEffect(() => {
    if (isAuthenticated === true) {
      alert("user is authenticated");
    }
  }, [isAuthenticated]);

  return (
    <AuthenticatedContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, authenticated }}
    >
      {children}
    </AuthenticatedContext.Provider>
  );
}
