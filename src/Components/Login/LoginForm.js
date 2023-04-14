import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";

const LoginForm = () => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          value={username}
          name={username}
          onChange={setUsername}
        />
        <Input
          label="Usuário"
          value={password}
          name={password}
          onChange={setPassword}
        />
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
