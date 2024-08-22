import { useId, useState } from "react";
import {
  Button,
  Input,
  LoginContainer,
  LoginForm,
  ErrorArea,
  ErrorMessage,
} from "./login-styles";
import { useAuth } from "../../hooks";

export function Login() {
  const [error, setError] = useState({
    show: false,
    message: "Credenciais Inválidas",
  }); // Define o estado para erros de login
  const { login } = useAuth();

  const id = useId(); // Hook do react que cria ids únicos para serem usados em inputs, forms, labels, buttons etc

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const formData = new FormData(e.target); // Cria um objeto FormData a partir dos dados do formulário (e.target)
    const data = Object.fromEntries(formData.entries()); // Converte o FormData em um objeto JavaScript com as entradas do formulário

    login(data, handleErrorLogin); // Chama a função login passada como prop se as credenciais estiverem corretas
  };

  // Função que é disparada quando o usuário clica no input
  const handleFocus = () => {
    // Caso o show error seja true, é porque ele digitou credenciais erradas, ao desparece no focus do input
    if (error.show) {
      setError({ ...error, show: false }); // Oculta a mensagem de login inválida
    }
  };

  const handleErrorLogin = (message) => {
    setError({ message, show: true });
  };

  return (
    <LoginContainer>
      <LoginForm id={id} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          name="username"
          type="text"
          placeholder="Username" // Placeholder do campo de entrada
          onFocus={handleFocus} // função para desaparecer mensagem de credencias erradas
        />
        <Input
          name="password"
          type="password"
          placeholder="Password" // Placeholder do campo de entrada
          onFocus={handleFocus} // função para desaparecer mensagem de credencias erradas
        />
        <Button type="submit" form={id}>
          Login
        </Button>{" "}
        {/* Botão que envia o formulário */}
        {error.show && (
          <ErrorArea>
            <ErrorMessage>{error.message}</ErrorMessage>
          </ErrorArea>
        )}
      </LoginForm>
    </LoginContainer>
  );
}
