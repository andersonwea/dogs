import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

const UserContext = React.createContext();

const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [Login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(data);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem("token", token);
    getUser(token);
  };

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
