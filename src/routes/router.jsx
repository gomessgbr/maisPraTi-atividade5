import { createBrowserRouter } from "react-router-dom";

import { MovieSearch } from "../pages/movie-search/movie-search";
import { Home } from "../pages/home/home";
import { QRCodeGenerator } from "../pages/qrcode-generator/qrcode-generator";
import { IPAddressFinder } from "../pages/ip-finder/ip-finder";
import { TodoApp } from "../pages/todo-app/todo-app";
import { QuizApp } from "../pages/quiz-app/quiz-app";
import { LanguageTranslator } from "../pages/language-translator/language-translator";
import { ErrorFallBack, Layout } from "../components";
import { Login } from "../pages/login/login";


export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    element: <Layout />,
    errorElement: <ErrorFallBack />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/qr-code-generator",
        element: <QRCodeGenerator />,
      },
      {
        path: "/ip-address-finder",
        element: <IPAddressFinder />,
      },
      {
        path: "/movie-search",
        element: <MovieSearch />,
      },
      {
        path: "/todo-app",
        element: <TodoApp />,
      },
      {
        path: "/quiz-app",
        element: <QuizApp />,
      },
      {
        path: "/language-translator",
        element: <LanguageTranslator />,
      },
    ],
  },
]);
