// PersonalInfoManager.tsx
import React, { useState } from 'react';
// import './PersonalInfoManager.css'; // Import your CSS file
import PersonalInfoForm from './personalInfo';
import PersonalInfoQuestionsList from './personalInfoQuestionsList';
import PersonalInfoQuestion from './personalInfoQuestion';

interface PersonalInfoManagerProps {}

const PersonalInfoManager: React.FC<PersonalInfoManagerProps> = () => {
  const [personalInfoQuestions, setPersonalInfoQuestions] = useState<PersonalInfoQuestion[]>([]);

  // Function to add a new personal info question
  const addPersonalInfoQuestion = (question: PersonalInfoQuestion) => {
    setPersonalInfoQuestions([...personalInfoQuestions, question]);
  };

  return (
    <div id="PersonalInfoManager">
      <PersonalInfoForm addPersonalInfoQuestion={addPersonalInfoQuestion} />
      <PersonalInfoQuestionsList questions={personalInfoQuestions} />
    </div>
  );
};

export default PersonalInfoManager;
