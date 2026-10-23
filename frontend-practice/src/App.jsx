import { useState } from "react";

const questions = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language."
  },
  {
    question: "What is React?",
    answer: "React is a library for building user interfaces."
  },
  {
    question: "What is HTML?",
    answer: "HTML defines the structure of a webpage."
  }
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h1>Frontend Interview Questions</h1>

      {questions.map((item, index) => (
        <div key={item.question}>
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {item.question}
          </button>

          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;