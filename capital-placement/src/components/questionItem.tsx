// QuestionItem.tsx
import React, { useState } from 'react';
import "./questionItem.css"
import {AiOutlineEdit, AiOutlineDelete, AiOutlineUnorderedList} from "react-icons/ai"

interface QuestionItemProps {
  question: Question;
  updateQuestion: (updatedQuestion: Question) => void;
  deleteQuestion: (id: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  updateQuestion,
  deleteQuestion,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(question.questionText);
  const [editedOptions, setEditedOptions] = useState<string[]>(question.options || []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    const updatedQuestion: Question = {
      ...question,
      questionText: editedText,
      options: question.type === 'Multiple Choice' ? editedOptions : undefined,
    };
    updateQuestion(updatedQuestion);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedText(question.questionText);
    setEditedOptions(question.options || []);
    setEditing(false);
  };

  const handleEditOption = (index: number, value: string) => {
    const updatedOptions = [...editedOptions];
    updatedOptions[index] = value;
    setEditedOptions(updatedOptions);
  };

  const handleDeleteOption = (index: number) => {
    const updatedOptions = [...editedOptions];
    updatedOptions.splice(index, 1);
    setEditedOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setEditedOptions([...editedOptions, '']); // This should be handleAddOption, not handleEditOption
  };

  return (
    <div className="question_item">
      <p className='question_type'>{question.type}</p>
      {editing ? (
        <div>
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className='edit_text'
          />
          {question.type === 'Multiple Choice' && (
            <div id='Options'>
              <p className='headings'>Choice</p>
              {editedOptions.map((option, index) => (
                <div key={index} className='option'>
                  <AiOutlineUnorderedList />
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleEditOption(index, e.target.value)}
                    className='options_text_input'
                  />
                  <button onClick={() => handleDeleteOption(index)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
              <button id='Add_option' onClick={handleAddOption}>Add Option</button>
            </div>
          )}
          <div id='Buttons'>
            <button id='Add_option' onClick={handleSave}>Save</button>
            <button id='Cancel_option' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div id='Question_item'>
          <p className='question_item_text'>{question.questionText}</p>
          <button className='question_item_icons' onClick={handleEdit}><AiOutlineEdit /></button>
          <button className='question_item_icons' onClick={() => deleteQuestion(question.id)}><AiOutlineDelete /></button>
        </div>
      )}
      <div id="Separator_line" />
    </div>
  );
};

export default QuestionItem;
