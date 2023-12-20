"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function page() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const questionsData = [
    {
      question:
        "Using the orbit writer keys, what is the Braille equivalent for the word 'sun'?",
      answer: "DFSLSDFK",
    },
    {
      question:
        "What is the Braille equivalent for the word 'dog' using the orbit writer keys?",
      answer: "SJKSDKSJKK",
    },
    {
      question:
        "When using the orbit writer keys, what is the Braille equivalent for the word 'cat'?",
      answer: "SKSDFK",
    },
    {
      question:
        "What is the Braille equivalent for the word 'house' using the orbit writer keys?",
      answer: "SKJSDKSLDFSK",
    },
    {
      question:
        "Using the orbit writer keys, what is the Braille equivalent for the word 'book'?",
      answer: "SDSDKSDKS",
    },
    {
      question:
        "When using the orbit writer keys, what is the Braille equivalent for the word 'bird'?",
      answer: "SDDJSDFKSJK",
    },
    {
      question:
        "What is the Braille equivalent for the word 'happy' using the orbit writer keys?",
      answer: "SKJSSDFJSDFJSDFKK",
    },
    {
      question:
        "Using the orbit writer keys, what is the Braille equivalent for the word 'tree'?",
      answer: "DFKSDFKSKSK",
    },
    {
      question:
        "When using the orbit writer keys, what is the Braille equivalent for the word 'water'?",
      answer: "SDJKLSDFKSKSDFK",
    },
    {
      question:
        "What is the Braille equivalent for the word 'flower' using the orbit writer keys?",
      answer: "SJDSDJSDKSDJKLSKSDFK",
    },
  ];

  useEffect(() => {
    // @ts-ignore
    setQuestions(questionsData.sort(() => Math.random() - 0.5).slice(0, 5)); // Randomly select 5 questions
  }, []);

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    // @ts-ignore
    if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswer("");
  };

  useEffect(() => {
    // Store the score in local storage after completing the test
    if (currentQuestionIndex === questions.length) {
      // @ts-ignore
      const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
      localStorage.setItem("quizScores", JSON.stringify([...scores, score]));
    }
  }, [currentQuestionIndex, questions.length, score]);

  return (
    <MaxWidthWrapper>
      <div className="m-8 p-4 bg-gray-200 rounded shadow-md">
        {currentQuestionIndex < questions.length ? (
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {/* @ts-ignore */}
              {questions[currentQuestionIndex].question}
            </h1>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="border p-2 mb-4"
              placeholder="Enter your answer"
            />
            <button
              onClick={handleAnswerSubmit}
              className="bg-rose-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Quiz Completed!</h1>
            <p>Your Score: {score}</p>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
}

export default page;
