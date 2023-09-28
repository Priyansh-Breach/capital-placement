import './App.css'
import { useState } from 'react';
import axios from 'axios'; // Import Axios
import SideBar from './components/sidebar';
import Header from './components/header';
import ImageUploadPreview from './components/imageUpload';
import QuizCreator from './components/quizCreator';
import PersonalInfoManager from './components/personalInfoManager';

function App() {
  const [image, setImage] = useState<File | null>(null);
  const [personalInformation, setPersonalInformation] = useState([]);

  const [applicationForm, setApplicationForm] = useState({
    coverImage: image,
    personalInformation: personalInformation,
    profile: {
      education: {
        // ... education fields
      },
      experience: {
        // ... experience fields
      },
      resume: '',
      // ... other profile fields
    },
    customisedQuestions: [],
    // ... other form sections
  });

  const GetData = (data: any) => {
    setImage(data);
    console.log(data);
  }

  const PushData = () => {
    // Send a PUT request to your API with the applicationForm data
    axios.put('http://localhost:3000/api/1/{program_id}/programs/', applicationForm)
      .then((response) => {
        console.log('PUT request successful');
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  }

  
  return (
    <div id="OuterCover">
      <SideBar />
      <div id='main_body'>
        <button id='Add_option' onClick={() => PushData}>Submit</button>
        <Header />
        <ImageUploadPreview GetData={GetData}/>
        <PersonalInfoManager setPersonalInformation={setPersonalInformation}/>
        <QuizCreator />
      </div>
    </div>
  )
}

export default App
