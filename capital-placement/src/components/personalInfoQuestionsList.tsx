// PersonalInfoQuestionsList.tsx
import React from 'react';
import PersonalInfoQuestion from './personalInfoQuestion'; // Import the PersonalInfoQuestion type

interface PersonalInfoQuestionsListProps {
  questions: PersonalInfoQuestion[];
}

const PersonalInfoQuestionsList: React.FC<PersonalInfoQuestionsListProps> = ({ questions }) => {
  return (
    <div>
      <h2>Personal Information Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>Question Type:</strong> {question.type}<br />
            <strong>Question Text:</strong> {question.questionText}<br />
            <strong>Modifiable:</strong> {question.modifiable ? 'Yes' : 'No'}<br />
            {question.modifiable && (
              <>
                <strong>Internal:</strong> {question.internal ? 'Yes' : 'No'}<br />
                <strong>Hidden:</strong> {question.hidden ? 'Yes' : 'No'}<br />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfoQuestionsList;
