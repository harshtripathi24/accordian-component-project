import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questuion, setQuestion] = useState(data);

  return (
    <>
      <nav className="nav-bar">
        <h2> Accordian Component Project </h2>
      </nav>
      <main>
        <div className="container">
          <h3>Question Answer About Login</h3>
          <section className="info">
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
