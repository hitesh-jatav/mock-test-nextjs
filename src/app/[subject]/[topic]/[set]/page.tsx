"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { dataPaths } from "@/data";
import { useRouter } from "next/navigation";

const SetPage = () => {
  const { subject, topic, set } = useParams();

  const questions = dataPaths?.[subject]?.[topic]?.[set] ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: option,
    }));
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswers[currentIndex]) {
      alert("Please answer the last question before submitting.");
      return;
    }

    let correct = 0;
    questions.forEach((q, i) => {
      if (selectedAnswers[i][0] === q.answer) {
        correct++;
      }
    });
    setScore(correct);
    setIsSubmitted(true);

    // ✅ Store score in localStorage
    const prevScores = JSON.parse(localStorage.getItem("scores") || "{}");

    const subjectKey = subject?.toString() || "";
    const topicKey = topic?.toString() || "";

    const updatedScores = {
      ...prevScores,
      [subjectKey]: {
        ...(prevScores[subjectKey] || {}),
        [topicKey]: `${correct}/${questions.length}`,
      },
    };

    localStorage.setItem("scores", JSON.stringify(updatedScores));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1
        className="text-2xl mb-6 capitalize cursor-pointer"
        onClick={() => router.push("/")}
      >
        🏠{" "}
      </h1>

      {!isSubmitted && (
        <h1 className="text-2xl font-bold mb-6 capitalize">
          {topic} ({questions.length} questions)
        </h1>
      )}

      {questions.length === 0 ? (
        <p className="text-gray-500">No questions found.</p>
      ) : isSubmitted ? (
        // ✅ RESULT SECTION
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-green-600">
            🎉 Your Score: {score} / {questions.length}
          </h2>

          {questions.map((q, idx) => (
            <div
              key={idx}
              className={`p-4 rounded border ${
                selectedAnswers[idx][0] === q.answer
                  ? "border-green-400 bg-green-50"
                  : "border-red-400 bg-red-50"
              }`}
            >
              <p className="font-medium mb-2">
                Q{idx + 1}. {q.question}
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    className={`${
                      opt[0] === q.answer
                        ? "font-semibold text-green-700"
                        : opt === selectedAnswers[idx]
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    {opt}
                    {opt[0] === q.answer ? " (Correct)" : ""}
                    {opt === selectedAnswers[idx] && opt !== q.answer
                      ? " (Your Answer)"
                      : ""}
                  </li>
                ))}
              </ul>
              {q?.explanation && (
                <p className="bg-yellow-100 px-1 pt-2 mt-2">
                  Hint: {q?.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        // ✅ QUIZ SECTION
        <div className="space-y-6">
          <div className="border p-4 rounded shadow bg-white">
            {currentQuestion?.paragraph && (
              <p className="p-2 mb-4 bg-gray-300">
                {currentQuestion.paragraph}
              </p>
            )}
            <h2 className="font-semibold text-lg mb-4">
              Q{currentIndex + 1}. {currentQuestion.question}
            </h2>

            <div className="space-y-2">
              {currentQuestion.options.map((option: string, idx: number) => (
                <label
                  key={idx}
                  className={`block p-2 border rounded cursor-pointer ${
                    selectedAnswers[currentIndex] === option
                      ? "border-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentIndex}`}
                    value={option}
                    checked={selectedAnswers[currentIndex] === option}
                    onChange={() => handleOptionSelect(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={goToNext}
                disabled={!selectedAnswers[currentIndex]}
                className={`px-6 py-2 rounded text-white ${
                  !selectedAnswers[currentIndex]
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SetPage;
