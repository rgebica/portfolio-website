import './App.css';
import Header from "./components/Banner";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <About/>
      <Skills/>
      <Projects/>
      {/*<Contact/>*/}
    </div>
  );
}

export default App;
