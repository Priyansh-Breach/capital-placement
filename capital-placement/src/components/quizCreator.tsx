// quizCreator.tsx
import React, { useState } from 'react';
import './quizCreator.css';
import QuestionForm from './questionForm';
import QuestionItem from './questionItem';

interface Question {
  id: number;
  type: string;
  questionText: string;
  options?: string[];
  maxChoices?: number | undefined; // Include maxChoices property in the Question type
  disqualifyNo?: boolean | undefined; // Include disqualifyNo property in the Question type
}

const QuizCreator: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = (newQuestion: Question) => {
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (updatedQuestion: Question) => {
    const updatedQuestions = questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (id: number) => {
    const updatedQuestions = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
  };

  return (
    <div id="QuizCreator">
      <div className="cyan-ribbon">Additional Questions</div>
      <div>
        {questions.map((question) => (
          <QuestionItem
          key={question.id}
          question={question}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
          />
          ))}
      </div>
      <QuestionForm addQuestion={addQuestion} />
    </div>
  );
};

export default QuizCreator;
