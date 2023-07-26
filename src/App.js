
import './App.scss';
import React from "react"
import Landing from './pages/Landing/Landing';
import {Content,Theme} from "@carbon/react"
import TutorialHeader from './components/Header/TutorialHeader';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Content>
      <Theme theme='g100'>
        <TutorialHeader />
      </Theme>
      <Landing />
    <Footer />
    </Content>
    
  );
}

export default App;
