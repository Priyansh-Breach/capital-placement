// QuestionForm.tsx
import React, { useState } from 'react';
import "./questionForm.css"
import { AiOutlinePlus, AiOutlineDelete, AiOutlineUnorderedList } from 'react-icons/ai'

// Define an extended type for Question
interface QuestionWithExtras extends Question {
  maxChoices?: number;
  disqualifyNo?: boolean;
  questionDescription?: string; // Add questionDescription property
  maxDuration?: number; // Add maxDuration property
  durationUnit?: string; // Add durationUnit property
}

interface QuestionFormProps {
  addQuestion: (question: QuestionWithExtras) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ addQuestion }) => {
  const [questionType, setQuestionType] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [enableOtherOption, setEnableOtherOption] = useState(false);
  const [maxChoices, setMaxChoices] = useState<number | undefined>(undefined);
  const [disqualifyNo, setDisqualifyNo] = useState(false);
  const [questionDescription, setQuestionDescription] = useState(''); // Added
  const [maxDuration, setMaxDuration] = useState<number | undefined>(undefined); // Added
  const [durationUnit, setDurationUnit] = useState<string>(''); // Added

  const handleAddQuestion = () => {
    if (!questionType || !questionText) {
      alert('Please select a question type and enter the question text.');
      return;
    }

    const newOptions = enableOtherOption ? [...options, 'Other'] : options;
    const newQuestion: QuestionWithExtras = {
      id: Date.now(),
      type: questionType,
      questionText,
      options: questionType === 'Multiple Choice' ? newOptions : undefined,
      maxChoices: questionType === 'Multiple Choice' ? maxChoices : undefined,
      disqualifyNo: questionType === 'Yes/No' ? disqualifyNo : undefined,
      questionDescription: questionType === 'Video Question' ? questionDescription : undefined, // Added
      maxDuration: questionType === 'Video Question' ? maxDuration : undefined, // Added
      durationUnit: questionType === 'Video Question' ? durationUnit : undefined, // Added
    };

    addQuestion(newQuestion);
    setQuestionType('');
    setQuestionText('');
    setOptions([]);
    setEnableOtherOption(false);
    setMaxChoices(undefined);
    setDisqualifyNo(false);
    setQuestionDescription('');
    setMaxDuration(undefined);
    setDurationUnit('');
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleEditOption = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleDeleteOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  return (
    <div id='Question_form'>
      <p className='headings'>Type</p>
      <select id='Question_type' onChange={(e) => setQuestionType(e.target.value)}>
        <option value="">Select Question Type</option>
        <option value="Paragraph">Paragraph</option>
        <option value="Short Answer">Short Answer</option>
        <option value="Yes/No">Yes/No</option>
        <option value="Dropdown">Dropdown</option>
        <option value="Date">Date</option>
        <option value="File Upload">File Upload</option>
        <option value="Video Question">Video Question</option>
        <option value="Multiple Choice">Multiple Choice</option>
      </select>
      <p className='headings'>Question</p>
      <input
        type="text"
        placeholder="Enter Question Text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className='question_text_input'
      />
      {(questionType === 'Multiple Choice' || questionType === 'Dropdown') && (
        <>
          <div id='Options'>
            <p className='headings'>Choice</p>
            {options.map((option, index) => (
              <div key={index} className='option'>
                <AiOutlineUnorderedList />
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleEditOption(index, e.target.value)}
                  className='options_text_input'
                />
                <button id='Delete_option' onClick={() => handleDeleteOption(index)}>
                  <AiOutlineDelete />
                </button>
              </div>
            ))}
            <button id='Add_option' onClick={handleAddOption}>Add Option</button>
            <label id='Enable_other_option'>
              <input
                type="checkbox"
                checked={enableOtherOption}
                onChange={() => setEnableOtherOption(!enableOtherOption)}
                className='checkbox'
              />
              <span className='checkbox'></span>
              Enable "Other" Option
            </label>
          </div>
        </>
      )}
      {(questionType === 'Multiple Choice')&&(
        <>
          <p className='headings'>Max Choice Allowed</p>
          <input
            type="number"
            placeholder="Enter Max Choices"
            value={maxChoices || ''}
            onChange={(e) => setMaxChoices(parseInt(e.target.value) || undefined)}
            id='Max_choices_input'
            className='question_text_input'
          />
        </>
      )}
      {questionType === 'Yes/No' && (
        <div id='Options'>
          <label id='Disqualify_no_option'>
            <input
              type="checkbox"
              checked={disqualifyNo}
              onChange={() => setDisqualifyNo(!disqualifyNo)}
              className='checkbox'
            />
            <span className='checkbox'></span>
            Disqualify candidate if the answer is No
          </label>
        </div>
      )}
      {questionType === 'Video Question' && (
        <>
          <textarea
            rows={6}
            placeholder="Enter Question Description"
            value={questionDescription}
            onChange={(e) => setQuestionDescription(e.target.value)}
            className='question_text_input_description'
          />
          <div id='Duration_cover'>
            <input
              type="number"
              placeholder="Enter Max Duration"
              value={maxDuration || ''}
              onChange={(e) => setMaxDuration(parseInt(e.target.value) || undefined)}
              id='Max_duration_input'
              className='question_text_input_half'
            />
            <input
              type="text"
              placeholder="Enter Duration Unit (e.g., sec, min, hr)"
              value={durationUnit}
              onChange={(e) => setDurationUnit(e.target.value)}
              className='question_text_input_half'
            />
          </div>
        </>
      )}
      <button onClick={handleAddQuestion} id='Add_question'>
        <AiOutlinePlus />
        Add a question
      </button>
    </div>
  );
};

export default QuestionForm;
