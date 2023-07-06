import React from "react";
import User from "../types/User";

export const UserContext = React.createContext(
  {} as { user: any; updateUser: any; updateLoggedIn: any; isLoggedIn: boolean }
);

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
  }, []);

  const updateUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const updateLoggedIn = (token: string, isLoggedIn: boolean, user: User) => {
    if (!isLoggedIn) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser({});
      setIsLoggedIn(false);
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setUser(user);
      setIsLoggedIn(true);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, updateUser, updateLoggedIn, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
