import './App.css';
import Title from './components/Title.js';
import Project_List from './components/Project_List.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Nav_Bar from './components/Nav_Bar.js';

function App() {
  return (
    <div class="text-white bg-gradient-to-b from-slate-950 to-blue-950">
      <Header />
      <Nav_Bar />
      <div class="flex flex-col gap-8 mx-8 lg:mx-64 lg:gap-16"> 
        <Title />
        <About />
        <Project_List />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
