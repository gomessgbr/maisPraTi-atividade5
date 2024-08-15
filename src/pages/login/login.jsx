import { useState } from "react";
import { Button, Input, LoginContainer, LoginForm } from "./login-styles";
import { useAuth } from "../../hooks";

export function Login() {
  const [username, setUsername] = useState(""); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(""); // Define o estado para a senha
  const { login } = useAuth();

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (username === "admin" && password === "password") {
      login(`${username}+${password}`); // Chama a função onLogin passada como prop se as credenciais estiverem corretas
    } else {
      alert("Invalid credentials"); // Exibe um alerta se as credenciais estiverem incorretas
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        <Button type="submit">Login</Button>{" "}
        {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
}
