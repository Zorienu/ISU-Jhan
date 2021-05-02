import './App.css';
import { useState } from 'react'
import { Container } from '@material-ui/core'

import Navbar from './components/Navbar';
import Controls from './components/Controls'
import StateConfiguration from './components/StateConfiguration'
import VideoCards from './components/VideoCards'
import Footer from './components/Footer'

function App() {
  const [isAuto, setIsAuto] = useState(true)
  function handleChange(e) {
    console.log(e.target.checked)
    setIsAuto(e.target.checked)
  }

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <StateConfiguration callback={handleChange} />
        <VideoCards />
        <Controls auto={isAuto} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
