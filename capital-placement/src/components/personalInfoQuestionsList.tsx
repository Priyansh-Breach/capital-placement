// PersonalInfoQuestionsList.tsx
import React from 'react';
import PersonalInfoQuestion from './personalInfoQuestion';

interface PersonalInfoQuestionsListProps {
  questions: PersonalInfoQuestion[];
  toggleInternal: (id: string) => void;
  toggleHidden: (id: string) => void;
}

const PersonalInfoQuestionsList: React.FC<PersonalInfoQuestionsListProps> = ({
  questions,
  toggleInternal,
  toggleHidden,
}) => {
  return (
    <div>
      <h2>Personal Information Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>Question Type:</strong> {question.type}<br />
            <strong>Question Text:</strong> {question.questionText}<br />
            <button onClick={() => toggleInternal(question.id)}>
              Toggle Internal: {question.internal ? 'On' : 'Off'}
            </button><br />
            <button onClick={() => toggleHidden(question.id)}>
              Toggle Hidden: {question.hidden ? 'On' : 'Off'}
            </button><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfoQuestionsList;