import { createContext, ReactNode, useEffect, useState } from "react";
import { container } from "tsyringe";
import { AuthService } from "../services/auth.service";
import { IUser, IUserContext } from "../types/user.type";
import { HttpService } from "../services/http.service";

export const UserContext = createContext<IUserContext>({
  isLoading: false,
  isAuthenticated: false,
  reFetchUser: () => Promise.resolve(),
  user: null,
  logout: () => Promise.resolve(),
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const authService = container.resolve(AuthService);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Partial<IUser> | null>();

  useEffect(() => {
    reFetchUser();
  }, []);

  const reFetchUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await authService.getMe();
      setUser(data);
      setIsAuthenticated(true);
    } catch (e) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }

  const logout = async () => {
    setIsLoading(true);
    localStorage.clear();
    setIsAuthenticated(false);
    setIsLoading(false);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{
      isAuthenticated,
      isLoading,
      reFetchUser,
      user,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  )
}
