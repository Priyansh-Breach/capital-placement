import './App.css'
import SideBar from './components/sidebar'
import Header from './components/header'
import ImageUploadPreview from './components/imageUpload'
import QuizCreator from './components/quizCreator'
import PersonalInfoManager from './components/personalInfoManager'

function App() {
  return (
    <div id="OuterCover">
      <SideBar />
      <div id='main_body'>
        <Header />
        <ImageUploadPreview />
        <PersonalInfoManager />
        <QuizCreator />
      </div>
    </div>
  )
}

export default App
