import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <div className="footer">Copyright © 2021-2022</div>
    </div>
  );
}

export default App;
