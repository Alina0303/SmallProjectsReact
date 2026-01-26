import { useState } from "react";
import { SingleQuestion } from "./assets/SingleQuestion.jsx";
import data from "./data";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="container">
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </ul>
    </main>
  );
};
export default App;
