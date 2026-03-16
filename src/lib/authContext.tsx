import { createContext, useContext, useState, ReactNode } from "react";
import { Author } from "./mockData";

interface AuthContextType {
  user: Author | null;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Author | null>(null);

  const login = (_email: string, _password: string) => {
    setUser({ id: "current", name: "You", avatar: "https://i.pravatar.cc/150?img=12", bio: "A curious mind." });
  };

  const signup = (name: string, _email: string, _password: string) => {
    setUser({ id: "current", name, avatar: "https://i.pravatar.cc/150?img=12", bio: "A curious mind." });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
