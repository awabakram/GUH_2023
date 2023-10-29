import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Game() {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    fetch('/api/generateQuestion') // Make a GET request to your backend endpoint
      .then((response) => response.json())
      .then((data) =>  {setQuestion(data.question); console.log(data); console.log("STFU USMAN"); console.log(data.question)})
      .catch((error) => console.error('Error fetching question:', error));
  }, []);

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>Question: {question}</p>
    </div>
  );
}
