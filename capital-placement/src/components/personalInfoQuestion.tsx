// Define the PersonalInfoQuestion type
interface PersonalInfoQuestion {
  id: string;
  type: string; // Question type (e.g., Short Answer, Number, Date, Dropdown)
  questionText: string; // The text of the question
  modifiable: boolean; // Indicates if the field is modifiable
  internal?: boolean; // Optional: Indicates if the field is internal (only visible to admins)
  hidden?: boolean; // Optional: Indicates if the field is hidden (not visible to users)
}

export default PersonalInfoQuestion;
