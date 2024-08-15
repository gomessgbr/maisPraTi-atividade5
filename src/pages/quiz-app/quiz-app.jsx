import { useState } from "react";
import { Container, OptionButton, Question, Score, Title } from "./quiz-styles";

export function QuizApp() {
 // Usa o hook useState para criar variáveis de estado para a pontuação e a pergunta atual.
 const [score, setScore] = useState(0);
 const [currentQuestion, setCurrentQuestion] = useState(0);

 // Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
 const questions = [
   {
     question: "What is 2+2?", // Pergunta da primeira questão.
     options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
     answer: "4", // Resposta correta para a primeira questão.
   },
   {
     question: "What is 3+3?", // Pergunta da segunda questão.
     options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
     answer: "6", // Resposta correta para a segunda questão.
   },
 ];

 // Função que é chamada quando o usuário responde uma pergunta.
 const handleAnswer = (answer) => {
   // Verifica se a resposta fornecida está correta.
   if (answer === questions[currentQuestion].answer) {
     // Se a resposta estiver correta, aumenta a pontuação em 1.
     setScore(score + 1);
   }
   // Passa para a próxima pergunta.
   setCurrentQuestion(currentQuestion + 1);
 };


 return (
   <Container>
     <Title>Quiz App</Title> {/* Exibe o título do aplicativo de quiz */}
     {currentQuestion < questions.length ? ( // Verifica se ainda há perguntas para responder.
       <div>
         <Question>{questions[currentQuestion].question}</Question> {/* Exibe a pergunta atual */}
         {questions[currentQuestion].options.map((option) => (
           <OptionButton key={option} onClick={() => handleAnswer(option)}>{option}</OptionButton> /* Renderiza os botões de opções de resposta */
         ))}
       </div>
     ) : (
       <Score>Your score: {score}</Score> /* Exibe a pontuação final após responder todas as perguntas */
     )}
   </Container>
 );
}