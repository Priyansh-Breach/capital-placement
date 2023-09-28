// PersonalInfoForm.tsx
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import PersonalInfoQuestion from './personalInfoQuestion';

interface PersonalInfoFormProps {
  addPersonalInfoQuestion: (question: PersonalInfoQuestion) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ addPersonalInfoQuestion }) => {
  const [questionType, setQuestionType] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [modifiable, setModifiable] = useState(false);
  const [internal, setInternal] = useState(true); // Default to true
  const [hidden, setHidden] = useState(true); // Default to true

  const handleAddQuestion = () => {
    if (!questionType || !questionText) {
      alert('Please select a question type and enter the question text.');
      return;
    }

    const newPersonalInfoQuestion: PersonalInfoQuestion = {
      id: Date.now().toString(), // Convert to string
      type: questionType,
      questionText,
      modifiable,
      internal, // Use the state value
      hidden, // Use the state value
    };

    addPersonalInfoQuestion(newPersonalInfoQuestion);
    setQuestionType('');
    setQuestionText('');
    setModifiable(false);
    setInternal(true); // Reset to true
    setHidden(true); // Reset to true
  };

  
  return (
    <div id='Personal_info_form'>
      <p className='headings'>Type</p>
      <select id='Question_type' onChange={(e) => setQuestionType(e.target.value)}>
        <option value="">Select Question Type</option>
        <option value="Short Answer">Short Answer</option>
        <option value="Number">Number</option>
        <option value="Date">Date</option>
        <option value="Dropdown">Dropdown</option>
      </select>
      <p className='headings'>Question</p>
      <input
        type="text"
        placeholder="Enter Question Text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className='question_text_input'
      />
      <div id='Modifiable_section'>
        <label id='Modifiable_checkbox'>
          <input
            type="checkbox"
            checked={modifiable}
            onChange={() => setModifiable(!modifiable)}
            className='checkbox'
          />
          <span className='checkbox'></span>
          Modifiable Field
        </label>
        {modifiable && (
          <div id='Internal_and_Hidden_options'>
            <label id='Internal_checkbox'>
              <input
                type="checkbox"
                checked={internal}
                onChange={() => setInternal(!internal)}
                className='checkbox'
              />
              <span className='checkbox'></span>
              Internal
            </label>
            <label id='Hidden_toggle'>
              <input
                type="checkbox"
                checked={hidden}
                onChange={() => setHidden(!hidden)}
                className='checkbox'
              />
              <span className='checkbox'></span>
              Hidden
            </label>
          </div>
        )}
      </div>
      <button onClick={handleAddQuestion} id='Add_personal_info_question'>
        <AiOutlinePlus />
        Add a Personal Info Question
      </button>
    </div>
  );
};

export default PersonalInfoForm;
