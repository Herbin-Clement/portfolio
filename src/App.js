import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="w-full h-1/10 bg-black ">
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <div className="bg-black12 w-100p h-10v"></div>
    </div>
  );
}

export default App;
