import { User, UserResponse } from "@/types/user";
import { PropsWithChildren, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (userResponse: UserResponse) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [, setToken] = useLocalStorage<string | null>("token", null);

  const isLoggedIn = !!user;

  const login = (userResponse: UserResponse) => {
    setUser(userResponse.user);
    setToken(userResponse.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
