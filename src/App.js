import './App.css';
import Title from './components/Title.js';
import Project_List from './components/Project_List.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

document.body.style = 'background: #0F172A;';

function App() {
  return (
    <div class="text-white">
      <Header />
      <div class="flex flex-col gap-8"> 
        <Title />
        <About />
        <Project_List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
